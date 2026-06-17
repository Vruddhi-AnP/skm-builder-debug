import { ApiProperty } from '@nestjs/swagger';

export class BuilderResponseDataDto {
  @ApiProperty({
    example: '8b0b6c8e-37c0-4ef3-bd65-c8d66d5f89d1',
  })
  id: string;

  @ApiProperty({
    example: 'fc4e34c9-450c-45ff-86a5-e1dcd312dafa',
  })
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
  })
  data: Record<string, unknown>;

  @ApiProperty({
    example: '2026-05-21T10:22:57.187Z',
  })
  createdAt: Date;

  @ApiProperty({
    example: '2026-05-21T10:22:57.187Z',
  })
  updatedAt: Date;
}
