import { Body, Controller, Get, Patch, Post } from '@nestjs/common';

import {
  ApiBearerAuth,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { Role } from '../../common/enums/role.enum';

import { ResponseMessage } from '../../common/decorators/response-message.decorator';

import { Auth } from '../auth/decorators/auth.decorator';

import { GetUser } from '../auth/decorators/get-user.decorator';

import { FounderService } from './founder.service';

import { CreateFounderProfileDto } from './dto/create-founder-profile.dto';

import { UpdateFounderProfileDto } from './dto/update-founder-profile.dto';

import { FounderProfileSuccessResponseDto } from './dto/founder-profile-success-response.dto';

@ApiTags('Founder Profile')
@Controller('founder')
export class FounderController {
  constructor(private readonly founderService: FounderService) {}

  @ApiBearerAuth('access-token')
  @ApiOperation({
    summary: 'Create founder profile',

    description: 'Creates a founder profile for the authenticated founder.',
  })
  @Auth(Role.FOUNDER)
  @ResponseMessage('Founder profile created successfully')
  @ApiCreatedResponse({
    description: 'Founder profile created successfully',

    type: FounderProfileSuccessResponseDto,
  })
  @ApiUnauthorizedResponse({
    description: 'Authentication token missing or invalid',
  })
  @ApiForbiddenResponse({
    description: 'Only founders can access this endpoint',
  })
  @ApiConflictResponse({
    description: 'Founder profile already exists',
  })
  @Post('profile')
  createProfile(
    @Body() dto: CreateFounderProfileDto,

    @GetUser('id') userId: string,
  ) {
    return this.founderService.createProfile(userId, dto);
  }

  @ApiBearerAuth('access-token')
  @ApiOperation({
    summary: 'Get founder profile',

    description: 'Returns the founder profile of the authenticated founder.',
  })
  @Auth(Role.FOUNDER)
  @ResponseMessage('Founder profile retrieved successfully')
  @ApiOkResponse({
    description: 'Founder profile retrieved successfully',

    type: FounderProfileSuccessResponseDto,
  })
  @ApiUnauthorizedResponse({
    description: 'Authentication token missing or invalid',
  })
  @ApiForbiddenResponse({
    description: 'Only founders can access this endpoint',
  })
  @Get('profile')
  getProfile(@GetUser('id') userId: string) {
    return this.founderService.getProfile(userId);
  }

  @ApiBearerAuth('access-token')
  @ApiOperation({
    summary: 'Update founder profile',

    description: 'Updates the founder profile of the authenticated founder.',
  })
  @Auth(Role.FOUNDER)
  @ResponseMessage('Founder profile updated successfully')
  @ApiOkResponse({
    description: 'Founder profile updated successfully',

    type: FounderProfileSuccessResponseDto,
  })
  @ApiUnauthorizedResponse({
    description: 'Authentication token missing or invalid',
  })
  @ApiForbiddenResponse({
    description: 'Only founders can access this endpoint',
  })
  @Patch('profile')
  updateProfile(
    @Body() dto: UpdateFounderProfileDto,

    @GetUser('id') userId: string,
  ) {
    return this.founderService.updateProfile(userId, dto);
  }
}
