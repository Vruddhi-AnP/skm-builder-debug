import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

import {
  ExperienceLevel,
  GeographyPreference,
  InvestmentFocus,
  InvestmentTicketSize,
  InvestorType,
  PreferredStartupStage,
} from '@prisma/client';

import {
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  MaxLength,
} from 'class-validator';

export class CreateInvestorProfileDto {
  // -----------------------------------------------------------------------------
  // Identity
  // -----------------------------------------------------------------------------

  @ApiProperty({
    description: 'Investor full name',
    example: 'John Doe',
    maxLength: 100,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  fullName: string;

  @ApiProperty({
    description: 'Investor firm or fund name',
    example: 'Sequoia Capital',
    maxLength: 150,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  firmName: string;

  @ApiProperty({
    description: 'Investor location',
    example: 'Bangalore, India',
    maxLength: 100,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  location: string;

  @ApiProperty({
    description: 'LinkedIn profile URL',
    example: 'https://www.linkedin.com/in/johndoe',
    maxLength: 255,
  })
  @MaxLength(255)
  @IsUrl()
  linkedinUrl: string;

  @ApiPropertyOptional({
    description: 'Short investor biography',
    example: 'Angel investor focused on SaaS and AI startups.',
    maxLength: 1000,
  })
  @IsString()
  @IsOptional()
  @MaxLength(1000)
  shortBio?: string;

  @ApiProperty({
    description: 'Professional experience level',
    enum: ExperienceLevel,
  })
  @IsEnum(ExperienceLevel)
  experienceLevel: ExperienceLevel;

  @ApiProperty({
    description: 'Investor type',
    enum: InvestorType,
  })
  @IsEnum(InvestorType)
  investorType: InvestorType;

  // -----------------------------------------------------------------------------
  // Investment Preferences
  // -----------------------------------------------------------------------------

  @ApiProperty({
    description: 'Investment focus areas',
    enum: InvestmentFocus,
    isArray: true,
  })
  @IsArray()
  @ArrayMinSize(1)
  @IsEnum(InvestmentFocus, { each: true })
  investmentFocus: InvestmentFocus[];

  // -----------------------------------------------------------------------------
  // Investment Strategy
  // -----------------------------------------------------------------------------

  @ApiProperty({
    description: 'Preferred startup stages',
    enum: PreferredStartupStage,
    isArray: true,
  })
  @IsArray()
  @ArrayMinSize(1)
  @IsEnum(PreferredStartupStage, { each: true })
  preferredStartupStages: PreferredStartupStage[];

  @ApiProperty({
    description: 'Preferred investment ticket sizes',
    enum: InvestmentTicketSize,
    isArray: true,
  })
  @IsArray()
  @ArrayMinSize(1)
  @IsEnum(InvestmentTicketSize, { each: true })
  investmentTicketSizes: InvestmentTicketSize[];

  @ApiProperty({
    description: 'Preferred investment geographies',
    enum: GeographyPreference,
    isArray: true,
  })
  @IsArray()
  @ArrayMinSize(1)
  @IsEnum(GeographyPreference, { each: true })
  geographyPreferences: GeographyPreference[];

  @ApiProperty({
    description: 'Interested in mentoring founders',
    example: true,
  })
  @Type(() => Boolean)
  @IsBoolean()
  interestedInFounderMentorship: boolean;
}
