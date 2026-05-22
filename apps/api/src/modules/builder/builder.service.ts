import { Injectable } from '@nestjs/common';

import { Prisma } from '@prisma/client';

import { PrismaService } from '../../prisma/prisma.service';

import { CreateBuilderDto } from './dto/create-builder.dto';

@Injectable()
export class BuilderService {
  constructor(private prisma: PrismaService) {}

  async saveBuilder(dto: CreateBuilderDto) {
    return this.prisma.builder.create({
      data: {
        startupId: dto.startupId,

        data: dto.data as Prisma.InputJsonValue,
      },
    });
  }
}
