import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';

import { Reflector } from '@nestjs/core';

import { map } from 'rxjs/operators';

import { Observable } from 'rxjs';

import { Request, Response } from 'express';

import { RESPONSE_MESSAGE_KEY } from '../constants/response.constants';

@Injectable()
export class TransformResponseInterceptor implements NestInterceptor {
  constructor(private readonly reflector: Reflector) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const httpContext = context.switchToHttp();

    const response = httpContext.getResponse<Response>();

    const request = httpContext.getRequest<Request>();

    const message =
      this.reflector.get<string>(RESPONSE_MESSAGE_KEY, context.getHandler()) ??
      'Request successful';

    return next.handle().pipe(
      map((data: unknown) => ({
        success: true,

        statusCode: response.statusCode,

        message,

        path: request.url,

        timestamp: new Date().toISOString(),

        data,
      })),
    );
  }
}
