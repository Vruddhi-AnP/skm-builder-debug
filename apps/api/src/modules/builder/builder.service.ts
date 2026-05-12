// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class BuilderService {}

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateBuilderDto } from './dto/create-builder.dto';

@Injectable()
export class BuilderService {
  constructor(private prisma: PrismaService) {}

  async saveBuilder(dto: CreateBuilderDto) {
    return this.prisma.builder.create({
      data: dto,
    });
  }
}
