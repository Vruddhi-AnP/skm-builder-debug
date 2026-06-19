import { ApiProperty } from '@nestjs/swagger';

export class StartupResponseDataDto {
  @ApiProperty({
    example: 'fc4e34c9-450c-45ff-86a5-e1dcd312dafa',
  })
  id: string;

  @ApiProperty({
    example: 'SKM AI Platform',
  })
  name: string;

  @ApiProperty({
    example: 'https://skm.ai',
    nullable: true,
  })
  website: string | null;

  @ApiProperty({
    example: 5,
    nullable: true,
  })
  teamSize: number | null;

  @ApiProperty({
    example: 'MVP',
    nullable: true,
  })
  startupStage: string | null;

  @ApiProperty({
    example: 'Artificial Intelligence',
    nullable: true,
  })
  industry: string | null;

  @ApiProperty({
    example: 'SaaS Subscription',
    nullable: true,
  })
  businessModel: string | null;

  @ApiProperty({
    example: 'Founders struggle to validate startup ideas.',
    nullable: true,
  })
  problemStatement: string | null;

  @ApiProperty({
    example: 'AI-powered startup execution platform.',
    nullable: true,
  })
  solutionOverview: string | null;

  @ApiProperty({
    example: 'AI-powered startup ecosystem platform',
    nullable: true,
  })
  description: string | null;

  @ApiProperty({
    example: '109959a6-682b-4734-84b2-67501ae42b62',
  })
  founderId: string;

  @ApiProperty({
    example: '2026-05-12T05:51:44.947Z',
  })
  createdAt: Date;

  @ApiProperty({
    example: '2026-05-12T05:51:44.947Z',
  })
  updatedAt: Date;
}
