import { Module } from '@nestjs/common';

import { PrismaModule } from '../../prisma/prisma.module';
import { InvestorController } from './investor.controller';
import { InvestorService } from './investor.service';

@Module({
  imports: [PrismaModule],
  controllers: [InvestorController],
  providers: [InvestorService],
})
export class InvestorModule {}
