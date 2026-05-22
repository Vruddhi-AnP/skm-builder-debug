import { Body, Controller, Post } from '@nestjs/common';

import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

import { StartupService } from './startup.service';

import { CreateStartupDto } from './dto/create-startup.dto';

import { GetUser } from '../auth/decorators/get-user.decorator';
import { Auth } from '../auth/decorators/auth.decorator';

import { Role } from '../../common/enums/role.enum';

import { ResponseMessage } from '../../common/decorators/response-message.decorator';

import { StartupSuccessResponseDto } from './dto/startup-success-response.dto';

import {
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

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
}
