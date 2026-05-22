// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class StartupService {}

import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';

import { CreateStartupDto } from './dto/create-startup.dto';

import { StartupResponseDataDto } from './types/startup-response.type';

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
        industry: dto.industry,
        description: dto.description,
        founderId,
      },
    });
  }
}
