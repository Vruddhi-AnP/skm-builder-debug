import { Module } from '@nestjs/common';

import { APP_GUARD } from '@nestjs/core';

import { ConfigModule } from '@nestjs/config';

import { validateEnv } from './config/validate-env';

import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';

import { AppController } from './app.controller';

import { AppService } from './app.service';

import { AuthModule } from './modules/auth/auth.module';

import { FounderModule } from './modules/founder/founder.module';

import { StartupModule } from './modules/startup/startup.module';

import { BuilderModule } from './modules/builder/builder.module';

import { ReadinessModule } from './modules/readiness/readiness.module';

import { AdvisorModule } from './modules/advisor/advisor.module';

import { ConsultationModule } from './modules/consultation/consultation.module';

import { InvestorModule } from './modules/investor/investor.module';

import { AdminModule } from './modules/admin/admin.module';

import { HealthModule } from './modules/health/health.module';

import { PrismaModule } from './prisma/prisma.module';

import { TransformResponseInterceptor } from './common/interceptors/transform-response.interceptor';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: validateEnv,
    }),

    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 100,
      },
    ]),

    AuthModule,

    FounderModule,

    StartupModule,

    BuilderModule,

    ReadinessModule,

    AdvisorModule,

    ConsultationModule,

    InvestorModule,

    AdminModule,

    HealthModule,

    PrismaModule,
  ],

  controllers: [AppController],

  providers: [
    AppService,

    TransformResponseInterceptor,

    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
