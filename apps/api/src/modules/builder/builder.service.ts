import { Injectable } from '@nestjs/common';

import { Prisma } from '@prisma/client';

import { PrismaService } from '../../prisma/prisma.service';

import { CreateBuilderDto } from './dto/create-builder.dto';

@Injectable()
export class BuilderService {
  constructor(private prisma: PrismaService) {}

  async saveBuilder(dto: CreateBuilderDto) {
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
}
