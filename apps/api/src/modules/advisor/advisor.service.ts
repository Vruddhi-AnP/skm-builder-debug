import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { AccountStatus, Prisma, VisibilityStatus } from '@prisma/client';

import { PrismaService } from '../../prisma/prisma.service';

import { CreateAdvisorProfileDto } from './dto/create-advisor-profile.dto';
import { PublicAdvisorDto } from './dto/public-advisor.dto';
import { UpdateAdvisorProfileDto } from './dto/update-advisor-profile.dto';

const PUBLIC_ADVISOR_SELECT = {
  id: true,

  currentRole: true,
  organization: true,
  experienceLevel: true,

  expertiseArea: true,
  industry: true,
  startupStage: true,
  mentorshipType: true,
  keySkills: true,
  advisoryGoal: true,

  weeklyAvailability: true,
  preferredTimeSlot: true,
  sessionMode: true,
  preferredTimezone: true,
  languages: true,
  founderEngagementPreference: true,

  advisoryPricingModel: true,
  consultationType: true,

  user: {
    select: {
      name: true,
    },
  },
} satisfies Prisma.AdvisorProfileSelect;

type PublicAdvisorRecord = Prisma.AdvisorProfileGetPayload<{
  select: typeof PUBLIC_ADVISOR_SELECT;
}>;

@Injectable()
export class AdvisorService {
  constructor(private readonly prisma: PrismaService) {}

  async createProfile(userId: string, dto: CreateAdvisorProfileDto) {
    const existingProfile = await this.prisma.advisorProfile.findUnique({
      where: {
        userId,
      },
    });

    if (existingProfile) {
      throw new ConflictException('Advisor profile already exists.');
    }

    return this.prisma.advisorProfile.create({
      data: {
        userId,
        ...dto,
      },
    });
  }

  async getProfile(userId: string) {
    const profile = await this.prisma.advisorProfile.findUnique({
      where: {
        userId,
      },
    });

    if (!profile) {
      throw new NotFoundException('Advisor profile not found.');
    }

    return profile;
  }

  async updateProfile(userId: string, dto: UpdateAdvisorProfileDto) {
    const existingProfile = await this.prisma.advisorProfile.findUnique({
      where: {
        userId,
      },
    });

    if (!existingProfile) {
      throw new NotFoundException('Advisor profile not found.');
    }

    return this.prisma.advisorProfile.update({
      where: {
        userId,
      },

      data: dto,
    });
  }

  async discover(): Promise<PublicAdvisorDto[]> {
    const advisors = await this.prisma.advisorProfile.findMany({
      where: {
        accountStatus: AccountStatus.APPROVED,

        visibilityStatus: VisibilityStatus.PUBLISHED,
      },

      select: PUBLIC_ADVISOR_SELECT,

      orderBy: {
        updatedAt: 'desc',
      },
    });

    return advisors.map((advisor) => this.toPublicAdvisor(advisor));
  }

  async discoverById(advisorId: string): Promise<PublicAdvisorDto> {
    const advisor = await this.prisma.advisorProfile.findFirst({
      where: {
        id: advisorId,

        accountStatus: AccountStatus.APPROVED,

        visibilityStatus: VisibilityStatus.PUBLISHED,
      },

      select: PUBLIC_ADVISOR_SELECT,
    });

    if (!advisor) {
      throw new NotFoundException('Advisor not found.');
    }

    return this.toPublicAdvisor(advisor);
  }

  private toPublicAdvisor(advisor: PublicAdvisorRecord): PublicAdvisorDto {
    const expertise = this.uniqueStrings([
      advisor.expertiseArea,
      ...this.splitList(advisor.keySkills),
    ]);

    const headline = this.buildHeadline(
      advisor.currentRole,
      advisor.organization,
      advisor.expertiseArea,
    );

    return {
      id: advisor.id,

      fullName: advisor.user.name?.trim() ?? '',

      headline,

      expertise,

      category: advisor.industry?.trim() ?? advisor.expertiseArea?.trim() ?? '',

      organization: advisor.organization,

      experienceLevel: advisor.experienceLevel,

      startupStage: advisor.startupStage,

      mentorshipType: advisor.mentorshipType,

      advisoryGoal: advisor.advisoryGoal,

      availabilityStatus: advisor.weeklyAvailability,

      preferredTimeSlot: advisor.preferredTimeSlot,

      sessionMode: advisor.sessionMode,

      preferredTimezone: advisor.preferredTimezone,

      languages: this.splitList(advisor.languages),

      founderEngagementPreference: advisor.founderEngagementPreference,

      advisoryPricingModel: advisor.advisoryPricingModel,

      consultationType: advisor.consultationType,
    };
  }

  private buildHeadline(
    currentRole: string | null,
    organization: string | null,
    expertiseArea: string | null,
  ): string {
    const role = currentRole?.trim() ?? '';

    const company = organization?.trim() ?? '';

    if (role && company) {
      return `${role} at ${company}`;
    }

    if (role) {
      return role;
    }

    if (company) {
      return company;
    }

    return expertiseArea?.trim() ?? '';
  }

  private splitList(value: string | null): string[] {
    if (!value) {
      return [];
    }

    return value
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean);
  }

  private uniqueStrings(values: Array<string | null | undefined>): string[] {
    const normalized = values
      .flatMap((value) =>
        value ? value.split(',').map((item) => item.trim()) : [],
      )
      .filter(Boolean);

    return [...new Set(normalized)];
  }
}
