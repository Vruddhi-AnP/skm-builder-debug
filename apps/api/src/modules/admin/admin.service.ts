import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';

import { UpdateAdvisorAccountStatusDto } from './dto/update-advisor-account-status.dto';

import { UpdateAdvisorPlanDto } from './dto/update-advisor-plan.dto';

import { UpdateAdvisorVisibilityDto } from './dto/update-advisor-visibility.dto';

@Injectable()
export class AdminService {
  constructor(private readonly prisma: PrismaService) {}

  async findAdvisors() {
    return this.prisma.advisorProfile.findMany({
      select: {
        id: true,

        currentRole: true,
        organization: true,
        experienceLevel: true,

        expertiseArea: true,
        industry: true,
        startupStage: true,
        mentorshipType: true,

        accountStatus: true,
        visibilityStatus: true,
        planCode: true,

        createdAt: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },

      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async updateAdvisorAccountStatus(
    advisorId: string,
    dto: UpdateAdvisorAccountStatusDto,
  ) {
    await this.ensureAdvisorExists(advisorId);

    return this.prisma.advisorProfile.update({
      where: {
        id: advisorId,
      },

      data: {
        accountStatus: dto.accountStatus,
      },

      select: {
        id: true,
        accountStatus: true,
        visibilityStatus: true,
        planCode: true,
        updatedAt: true,
      },
    });
  }

  async updateAdvisorVisibility(
    advisorId: string,
    dto: UpdateAdvisorVisibilityDto,
  ) {
    await this.ensureAdvisorExists(advisorId);

    return this.prisma.advisorProfile.update({
      where: {
        id: advisorId,
      },

      data: {
        visibilityStatus: dto.visibilityStatus,
      },

      select: {
        id: true,
        accountStatus: true,
        visibilityStatus: true,
        planCode: true,
        updatedAt: true,
      },
    });
  }

  async updateAdvisorPlan(advisorId: string, dto: UpdateAdvisorPlanDto) {
    await this.ensureAdvisorExists(advisorId);

    return this.prisma.advisorProfile.update({
      where: {
        id: advisorId,
      },

      data: {
        planCode: dto.planCode.trim(),
      },

      select: {
        id: true,
        accountStatus: true,
        visibilityStatus: true,
        planCode: true,
        updatedAt: true,
      },
    });
  }

  private async ensureAdvisorExists(advisorId: string) {
    const advisor = await this.prisma.advisorProfile.findUnique({
      where: {
        id: advisorId,
      },

      select: {
        id: true,
      },
    });

    if (!advisor) {
      throw new NotFoundException('Advisor not found.');
    }
  }
}
