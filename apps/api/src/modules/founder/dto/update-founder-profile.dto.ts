import { ApiProperty } from '@nestjs/swagger';

import { IsOptional, IsString, IsUrl } from 'class-validator';

export class UpdateFounderProfileDto {
  @ApiProperty({
    example: '+91 9876543210',

    required: false,
  })
  @IsOptional()
  @IsString()
  phoneNumber?: string;

  @ApiProperty({
    example: 'Ahmedabad, Gujarat',

    required: false,
  })
  @IsOptional()
  @IsString()
  location?: string;

  @ApiProperty({
    example: 'Technical Founder',

    required: false,
  })
  @IsOptional()
  @IsString()
  founderRole?: string;

  @ApiProperty({
    example: 'First-time founder',

    required: false,
  })
  @IsOptional()
  @IsString()
  startupExperience?: string;

  @ApiProperty({
    example: 'https://linkedin.com/in/johndoe',

    required: false,
  })
  @IsOptional()
  @IsUrl()
  linkedinUrl?: string;

  @ApiProperty({
    example: 'Raise Funding',

    required: false,
  })
  @IsOptional()
  @IsString()
  founderGoal?: string;

  @ApiProperty({
    example: 'Passionate entrepreneur building AI-powered startup solutions.',

    required: false,
  })
  @IsOptional()
  @IsString()
  bio?: string;
}
