import { Body, Controller, Get, Param, Patch } from '@nestjs/common';

import {
  ApiBearerAuth,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { Role } from '../../common/enums/role.enum';

import { ResponseMessage } from '../../common/decorators/response-message.decorator';

import { Auth } from '../auth/decorators/auth.decorator';

import { AdminService } from './admin.service';

import { UpdateAdvisorAccountStatusDto } from './dto/update-advisor-account-status.dto';

import { UpdateAdvisorPlanDto } from './dto/update-advisor-plan.dto';

import { UpdateAdvisorVisibilityDto } from './dto/update-advisor-visibility.dto';

@ApiTags('Admin')
@ApiBearerAuth('access-token')
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @ApiOperation({
    summary: 'Get advisor applications',
  })
  @ApiOkResponse({
    description: 'Advisor applications fetched successfully',
  })
  @ApiUnauthorizedResponse({
    description: 'Authentication token missing or invalid',
  })
  @ApiForbiddenResponse({
    description: 'Only administrators can access this endpoint',
  })
  @Auth(Role.ADMIN)
  @Get('advisors')
  @ResponseMessage('Advisor applications fetched successfully')
  findAdvisors() {
    return this.adminService.findAdvisors();
  }

  @ApiOperation({
    summary: 'Approve or reject advisor',
  })
  @ApiOkResponse({
    description: 'Advisor account status updated successfully',
  })
  @ApiNotFoundResponse({
    description: 'Advisor not found',
  })
  @Auth(Role.ADMIN)
  @Patch('advisors/:id/account-status')
  @ResponseMessage('Advisor account status updated successfully')
  updateAdvisorAccountStatus(
    @Param('id')
    advisorId: string,

    @Body()
    dto: UpdateAdvisorAccountStatusDto,
  ) {
    return this.adminService.updateAdvisorAccountStatus(advisorId, dto);
  }

  @ApiOperation({
    summary: 'Publish or hide advisor',
  })
  @ApiOkResponse({
    description: 'Advisor visibility updated successfully',
  })
  @ApiNotFoundResponse({
    description: 'Advisor not found',
  })
  @Auth(Role.ADMIN)
  @Patch('advisors/:id/visibility')
  @ResponseMessage('Advisor visibility updated successfully')
  updateAdvisorVisibility(
    @Param('id')
    advisorId: string,

    @Body()
    dto: UpdateAdvisorVisibilityDto,
  ) {
    return this.adminService.updateAdvisorVisibility(advisorId, dto);
  }

  @ApiOperation({
    summary: 'Set advisor plan code',
  })
  @ApiOkResponse({
    description: 'Advisor plan code updated successfully',
  })
  @ApiNotFoundResponse({
    description: 'Advisor not found',
  })
  @Auth(Role.ADMIN)
  @Patch('advisors/:id/plan')
  @ResponseMessage('Advisor plan code updated successfully')
  updateAdvisorPlan(
    @Param('id')
    advisorId: string,

    @Body()
    dto: UpdateAdvisorPlanDto,
  ) {
    return this.adminService.updateAdvisorPlan(advisorId, dto);
  }
}
