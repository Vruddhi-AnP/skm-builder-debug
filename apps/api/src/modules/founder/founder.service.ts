import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';

import { CreateFounderProfileDto } from './dto/create-founder-profile.dto';

import { UpdateFounderProfileDto } from './dto/update-founder-profile.dto';

@Injectable()
export class FounderService {
  constructor(private prisma: PrismaService) {}

  async createProfile(userId: string, dto: CreateFounderProfileDto) {
    const existingProfile = await this.prisma.founderProfile.findUnique({
      where: {
        userId,
      },
    });

    if (existingProfile) {
      throw new ConflictException('Founder profile already exists');
    }

    return this.prisma.founderProfile.create({
      data: {
        userId,

        phoneNumber: dto.phoneNumber,

        location: dto.location,

        founderRole: dto.founderRole,

        startupExperience: dto.startupExperience,

        linkedinUrl: dto.linkedinUrl,

        founderGoal: dto.founderGoal,

        bio: dto.bio,
      },
    });
  }

  async getProfile(userId: string) {
    const profile = await this.prisma.founderProfile.findUnique({
      where: {
        userId,
      },
    });

    if (!profile) {
      throw new NotFoundException('Founder profile not found');
    }

    return profile;
  }

  async updateProfile(userId: string, dto: UpdateFounderProfileDto) {
    await this.getProfile(userId);

    return this.prisma.founderProfile.update({
      where: {
        userId,
      },

      data: {
        phoneNumber: dto.phoneNumber,

        location: dto.location,

        founderRole: dto.founderRole,

        startupExperience: dto.startupExperience,

        linkedinUrl: dto.linkedinUrl,

        founderGoal: dto.founderGoal,

        bio: dto.bio,
      },
    });
  }
}
