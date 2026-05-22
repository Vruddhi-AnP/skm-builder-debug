import { Transform } from 'class-transformer';

import { ApiProperty } from '@nestjs/swagger';

import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';

import { Role } from '../../../common/enums/role.enum';

const trimString = ({ value }: { value: unknown }) =>
  typeof value === 'string' ? value.trim() : value;

const normalizeEmail = ({ value }: { value: unknown }) =>
  typeof value === 'string' ? value.trim().toLowerCase() : value;

export class CreateUserDto {
  @ApiProperty({
    example: 'founder@skm.com',

    description: 'User email address',
  })
  @Transform(normalizeEmail)
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'StrongPassword123',

    description: 'User account password',

    minLength: 6,
  })
  @Transform(trimString)
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty({
    example: 'John Founder',

    description: 'Full name of the user',
  })
  @Transform(trimString)
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    enum: Role,

    example: Role.FOUNDER,

    description: 'Platform role assigned to user',
  })
  @IsEnum(Role)
  role: Role;
}
