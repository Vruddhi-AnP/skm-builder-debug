import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';

import {
  ApiBearerAuth,
  ApiConflictResponse,
  ApiCreatedResponse,
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

import { GetUser } from '../auth/decorators/get-user.decorator';

import { ConsultationService } from './consultation.service';

import { CreateConsultationDto } from './dto/create-consultation.dto';

import { UpdateConsultationStatusDto } from './dto/update-consultation-status.dto';

@ApiTags('Consultations')
@ApiBearerAuth('access-token')
@Controller()
export class ConsultationController {
  constructor(private readonly consultationService: ConsultationService) {}

  @ApiOperation({
    summary: 'Create consultation request',
    description:
      'Creates a consultation request for an approved and published advisor using a startup owned by the authenticated founder.',
  })
  @ApiCreatedResponse({
    description: 'Consultation request created successfully',
  })
  @ApiConflictResponse({
    description:
      'An open request already exists for this founder, advisor, and startup',
  })
  @ApiNotFoundResponse({
    description: 'Startup or advisor not found',
  })
  @ApiUnauthorizedResponse({
    description: 'Authentication token missing or invalid',
  })
  @ApiForbiddenResponse({
    description: 'Only founders can submit consultation requests',
  })
  @Auth(Role.FOUNDER)
  @Post('consultations')
  @ResponseMessage('Consultation request created successfully')
  create(
    @GetUser('id')
    founderId: string,

    @Body()
    dto: CreateConsultationDto,
  ) {
    return this.consultationService.create(founderId, dto);
  }

  @ApiOperation({
    summary: 'Get founder consultation requests',
    description:
      'Returns consultation requests submitted by the authenticated founder.',
  })
  @ApiOkResponse({
    description: 'Consultation requests fetched successfully',
  })
  @ApiUnauthorizedResponse({
    description: 'Authentication token missing or invalid',
  })
  @ApiForbiddenResponse({
    description: 'Only founders can access this endpoint',
  })
  @Auth(Role.FOUNDER)
  @Get('consultations/mine')
  @ResponseMessage('Consultation requests fetched successfully')
  findMine(
    @GetUser('id')
    founderId: string,
  ) {
    return this.consultationService.findMine(founderId);
  }

  @ApiOperation({
    summary: 'Get admin consultation queue',
    description:
      'Returns all consultation requests for administrator coordination.',
  })
  @ApiOkResponse({
    description: 'Admin consultation queue fetched successfully',
  })
  @ApiUnauthorizedResponse({
    description: 'Authentication token missing or invalid',
  })
  @ApiForbiddenResponse({
    description: 'Only administrators can access this endpoint',
  })
  @Auth(Role.ADMIN)
  @Get('admin/consultations')
  @ResponseMessage('Admin consultation queue fetched successfully')
  findAllForAdmin() {
    return this.consultationService.findAllForAdmin();
  }

  @ApiOperation({
    summary: 'Update consultation request status',
    description:
      'Updates the status of a consultation request for administrator coordination.',
  })
  @ApiOkResponse({
    description: 'Consultation request status updated successfully',
  })
  @ApiNotFoundResponse({
    description: 'Consultation request not found',
  })
  @ApiUnauthorizedResponse({
    description: 'Authentication token missing or invalid',
  })
  @ApiForbiddenResponse({
    description: 'Only administrators can access this endpoint',
  })
  @Auth(Role.ADMIN)
  @Patch('admin/consultations/:id/status')
  @ResponseMessage('Consultation request status updated successfully')
  updateStatus(
    @Param('id')
    consultationId: string,

    @Body()
    dto: UpdateConsultationStatusDto,
  ) {
    return this.consultationService.updateStatus(consultationId, dto);
  }
}
