import { ApiProperty } from '@nestjs/swagger';

import { IsOptional, IsString } from 'class-validator';

export class UpdateStartupDto {
  @ApiProperty({
    example: 'SKM AI Platform',

    description: 'Name of the startup',

    required: false,
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({
    example: 'Artificial Intelligence',

    description: 'Industry category of the startup',

    required: false,
  })
  @IsOptional()
  @IsString()
  industry?: string;

  @ApiProperty({
    example: 'AI-powered startup ecosystem platform',

    description: 'Detailed startup description',

    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string;
}
