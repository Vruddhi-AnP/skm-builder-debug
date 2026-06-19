import { ApiProperty } from '@nestjs/swagger';

import { IsInt, IsOptional, IsString, IsUrl, Min } from 'class-validator';

export class CreateStartupDto {
  @ApiProperty({
    example: 'SKM AI Platform',
    description: 'Name of the startup',
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: 'https://skm.ai',
    description: 'Startup website',
    required: false,
  })
  @IsOptional()
  @IsUrl()
  website?: string;

  @ApiProperty({
    example: 5,
    description: 'Current team size',
    required: false,
  })
  @IsOptional()
  @IsInt()
  @Min(1)
  teamSize?: number;

  @ApiProperty({
    example: 'MVP',
    description: 'Current startup stage',
    required: false,
  })
  @IsOptional()
  @IsString()
  startupStage?: string;

  @ApiProperty({
    example: 'Artificial Intelligence',
    description: 'Industry focus',
    required: false,
  })
  @IsOptional()
  @IsString()
  industry?: string;

  @ApiProperty({
    example: 'SaaS Subscription',
    description: 'Business model',
    required: false,
  })
  @IsOptional()
  @IsString()
  businessModel?: string;

  @ApiProperty({
    example: 'Founders struggle to validate startup ideas.',
    description: 'Problem statement',
    required: false,
  })
  @IsOptional()
  @IsString()
  problemStatement?: string;

  @ApiProperty({
    example: 'AI-powered startup execution platform.',
    description: 'Solution overview',
    required: false,
  })
  @IsOptional()
  @IsString()
  solutionOverview?: string;

  @ApiProperty({
    example: 'AI-powered startup ecosystem platform',
    description: 'Detailed startup description',
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string;
}
