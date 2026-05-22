import { ApiProperty } from '@nestjs/swagger';

import { IsEmail, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    example: 'founder@skm.com',

    description: 'Registered user email address',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'StrongPassword123',

    description: 'Registered account password',

    minLength: 6,
  })
  @IsString()
  @MinLength(6)
  password: string;
}
