import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';

import { CreateStartupDto } from './dto/create-startup.dto';

import { StartupResponseDataDto } from './types/startup-response.type';

import { UpdateStartupDto } from './dto/update-startup.dto';

@Injectable()
export class StartupService {
  constructor(private prisma: PrismaService) {}

  async create(
    dto: CreateStartupDto,
    founderId: string,
  ): Promise<StartupResponseDataDto> {
    return this.prisma.startup.create({
      data: {
        name: dto.name,

        website: dto.website,

        teamSize: dto.teamSize,

        startupStage: dto.startupStage,

        industry: dto.industry,

        businessModel: dto.businessModel,

        problemStatement: dto.problemStatement,

        solutionOverview: dto.solutionOverview,

        description: dto.description,

        founderId,
      },
    });
  }

  async findAllByFounder(founderId: string): Promise<StartupResponseDataDto[]> {
    return this.prisma.startup.findMany({
      where: {
        founderId,
      },

      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOneByFounder(
    startupId: string,
    founderId: string,
  ): Promise<StartupResponseDataDto> {
    const startup = await this.prisma.startup.findFirst({
      where: {
        id: startupId,
        founderId,
      },
    });

    if (!startup) {
      throw new NotFoundException('Startup not found');
    }

    return startup;
  }

  async updateByFounder(
    startupId: string,
    founderId: string,
    dto: UpdateStartupDto,
  ): Promise<StartupResponseDataDto> {
    await this.findOneByFounder(startupId, founderId);

    return this.prisma.startup.update({
      where: {
        id: startupId,
      },

      data: {
        name: dto.name,

        website: dto.website,

        teamSize: dto.teamSize,

        startupStage: dto.startupStage,

        industry: dto.industry,

        businessModel: dto.businessModel,

        problemStatement: dto.problemStatement,

        solutionOverview: dto.solutionOverview,

        description: dto.description,
      },
    });
  }

  async deleteByFounder(
    startupId: string,
    founderId: string,
  ): Promise<StartupResponseDataDto> {
    await this.findOneByFounder(startupId, founderId);

    return this.prisma.startup.delete({
      where: {
        id: startupId,
      },
    });
  }
}
