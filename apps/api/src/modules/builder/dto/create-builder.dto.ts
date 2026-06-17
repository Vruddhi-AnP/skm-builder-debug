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
      idea: {
        startupIdea: 'AI-powered financial assistant',
        vision: 'Simplify personal finance management',
      },

      problem: {
        problemStatement: 'Young professionals struggle to track expenses',
      },

      customer: {
        targetCustomer: 'Young professionals',
        marketSegment: 'Personal Finance',
      },

      solution: {
        solutionDescription:
          'AI assistant that tracks spending and provides recommendations',
      },

      businessModel: {
        revenueModel: 'Monthly Subscription',
      },
    },

    description:
      'Startup Builder workspace data used for readiness scoring and startup planning',
  })
  @IsObject()
  data: Record<string, unknown>;
}
