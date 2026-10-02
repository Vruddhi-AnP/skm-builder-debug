import { ApiProperty } from '@nestjs/swagger';

import { ConsultationStatus } from '@prisma/client';

import { IsEnum } from 'class-validator';

export class UpdateConsultationStatusDto {
  @ApiProperty({
    enum: ConsultationStatus,
    example: ConsultationStatus.CONTACTED,
  })
  @IsEnum(ConsultationStatus)
  status: ConsultationStatus;
}
