// import { Module } from '@nestjs/common';
// import { AdvisorController } from './advisor.controller';
// import { AdvisorService } from './advisor.service';

// @Module({
//   controllers: [AdvisorController],
//   providers: [AdvisorService],
// })
// export class AdvisorModule {}

import { Module } from '@nestjs/common';

import { PrismaModule } from '../../prisma/prisma.module';
import { AdvisorController } from './advisor.controller';
import { AdvisorService } from './advisor.service';

@Module({
  imports: [PrismaModule],
  controllers: [AdvisorController],
  providers: [AdvisorService],
})
export class AdvisorModule {}
