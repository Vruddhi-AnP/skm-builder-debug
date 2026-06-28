import { Injectable, NotFoundException } from '@nestjs/common';

import { Prisma } from '@prisma/client';

import { PrismaService } from '../../prisma/prisma.service';

import { CreateBuilderDto } from './dto/create-builder.dto';

import { UpdateBuilderDto } from './dto/update-builder.dto';

@Injectable()
export class BuilderService {
  constructor(private prisma: PrismaService) {}

  async saveBuilder(dto: CreateBuilderDto, founderId: string) {
    const startup = await this.prisma.startup.findFirst({
      where: {
        id: dto.startupId,
        founderId,
      },
    });

    if (!startup) {
      throw new NotFoundException('Startup not found');
    }

    return this.prisma.builder.upsert({
      where: {
        startupId: dto.startupId,
      },

      create: {
        startupId: dto.startupId,

        data: dto.data as Prisma.InputJsonValue,
      },

      update: {
        data: dto.data as Prisma.InputJsonValue,
      },
    });
  }

  async findBuilderByStartup(startupId: string, founderId: string) {
    const startup = await this.prisma.startup.findFirst({
      where: {
        id: startupId,
        founderId,
      },
    });

    if (!startup) {
      throw new NotFoundException('Startup not found');
    }

    const builder = await this.prisma.builder.findUnique({
      where: {
        startupId,
      },
    });

    if (!builder) {
      throw new NotFoundException('Builder not found');
    }

    return builder;
  }

  async updateBuilder(
    startupId: string,
    dto: UpdateBuilderDto,
    founderId: string,
  ) {
    await this.findBuilderByStartup(startupId, founderId);

    const existingBuilder = await this.prisma.builder.findUnique({
      where: {
        startupId,
      },
    });

    if (!existingBuilder) {
      throw new NotFoundException('Builder not found');
    }

    const mergedData = this.deepMerge(
      existingBuilder.data as Record<string, unknown>,
      dto.data,
    );

    return this.prisma.builder.update({
      where: {
        startupId,
      },

      data: {
        data: mergedData as Prisma.InputJsonValue,
      },
    });
  }

  private isPlainObject(value: unknown): value is Record<string, unknown> {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
  }

  private deepMerge(
    target: Record<string, unknown>,
    source: Record<string, unknown>,
  ): Record<string, unknown> {
    const output = { ...target };

    for (const key of Object.keys(source)) {
      const sourceValue = source[key];

      const targetValue = output[key];

      if (this.isPlainObject(targetValue) && this.isPlainObject(sourceValue)) {
        output[key] = this.deepMerge(targetValue, sourceValue);
      } else {
        output[key] = sourceValue;
      }
    }

    return output;
  }
}
