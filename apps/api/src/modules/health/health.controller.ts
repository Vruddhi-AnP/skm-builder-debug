import { Controller, Get } from '@nestjs/common';

import { HealthService } from './health.service';

import { ResponseMessage } from '../../common/decorators/response-message.decorator';

import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Health')
@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @ApiOperation({
    summary: 'Application health check',

    description: 'Returns application and database health status.',
  })
  @Get()
  @ResponseMessage('Health check successful')
  getHealth() {
    return this.healthService.getHealthStatus();
  }
}
