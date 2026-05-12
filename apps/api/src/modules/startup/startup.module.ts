// import { Module } from '@nestjs/common';
// import { StartupController } from './startup.controller';
// import { StartupService } from './startup.service';

// @Module({
//   controllers: [StartupController],
//   providers: [StartupService]
// })
// export class StartupModule {}

import { Module } from '@nestjs/common';
import { StartupController } from './startup.controller';
import { StartupService } from './startup.service';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [StartupController],
  providers: [StartupService],
})
export class StartupModule {}
