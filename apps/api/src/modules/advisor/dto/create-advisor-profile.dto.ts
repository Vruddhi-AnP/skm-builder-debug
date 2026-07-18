import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';

import {
  AdvisorPricingModel,
  EquityInterest,
  ExperienceLevel,
  MentorshipType,
  PreferredTimeSlot,
  PreferredTimezone,
  SessionMode,
  StartupStage,
  WeeklyAvailability,
} from '@prisma/client';

import {
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  MaxLength,
} from 'class-validator';

export class CreateAdvisorProfileDto {
  // -----------------------------------------------------------------------------
  // Identity
  // -----------------------------------------------------------------------------

  @ApiPropertyOptional({
    description: 'Advisor phone number',
    example: '+91 9876543210',
    maxLength: 20,
  })
  @IsOptional()
  @IsString()
  @MaxLength(20)
  phoneNumber?: string;

  @ApiPropertyOptional({
    description: 'Current professional role',
    example: 'Senior Product Manager',
    maxLength: 100,
  })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  currentRole?: string;

  @ApiPropertyOptional({
    description: 'Current organization or company name',
    example: 'Google',
    maxLength: 150,
  })
  @IsOptional()
  @IsString()
  @MaxLength(150)
  organization?: string;

  @ApiPropertyOptional({
    description: 'LinkedIn profile URL',
    example: 'https://www.linkedin.com/in/johndoe',
    maxLength: 255,
  })
  @IsOptional()
  @IsUrl()
  @MaxLength(255)
  linkedinUrl?: string;

  @ApiPropertyOptional({
    description: 'Professional experience level',
    enum: ExperienceLevel,
  })
  @IsOptional()
  @IsEnum(ExperienceLevel)
  experienceLevel?: ExperienceLevel;

  // -----------------------------------------------------------------------------
  // Expertise
  // -----------------------------------------------------------------------------

  @ApiPropertyOptional({
    description: 'Primary area of expertise',
    example: 'Product Strategy',
    maxLength: 150,
  })
  @IsOptional()
  @IsString()
  @MaxLength(150)
  expertiseArea?: string;

  @ApiPropertyOptional({
    description: 'Industry specialization',
    example: 'SaaS',
    maxLength: 100,
  })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  industry?: string;

  @ApiPropertyOptional({
    description: 'Preferred startup stage for mentoring',
    enum: StartupStage,
  })
  @IsOptional()
  @IsEnum(StartupStage)
  startupStage?: StartupStage;

  @ApiPropertyOptional({
    description: 'Preferred mentorship type',
    enum: MentorshipType,
  })
  @IsOptional()
  @IsEnum(MentorshipType)
  mentorshipType?: MentorshipType;

  @ApiPropertyOptional({
    description: 'Key professional skills',
    example: 'Product Strategy, Go-to-Market, Fundraising',
    maxLength: 500,
  })
  @IsOptional()
  @IsString()
  @MaxLength(500)
  keySkills?: string;

  @ApiPropertyOptional({
    description: 'Advisor mentoring goals',
    example:
      'Help early-stage founders build scalable products and validate their business models.',
    maxLength: 1000,
  })
  @IsOptional()
  @IsString()
  @MaxLength(1000)
  advisoryGoal?: string;

  // -----------------------------------------------------------------------------
  // Availability
  // -----------------------------------------------------------------------------

  @ApiPropertyOptional({
    description: 'Weekly availability for mentoring',
    enum: WeeklyAvailability,
  })
  @IsOptional()
  @IsEnum(WeeklyAvailability)
  weeklyAvailability?: WeeklyAvailability;

  @ApiPropertyOptional({
    description: 'Preferred mentoring time slot',
    enum: PreferredTimeSlot,
  })
  @IsOptional()
  @IsEnum(PreferredTimeSlot)
  preferredTimeSlot?: PreferredTimeSlot;

  @ApiPropertyOptional({
    description: 'Preferred mentoring session mode',
    enum: SessionMode,
  })
  @IsOptional()
  @IsEnum(SessionMode)
  sessionMode?: SessionMode;

  @ApiPropertyOptional({
    description: 'Preferred timezone',
    enum: PreferredTimezone,
  })
  @IsOptional()
  @IsEnum(PreferredTimezone)
  preferredTimezone?: PreferredTimezone;

  @ApiPropertyOptional({
    description: 'Languages spoken by the advisor',
    example: 'English, Hindi, Gujarati',
    maxLength: 200,
  })
  @IsOptional()
  @IsString()
  @MaxLength(200)
  languages?: string;

  @ApiPropertyOptional({
    description: 'Preferred founder engagement approach',
    example:
      'Weekly one-on-one mentoring with action items and milestone reviews.',
    maxLength: 1000,
  })
  @IsOptional()
  @IsString()
  @MaxLength(1000)
  founderEngagementPreference?: string;

  // -----------------------------------------------------------------------------
  // Pricing
  // -----------------------------------------------------------------------------

  @ApiPropertyOptional({
    description: 'Advisor pricing model',
    enum: AdvisorPricingModel,
  })
  @IsOptional()
  @IsEnum(AdvisorPricingModel)
  advisoryPricingModel?: AdvisorPricingModel;

  @ApiPropertyOptional({
    description: 'Price per consultation session',
    example: 2500,
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  sessionPrice?: number;

  @ApiPropertyOptional({
    description: 'Monthly advisory retainer',
    example: 25000,
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  monthlyRetainer?: number;

  @ApiPropertyOptional({
    description: 'Advisor equity preference',
    enum: EquityInterest,
  })
  @IsOptional()
  @IsEnum(EquityInterest)
  equityInterest?: EquityInterest;

  @ApiPropertyOptional({
    description: 'Consultation type',
    example: 'One-time consultation',
    maxLength: 100,
  })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  consultationType?: string;

  @ApiPropertyOptional({
    description: 'Additional advisory notes',
    example:
      'Available for long-term strategic mentoring and board advisory roles.',
    maxLength: 1000,
  })
  @IsOptional()
  @IsString()
  @MaxLength(1000)
  advisoryNotes?: string;
}
