import { ApiProperty } from '@nestjs/swagger';

import { IsString, MaxLength } from 'class-validator';

export class UpdateConsultationAdminNotesDto {
  @ApiProperty({
    example: 'Founder contacted. Follow-up scheduled.',
    maxLength: 2000,
  })
  @IsString()
  @MaxLength(2000)
  adminNotes: string;
}
