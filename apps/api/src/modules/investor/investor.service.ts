import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';
import { CreateInvestorProfileDto } from './dto/create-investor-profile.dto';
import { UpdateInvestorProfileDto } from './dto/update-investor-profile.dto';

@Injectable()
export class InvestorService {
  constructor(private readonly prisma: PrismaService) {}

  async createProfile(userId: string, dto: CreateInvestorProfileDto) {
    const existingProfile = await this.prisma.investorProfile.findUnique({
      where: {
        userId,
      },
    });

    if (existingProfile) {
      throw new ConflictException('Investor profile already exists.');
    }

    return this.prisma.investorProfile.create({
      data: {
        userId,
        ...dto,
      },
    });
  }

  async getProfile(userId: string) {
    const profile = await this.prisma.investorProfile.findUnique({
      where: {
        userId,
      },
    });

    if (!profile) {
      throw new NotFoundException('Investor profile not found.');
    }

    return profile;
  }

  async updateProfile(userId: string, dto: UpdateInvestorProfileDto) {
    const existingProfile = await this.prisma.investorProfile.findUnique({
      where: {
        userId,
      },
    });

    if (!existingProfile) {
      throw new NotFoundException('Investor profile not found.');
    }

    return this.prisma.investorProfile.update({
      where: {
        userId,
      },
      data: dto,
    });
  }
}
