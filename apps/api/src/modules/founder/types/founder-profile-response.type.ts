import { ApiProperty } from '@nestjs/swagger';

export class FounderProfileResponseDataDto {
  @ApiProperty({
    example: 'fc4e34c9-450c-45ff-86a5-e1dcd312dafa',
  })
  id: string;

  @ApiProperty({
    example: '449c3e83-4ebe-4fd9-8a6e-1ad0adf903aa',
  })
  userId: string;

  @ApiProperty({
    example: '+91 9876543210',
    nullable: true,
  })
  phoneNumber: string | null;

  @ApiProperty({
    example: 'Ahmedabad, Gujarat',
    nullable: true,
  })
  location: string | null;

  @ApiProperty({
    example: 'Technical Founder',
    nullable: true,
  })
  founderRole: string | null;

  @ApiProperty({
    example: 'First-time founder',
    nullable: true,
  })
  startupExperience: string | null;

  @ApiProperty({
    example: 'https://linkedin.com/in/johndoe',
    nullable: true,
  })
  linkedinUrl: string | null;

  @ApiProperty({
    example: 'Raise Funding',
    nullable: true,
  })
  founderGoal: string | null;

  @ApiProperty({
    example: 'Passionate entrepreneur building AI-powered startup solutions.',
    nullable: true,
  })
  bio: string | null;

  @ApiProperty({
    example: '2026-05-21T10:22:57.187Z',
  })
  createdAt: Date;

  @ApiProperty({
    example: '2026-05-21T10:22:57.187Z',
  })
  updatedAt: Date;
}
