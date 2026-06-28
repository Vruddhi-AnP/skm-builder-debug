import { ApiProperty } from '@nestjs/swagger';

import { IsObject } from 'class-validator';

export class UpdateBuilderDto {
  @ApiProperty({
    example: {
      idea: {
        startupIdea: 'AI-powered financial assistant',
        vision: 'Simplify personal finance management',
      },
    },

    description:
      'Partial Builder workspace data to merge with the existing Builder workspace.',
  })
  @IsObject()
  data: Record<string, unknown>;
}
