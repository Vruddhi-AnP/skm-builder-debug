import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';

import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { Role } from '../../common/enums/role.enum';

import { Auth } from '../auth/decorators/auth.decorator';

import { GetUser } from '../auth/decorators/get-user.decorator';

import { BuilderService } from './builder.service';

import { CreateBuilderDto } from './dto/create-builder.dto';

import { UpdateBuilderDto } from './dto/update-builder.dto';

import { BuilderSuccessResponseDto } from './dto/builder-success-response.dto';

@ApiTags('Builders')
@Controller('builder')
export class BuilderController {
  constructor(private readonly builderService: BuilderService) {}

  @ApiOperation({
    summary: 'Create builder profile',

    description:
      'Allows authenticated founders to save startup builder data associated with their startup.',
  })
  @ApiBearerAuth('access-token')
  @ApiCreatedResponse({
    description: 'Startup builder data saved successfully',

    type: BuilderSuccessResponseDto,
  })
  @ApiBadRequestResponse({
    description: 'Invalid builder payload',
  })
  @ApiUnauthorizedResponse({
    description: 'Authentication token missing or invalid',
  })
  @ApiForbiddenResponse({
    description: 'Only founders can access this endpoint',
  })
  @Auth(Role.FOUNDER)
  @Post()
  save(
    @Body() dto: CreateBuilderDto,

    @GetUser('id') userId: string,
  ) {
    return this.builderService.saveBuilder(dto, userId);
  }

  @ApiOperation({
    summary: 'Get builder workspace',

    description:
      'Returns the startup builder workspace for a startup owned by the authenticated founder.',
  })
  @ApiBearerAuth('access-token')
  @ApiOkResponse({
    description: 'Startup builder retrieved successfully',

    type: BuilderSuccessResponseDto,
  })
  @ApiUnauthorizedResponse({
    description: 'Authentication token missing or invalid',
  })
  @ApiForbiddenResponse({
    description: 'Only founders can access this endpoint',
  })
  @Auth(Role.FOUNDER)
  @Get(':startupId')
  findOne(
    @Param('startupId') startupId: string,

    @GetUser('id') userId: string,
  ) {
    return this.builderService.findBuilderByStartup(startupId, userId);
  }

  @ApiOperation({
    summary: 'Update builder workspace',

    description:
      'Updates an existing startup builder workspace for a startup owned by the authenticated founder.',
  })
  @ApiBearerAuth('access-token')
  @ApiOkResponse({
    description: 'Startup builder updated successfully',

    type: BuilderSuccessResponseDto,
  })
  @ApiUnauthorizedResponse({
    description: 'Authentication token missing or invalid',
  })
  @ApiForbiddenResponse({
    description: 'Only founders can access this endpoint',
  })
  @Auth(Role.FOUNDER)
  @Patch(':startupId')
  update(
    @Param('startupId') startupId: string,

    @Body() dto: UpdateBuilderDto,

    @GetUser('id') userId: string,
  ) {
    return this.builderService.updateBuilder(startupId, dto, userId);
  }
}
