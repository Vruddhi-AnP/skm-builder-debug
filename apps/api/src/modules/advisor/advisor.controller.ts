// import { Controller } from '@nestjs/common';

// @Controller('advisor')
// export class AdvisorController {}

import { Body, Controller, Get, Patch, Post, UseGuards } from '@nestjs/common';

import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

import { ResponseMessage } from '../../common/decorators/response-message.decorator';
import { GetUser } from '../auth/decorators/get-user.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

import { AdvisorService } from './advisor.service';
import { CreateAdvisorProfileDto } from './dto/create-advisor-profile.dto';
import { UpdateAdvisorProfileDto } from './dto/update-advisor-profile.dto';

@ApiTags('Advisor')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard)
@Controller('advisor')
export class AdvisorController {
  constructor(private readonly advisorService: AdvisorService) {}

  @ApiOperation({
    summary: 'Create advisor profile',
    description: 'Creates an advisor profile for the authenticated user.',
  })
  @ApiCreatedResponse({
    description: 'Advisor profile created successfully',
  })
  @Post('profile')
  @ResponseMessage('Advisor profile created successfully')
  createProfile(
    @GetUser('id') userId: string,
    @Body() dto: CreateAdvisorProfileDto,
  ) {
    return this.advisorService.createProfile(userId, dto);
  }

  @ApiOperation({
    summary: 'Get advisor profile',
    description: 'Returns the authenticated user’s advisor profile.',
  })
  @ApiOkResponse({
    description: 'Advisor profile fetched successfully',
  })
  @Get('profile')
  @ResponseMessage('Advisor profile fetched successfully')
  getProfile(@GetUser('id') userId: string) {
    return this.advisorService.getProfile(userId);
  }

  @ApiOperation({
    summary: 'Update advisor profile',
    description: 'Updates the authenticated user’s advisor profile.',
  })
  @ApiOkResponse({
    description: 'Advisor profile updated successfully',
  })
  @Patch('profile')
  @ResponseMessage('Advisor profile updated successfully')
  updateProfile(
    @GetUser('id') userId: string,
    @Body() dto: UpdateAdvisorProfileDto,
  ) {
    return this.advisorService.updateProfile(userId, dto);
  }
}
