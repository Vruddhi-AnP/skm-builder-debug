// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class AdvisorService {}

import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';
import { CreateAdvisorProfileDto } from './dto/create-advisor-profile.dto';
import { UpdateAdvisorProfileDto } from './dto/update-advisor-profile.dto';

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
}
