import { ApiProperty } from '@nestjs/swagger';

import { IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateFounderProfileDto {
  @ApiProperty({
    example: '+91 9876543210',

    required: false,

    description: 'Founder phone number',
  })
  @IsOptional()
  @IsString()
  phoneNumber?: string;

  @ApiProperty({
    example: 'Ahmedabad, Gujarat',

    required: false,

    description: 'Founder location',
  })
  @IsOptional()
  @IsString()
  location?: string;

  @ApiProperty({
    example: 'Technical Founder',

    required: false,

    description: 'Founder role classification',
  })
  @IsOptional()
  @IsString()
  founderRole?: string;

  @ApiProperty({
    example: 'First-time founder',

    required: false,

    description: 'Startup experience level',
  })
  @IsOptional()
  @IsString()
  startupExperience?: string;

  @ApiProperty({
    example: 'https://linkedin.com/in/johndoe',

    required: false,

    description: 'LinkedIn profile URL',
  })
  @IsOptional()
  @IsUrl()
  linkedinUrl?: string;

  @ApiProperty({
    example: 'Raise Funding',

    required: false,

    description: 'Primary founder goal',
  })
  @IsOptional()
  @IsString()
  founderGoal?: string;

  @ApiProperty({
    example: 'Passionate entrepreneur building AI-powered startup solutions.',

    required: false,

    description: 'Founder biography',
  })
  @IsOptional()
  @IsString()
  bio?: string;
}
