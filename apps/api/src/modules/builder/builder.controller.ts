// import { Body, Controller, Post } from '@nestjs/common';

// import { ApiOperation, ApiTags } from '@nestjs/swagger';

// import { BuilderService } from './builder.service';

// import { CreateBuilderDto } from './dto/create-builder.dto';

// import { ApiCreatedResponse, ApiBadRequestResponse } from '@nestjs/swagger';

// @ApiTags('Builders')
// @Controller('builder')
// export class BuilderController {
//   constructor(private readonly builderService: BuilderService) {}

//   @ApiOperation({
//     summary: 'Create builder profile',

//     description: 'Creates a builder profile associated with a startup.',
//   })
//   @ApiCreatedResponse({
//     description: 'Builder profile created successfully',
//   })
//   @ApiBadRequestResponse({
//     description: 'Invalid builder payload',
//   })
//   @Post()
//   save(@Body() dto: CreateBuilderDto) {
//     return this.builderService.saveBuilder(dto);
//   }
// }

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
      'Allows authenticated builders to create builder profiles associated with startups.',
  })
  @ApiBearerAuth('access-token')
  @ApiCreatedResponse({
    description: 'Builder profile created successfully',

    type: BuilderSuccessResponseDto,
  })
  @ApiBadRequestResponse({
    description: 'Invalid builder payload',
  })
  @ApiUnauthorizedResponse({
    description: 'Authentication token missing or invalid',
  })
  @ApiForbiddenResponse({
    description: 'Only builders can access this endpoint',
  })
  @Auth(Role.BUILDER)
  @Post()
  save(@Body() dto: CreateBuilderDto) {
    return this.builderService.saveBuilder(dto);
  }
}
