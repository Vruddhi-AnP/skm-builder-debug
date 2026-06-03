import { Logger, ValidationPipe } from '@nestjs/common';

import { ConfigService } from '@nestjs/config';

import { NestFactory } from '@nestjs/core';

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import helmet from 'helmet';

import { AppModule } from './app.module';

import { validateEnv } from './config/validate-env';

import { HttpExceptionFilter } from './common/filters/http-exception.filter';

import { TransformResponseInterceptor } from './common/interceptors/transform-response.interceptor';

import { API_PREFIX, DEFAULT_PORT } from './common/constants/app.constants';

async function bootstrap() {
  validateEnv();

  const logger = new Logger('Bootstrap');

  const nodeEnv = process.env.NODE_ENV ?? 'development';

  const app = await NestFactory.create(AppModule, {
    logger:
      nodeEnv === 'production'
        ? ['error', 'warn']
        : ['log', 'error', 'warn', 'debug', 'verbose'],
  });

  const configService = app.get(ConfigService);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('SKM Platform API')
    .setDescription('Enterprise startup ecosystem API')
    .setVersion('1.0')
    .addServer(`/${API_PREFIX}`)
    .addBearerAuth(
      {
        type: 'http',

        scheme: 'bearer',

        bearerFormat: 'JWT',

        description: 'Enter JWT access token',
      },
      'access-token',
    )
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);

  SwaggerModule.setup('docs', app, swaggerDocument);

  app.enableCors({
    origin: configService.get<string>('FRONTEND_URL'),

    credentials: true,
  });

  app.use(helmet());

  app.setGlobalPrefix(API_PREFIX);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,

      forbidNonWhitelisted: true,

      transform: true,

      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  app.useGlobalFilters(new HttpExceptionFilter());

  app.useGlobalInterceptors(app.get(TransformResponseInterceptor));

  const port = configService.get<number>('PORT') ?? DEFAULT_PORT;

  await app.listen(port);

  logger.log(`
🚀 API running on:
http://localhost:${port}/${API_PREFIX}
`);

  logger.log(`
📘 Swagger Docs:
http://localhost:${port}/docs
`);

  logger.log(`
🌍 Environment:
${configService.get<string>('NODE_ENV') ?? 'development'}
`);
}

void bootstrap();
