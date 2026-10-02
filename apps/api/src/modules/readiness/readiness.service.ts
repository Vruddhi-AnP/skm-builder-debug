import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from '../../prisma/prisma.service';

import {
  calculateReadiness,
  type ReadinessBuilderData,
} from './readiness.rules';

@Injectable()
export class ReadinessService {
  constructor(private readonly prisma: PrismaService) {}

  async calculate(startupId: string, founderId: string) {
    const startup = await this.findOwnedStartup(startupId, founderId);

    const builder = await this.prisma.builder.findUnique({
      where: {
        startupId: startup.id,
      },
    });

    if (!builder) {
      throw new NotFoundException('Builder not found for this startup');
    }

    const calculation = calculateReadiness(
      builder.data as unknown as ReadinessBuilderData,
    );

    return this.prisma.readinessAssessment.create({
      data: {
        startupId: startup.id,
        overallScore: calculation.overallScore,
        scoreBand: calculation.scoreBand,
        parameterScores: calculation.parameterScores as Prisma.InputJsonValue,
        suggestions: calculation.suggestions as Prisma.InputJsonValue,
      },
    });
  }

  async findLatest(startupId: string, founderId: string) {
    await this.findOwnedStartup(startupId, founderId);

    const assessment = await this.prisma.readinessAssessment.findFirst({
      where: {
        startupId,
      },
      orderBy: {
        generatedAt: 'desc',
      },
    });

    if (!assessment) {
      throw new NotFoundException('Readiness assessment not found');
    }

    return assessment;
  }

  private async findOwnedStartup(startupId: string, founderId: string) {
    const startup = await this.prisma.startup.findFirst({
      where: {
        id: startupId,
        founderId,
      },
      select: {
        id: true,
      },
    });

    if (!startup) {
      throw new NotFoundException('Startup not found');
    }

    return startup;
  }
}
