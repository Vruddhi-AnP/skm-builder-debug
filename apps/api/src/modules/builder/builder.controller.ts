import { Body, Controller, Post } from '@nestjs/common';

import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { Role } from '../../common/enums/role.enum';

import { Auth } from '../auth/decorators/auth.decorator';

import { GetUser } from '../auth/decorators/get-user.decorator';

import { BuilderService } from './builder.service';

import { CreateBuilderDto } from './dto/create-builder.dto';

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
}
