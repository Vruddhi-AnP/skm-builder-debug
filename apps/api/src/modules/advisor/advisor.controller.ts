import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';

import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

import { ResponseMessage } from '../../common/decorators/response-message.decorator';
import { Role } from '../../common/enums/role.enum';

import { Auth } from '../auth/decorators/auth.decorator';
import { GetUser } from '../auth/decorators/get-user.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

import { AdvisorService } from './advisor.service';

import { CreateAdvisorProfileDto } from './dto/create-advisor-profile.dto';
import { PublicAdvisorDto } from './dto/public-advisor.dto';
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
  @Auth(Role.ADVISOR)
  @Post('profile')
  @ResponseMessage('Advisor profile created successfully')
  createProfile(
    @GetUser('id') userId: string,
    @Body()
    dto: CreateAdvisorProfileDto,
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
  @Auth(Role.ADVISOR)
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
  @Auth(Role.ADVISOR)
  @Patch('profile')
  @ResponseMessage('Advisor profile updated successfully')
  updateProfile(
    @GetUser('id') userId: string,

    @Body()
    dto: UpdateAdvisorProfileDto,
  ) {
    return this.advisorService.updateProfile(userId, dto);
  }

  @ApiOperation({
    summary: 'Discover approved advisors',
    description:
      'Returns only approved and published advisors using a contact-safe public response.',
  })
  @ApiOkResponse({
    description: 'Approved advisors fetched successfully',
    type: PublicAdvisorDto,
    isArray: true,
  })
  @Get('discover')
  @ResponseMessage('Approved advisors fetched successfully')
  discover() {
    return this.advisorService.discover();
  }

  @ApiOperation({
    summary: 'Get discoverable advisor',
    description:
      'Returns one approved and published advisor using a contact-safe public response.',
  })
  @ApiOkResponse({
    description: 'Advisor fetched successfully',
    type: PublicAdvisorDto,
  })
  @ApiNotFoundResponse({
    description: 'Advisor is unavailable, pending, hidden, or does not exist',
  })
  @Get('discover/:id')
  @ResponseMessage('Advisor fetched successfully')
  discoverById(@Param('id') advisorId: string) {
    return this.advisorService.discoverById(advisorId);
  }
}
