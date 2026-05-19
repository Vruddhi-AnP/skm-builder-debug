// import { Controller } from '@nestjs/common';

// @Controller('auth')
// export class AuthController {}

// import { Body, Controller, Post } from '@nestjs/common';
// import { AuthService } from './auth.service';
// import { CreateUserDto } from './dto/create-user.dto';

// @Controller('auth')
// export class AuthController {
//   constructor(private readonly authService: AuthService) {}

//   @Post('signup')
//   createUser(@Body() dto: CreateUserDto) {
//     return this.authService.createUser(dto);
//   }
// }

import { Body, Controller, Post } from '@nestjs/common';

import { AuthService } from './auth.service';

import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { ResponseMessage } from '../../common/decorators/response-message.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  @ResponseMessage('Signup successful')
  signup(@Body() dto: CreateUserDto) {
    return this.authService.signup(dto);
  }

  @Post('login')
  @ResponseMessage('Login successful')
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }
}
