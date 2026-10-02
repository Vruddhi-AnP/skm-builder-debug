import { ApiProperty } from '@nestjs/swagger';

import { VisibilityStatus } from '@prisma/client';

import { IsIn } from 'class-validator';

export class UpdateAdvisorVisibilityDto {
  @ApiProperty({
    enum: [VisibilityStatus.PUBLISHED, VisibilityStatus.HIDDEN],
  })
  @IsIn([VisibilityStatus.PUBLISHED, VisibilityStatus.HIDDEN])
  visibilityStatus: VisibilityStatus;
}
