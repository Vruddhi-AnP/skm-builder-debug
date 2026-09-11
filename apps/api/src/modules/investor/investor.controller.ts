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

import { InvestorService } from './investor.service';
import { CreateInvestorProfileDto } from './dto/create-investor-profile.dto';
import { UpdateInvestorProfileDto } from './dto/update-investor-profile.dto';

@ApiTags('Investor')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard)
@Controller('investor')
export class InvestorController {
  constructor(private readonly investorService: InvestorService) {}

  @ApiOperation({
    summary: 'Create investor profile',
    description: 'Creates an investor profile for the authenticated user.',
  })
  @ApiCreatedResponse({
    description: 'Investor profile created successfully',
  })
  @Post('profile')
  @ResponseMessage('Investor profile created successfully')
  createProfile(
    @GetUser('id') userId: string,
    @Body() dto: CreateInvestorProfileDto,
  ) {
    return this.investorService.createProfile(userId, dto);
  }

  @ApiOperation({
    summary: 'Get investor profile',
    description: 'Returns the authenticated user’s investor profile.',
  })
  @ApiOkResponse({
    description: 'Investor profile fetched successfully',
  })
  @Get('profile')
  @ResponseMessage('Investor profile fetched successfully')
  getProfile(@GetUser('id') userId: string) {
    return this.investorService.getProfile(userId);
  }

  @ApiOperation({
    summary: 'Update investor profile',
    description: 'Updates the authenticated user’s investor profile.',
  })
  @ApiOkResponse({
    description: 'Investor profile updated successfully',
  })
  @Patch('profile')
  @ResponseMessage('Investor profile updated successfully')
  updateProfile(
    @GetUser('id') userId: string,
    @Body() dto: UpdateInvestorProfileDto,
  ) {
    return this.investorService.updateProfile(userId, dto);
  }
}
