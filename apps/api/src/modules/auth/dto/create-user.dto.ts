// import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
// import { Role } from '../../../common/enums/role.enum';

// export class CreateUserDto {
//   @IsEmail()
//   email: string;

//   @IsString()
//   @MinLength(6)
//   password: string;

//   @IsString()
//   @IsNotEmpty()
//   name: string;

//   @IsString()
//   role: Role;
// }

import { Transform } from 'class-transformer';

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
  @Transform(normalizeEmail)
  @IsEmail()
  email: string;

  @Transform(trimString)
  @IsString()
  @MinLength(6)
  password: string;

  @Transform(trimString)
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(Role)
  role: Role;
}
