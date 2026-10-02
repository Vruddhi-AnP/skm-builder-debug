import { ApiProperty } from '@nestjs/swagger';

import { IsString, MaxLength, MinLength } from 'class-validator';

export class UpdateAdvisorPlanDto {
  @ApiProperty({
    example: 'PRO',
    maxLength: 50,
  })
  @IsString()
  @MinLength(1)
  @MaxLength(50)
  planCode: string;
}
