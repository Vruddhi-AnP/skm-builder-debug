import { ApiProperty } from '@nestjs/swagger';

import { IsObject, IsString } from 'class-validator';

export class CreateBuilderDto {
  @ApiProperty({
    example: 'fc4e34c9-450c-45ff-86a5-e1dcd312dafa',

    description: 'Associated startup ID',
  })
  @IsString()
  startupId: string;

  @ApiProperty({
    example: {
      skills: ['React', 'NestJS', 'PostgreSQL'],

      experience: '3 years',

      availability: 'Full-time',
    },

    description: 'Builder profile metadata and capabilities',
  })
  @IsObject()
  data: Record<string, unknown>;
}
