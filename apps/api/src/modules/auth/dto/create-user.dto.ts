// import { IsEmail, IsOptional, IsString } from 'class-validator';

// export class CreateUserDto {
//   @IsEmail()
//   email: string;

//   @IsOptional()
//   @IsString()
//   name?: string;

//   @IsString()
//   role: string;
// }

import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  role: string;
}
