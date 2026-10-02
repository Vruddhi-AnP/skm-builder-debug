import { Controller, Get, Param, Post } from '@nestjs/common';

import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
  ApiForbiddenResponse,
} from '@nestjs/swagger';

import { Role } from '../../common/enums/role.enum';

import { Auth } from '../auth/decorators/auth.decorator';

import { GetUser } from '../auth/decorators/get-user.decorator';

import { ReadinessService } from './readiness.service';

@ApiTags('Readiness')
@ApiBearerAuth('access-token')
@Controller('readiness')
export class ReadinessController {
  constructor(private readonly readinessService: ReadinessService) {}

  @ApiOperation({
    summary: 'Calculate startup readiness',
    description:
      'Calculates a deterministic readiness score from the persisted builder data for a startup owned by the authenticated founder.',
  })
  @ApiCreatedResponse({
    description: 'Readiness assessment calculated and saved successfully',
  })
  @ApiUnauthorizedResponse({
    description: 'Authentication token missing or invalid',
  })
  @ApiForbiddenResponse({
    description: 'Only founders can access this endpoint',
  })
  @ApiNotFoundResponse({
    description: 'Startup or builder not found',
  })
  @Auth(Role.FOUNDER)
  @Post(':startupId/calculate')
  calculate(
    @Param('startupId') startupId: string,
    @GetUser('id') userId: string,
  ) {
    return this.readinessService.calculate(startupId, userId);
  }

  @ApiOperation({
    summary: 'Get latest startup readiness assessment',
    description:
      'Returns the latest persisted readiness assessment for a startup owned by the authenticated founder.',
  })
  @ApiOkResponse({
    description: 'Latest readiness assessment retrieved successfully',
  })
  @ApiUnauthorizedResponse({
    description: 'Authentication token missing or invalid',
  })
  @ApiForbiddenResponse({
    description: 'Only founders can access this endpoint',
  })
  @ApiNotFoundResponse({
    description: 'Startup or readiness assessment not found',
  })
  @Auth(Role.FOUNDER)
  @Get(':startupId')
  findLatest(
    @Param('startupId') startupId: string,
    @GetUser('id') userId: string,
  ) {
    return this.readinessService.findLatest(startupId, userId);
  }
}
