// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class StartupService {}

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateStartupDto } from './dto/create-startup.dto';

@Injectable()
export class StartupService {
  constructor(private prisma: PrismaService) {}

  async createStartup(dto: CreateStartupDto) {
    return this.prisma.startup.create({
      data: dto,
    });
  }
}