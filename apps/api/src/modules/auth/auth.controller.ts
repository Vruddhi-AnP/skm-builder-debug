import { Body, Controller, Post } from '@nestjs/common';

import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { AuthService } from './auth.service';

import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';

import { ResponseMessage } from '../../common/decorators/response-message.decorator';

import { AuthSuccessResponseDto } from './dto/auth-success-response.dto';

import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({
    summary: 'Register a new platform user',

    description: 'Creates a new user account with role-based platform access.',
  })
  @ApiCreatedResponse({
    description: 'User registered successfully',

    type: AuthSuccessResponseDto,
  })
  @ApiBadRequestResponse({
    description: 'Validation failed or user already exists',
  })
  @Post('signup')
  @ResponseMessage('Signup successful')
  signup(@Body() dto: CreateUserDto) {
    return this.authService.signup(dto);
  }

  @ApiOperation({
    summary: 'Authenticate existing user',

    description: 'Authenticates user credentials and returns JWT access token.',
  })
  @ApiCreatedResponse({
    description: 'User authenticated successfully',

    type: AuthSuccessResponseDto,
  })
  @ApiUnauthorizedResponse({
    description: 'Invalid email or password',
  })
  @Post('login')
  @ResponseMessage('Login successful')
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }
}
