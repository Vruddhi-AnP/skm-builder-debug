import { Body, Controller, Patch, Post } from '@nestjs/common';

import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { AuthService } from './auth.service';

import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { ConsentDto } from './dto/consent.dto';

import { ResponseMessage } from '../../common/decorators/response-message.decorator';

import { AuthSuccessResponseDto } from './dto/auth-success-response.dto';

import { Throttle } from '@nestjs/throttler';

import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { Auth } from './decorators/auth.decorator';
import { GetUser } from './decorators/get-user.decorator';

import { Role } from '../../common/enums/role.enum';

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
  @Throttle({
    default: {
      limit: 10,
      ttl: 60000,
    },
  })
  @ResponseMessage('Signup successful')
  signup(@Body() dto: CreateUserDto) {
    return this.authService.signup(dto);
  }

  @ApiOperation({
    summary: 'Persist founder consent',
    description:
      'Records acceptance of the Terms & Conditions and Startup Idea/Data Disclaimer.',
  })
  @ApiBadRequestResponse({
    description: 'Consent was not accepted',
  })
  @ApiUnauthorizedResponse({
    description: 'Authentication required',
  })
  @Patch('consent')
  @Auth(Role.FOUNDER)
  @ResponseMessage('Consent recorded successfully')
  acceptConsent(@GetUser('id') userId: string, @Body() dto: ConsentDto) {
    return this.authService.acceptConsent(userId, dto);
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
  @Throttle({
    default: {
      limit: 10,
      ttl: 60000,
    },
  })
  @ResponseMessage('Login successful')
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }
}
