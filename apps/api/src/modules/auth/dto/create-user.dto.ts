import { Transform } from 'class-transformer';

import { ApiProperty } from '@nestjs/swagger';

import {
  Equals,
  IsEmail,
  IsIn,
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
    enum: [Role.FOUNDER, Role.ADVISOR, Role.INVESTOR],
    example: Role.FOUNDER,
    description: 'Public platform role assigned to user',
  })
  @IsIn([Role.FOUNDER, Role.ADVISOR, Role.INVESTOR], {
    message: 'Role must be founder, advisor, or investor',
  })
  role: Role;

  @ApiProperty({
    example: true,
    description:
      'Confirms acceptance of the Terms & Conditions and Startup Idea/Data Disclaimer',
  })
  @Equals(true, {
    message:
      'You must accept the Terms & Conditions and Startup Idea/Data Disclaimer',
  })
  termsAccepted: boolean;
}
