import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { StartupListSuccessResponseDto } from './dto/startup-list-success-response.dto';

import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { StartupService } from './startup.service';

import { CreateStartupDto } from './dto/create-startup.dto';

import { UpdateStartupDto } from './dto/update-startup.dto';

import { GetUser } from '../auth/decorators/get-user.decorator';
import { Auth } from '../auth/decorators/auth.decorator';

import { Role } from '../../common/enums/role.enum';

import { ResponseMessage } from '../../common/decorators/response-message.decorator';

import { StartupSuccessResponseDto } from './dto/startup-success-response.dto';

@ApiTags('Startups')
@Controller('startup')
export class StartupController {
  constructor(private readonly startupService: StartupService) {}

  @ApiBearerAuth('access-token')
  @ApiOperation({
    summary: 'Create startup profile',

    description:
      'Allows founders to create startup profiles within the platform ecosystem.',
  })
  @Auth(Role.FOUNDER)
  @ResponseMessage('Startup created successfully')
  @ApiCreatedResponse({
    description: 'Startup profile created successfully',

    type: StartupSuccessResponseDto,
  })
  @ApiUnauthorizedResponse({
    description: 'Authentication token missing or invalid',
  })
  @ApiForbiddenResponse({
    description: 'Only founders can access this endpoint',
  })
  @Post()
  create(
    @Body() dto: CreateStartupDto,

    @GetUser('id') userId: string,
  ) {
    return this.startupService.create(dto, userId);
  }

  @ApiBearerAuth('access-token')
  @ApiOperation({
    summary: 'Get founder startups',

    description: 'Returns all startups owned by the authenticated founder.',
  })
  @Auth(Role.FOUNDER)
  @ResponseMessage('Startups retrieved successfully')
  @ApiOkResponse({
    description: 'Founder startups retrieved successfully',

    type: StartupListSuccessResponseDto,
  })
  @ApiUnauthorizedResponse({
    description: 'Authentication token missing or invalid',
  })
  @ApiForbiddenResponse({
    description: 'Only founders can access this endpoint',
  })
  @Get()
  findAll(@GetUser('id') userId: string) {
    return this.startupService.findAllByFounder(userId);
  }

  @ApiBearerAuth('access-token')
  @ApiOperation({
    summary: 'Get startup by ID',

    description: 'Returns a startup owned by the authenticated founder.',
  })
  @Auth(Role.FOUNDER)
  @ResponseMessage('Startup retrieved successfully')
  @ApiOkResponse({
    description: 'Startup retrieved successfully',

    type: StartupSuccessResponseDto,
  })
  @ApiUnauthorizedResponse({
    description: 'Authentication token missing or invalid',
  })
  @ApiForbiddenResponse({
    description: 'Only founders can access this endpoint',
  })
  @Get(':id')
  findOne(
    @Param('id') startupId: string,

    @GetUser('id') userId: string,
  ) {
    return this.startupService.findOneByFounder(startupId, userId);
  }

  @ApiBearerAuth('access-token')
  @ApiOperation({
    summary: 'Update startup',

    description: 'Updates a startup owned by the authenticated founder.',
  })
  @Auth(Role.FOUNDER)
  @ResponseMessage('Startup updated successfully')
  @ApiOkResponse({
    description: 'Startup updated successfully',

    type: StartupSuccessResponseDto,
  })
  @ApiUnauthorizedResponse({
    description: 'Authentication token missing or invalid',
  })
  @ApiForbiddenResponse({
    description: 'Only founders can access this endpoint',
  })
  @Patch(':id')
  update(
    @Param('id') startupId: string,

    @Body() dto: UpdateStartupDto,

    @GetUser('id') userId: string,
  ) {
    return this.startupService.updateByFounder(startupId, userId, dto);
  }

  @ApiBearerAuth('access-token')
  @ApiOperation({
    summary: 'Delete startup',

    description: 'Deletes a startup owned by the authenticated founder.',
  })
  @Auth(Role.FOUNDER)
  @ResponseMessage('Startup deleted successfully')
  @ApiOkResponse({
    description: 'Startup deleted successfully',

    type: StartupSuccessResponseDto,
  })
  @ApiUnauthorizedResponse({
    description: 'Authentication token missing or invalid',
  })
  @ApiForbiddenResponse({
    description: 'Only founders can access this endpoint',
  })
  @Delete(':id')
  remove(
    @Param('id') startupId: string,

    @GetUser('id') userId: string,
  ) {
    return this.startupService.deleteByFounder(startupId, userId);
  }
}
