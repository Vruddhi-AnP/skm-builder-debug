import { ApiProperty } from '@nestjs/swagger';

export class PublicAdvisorDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  fullName: string;

  @ApiProperty()
  headline: string;

  @ApiProperty({
    type: [String],
  })
  expertise: string[];

  @ApiProperty()
  category: string;

  @ApiProperty({
    type: String,
    nullable: true,
  })
  organization: string | null;

  @ApiProperty({
    type: String,
    nullable: true,
  })
  experienceLevel: string | null;

  @ApiProperty({
    type: String,
    nullable: true,
  })
  startupStage: string | null;

  @ApiProperty({
    type: String,
    nullable: true,
  })
  mentorshipType: string | null;

  @ApiProperty({
    type: String,
    nullable: true,
  })
  advisoryGoal: string | null;

  @ApiProperty({
    type: String,
    nullable: true,
  })
  availabilityStatus: string | null;

  @ApiProperty({
    type: String,
    nullable: true,
  })
  preferredTimeSlot: string | null;

  @ApiProperty({
    type: String,
    nullable: true,
  })
  sessionMode: string | null;

  @ApiProperty({
    type: String,
    nullable: true,
  })
  preferredTimezone: string | null;

  @ApiProperty({
    type: [String],
  })
  languages: string[];

  @ApiProperty({
    type: String,
    nullable: true,
  })
  founderEngagementPreference: string | null;

  @ApiProperty({
    type: String,
    nullable: true,
  })
  advisoryPricingModel: string | null;

  @ApiProperty({
    type: String,
    nullable: true,
  })
  consultationType: string | null;
}
