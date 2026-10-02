import { ApiProperty } from '@nestjs/swagger';

import { IsString, IsUUID, MaxLength, MinLength } from 'class-validator';

export class CreateConsultationDto {
  @ApiProperty({
    description: 'Advisor profile ID',
    example: 'b5e73c38-e1b4-4e01-863a-ba3a086aab33',
  })
  @IsUUID()
  advisorId: string;

  @ApiProperty({
    description: 'Startup ID owned by the authenticated founder',
    example: '4b31e807-bcb6-4cbb-a5e5-1489d50fa011',
  })
  @IsUUID()
  startupId: string;

  @ApiProperty({
    description: 'Support required from the advisor',
    example: 'I need support with MVP planning and go-to-market strategy.',
    minLength: 3,
    maxLength: 2000,
  })
  @IsString()
  @MinLength(3)
  @MaxLength(2000)
  message: string;
}
