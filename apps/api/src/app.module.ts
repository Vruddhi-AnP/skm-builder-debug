import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { FounderModule } from './modules/founder/founder.module';
import { StartupModule } from './modules/startup/startup.module';
import { BuilderModule } from './modules/builder/builder.module';
import { AdvisorModule } from './modules/advisor/advisor.module';
import { InvestorModule } from './modules/investor/investor.module';
import { AdminModule } from './modules/admin/admin.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    FounderModule,
    StartupModule,
    BuilderModule,
    AdvisorModule,
    InvestorModule,
    AdminModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}