import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcrypt';

import { PrismaService } from '../../prisma/prisma.service';

import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { ConsentDto } from './dto/consent.dto';

import { AuthResponseDataDto } from './types/auth-response.type';

import { Role } from '../../common/enums/role.enum';

const TERMS_VERSION = 'SKM-MVP-1.1';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  private async generateAccessToken(
    userId: string,
    email: string,
    role: string,
  ): Promise<string> {
    return this.jwtService.signAsync({
      sub: userId,
      email,
      role,
    });
  }

  async signup(dto: CreateUserDto): Promise<AuthResponseDataDto> {
    const existingUser = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (existingUser) {
      throw new BadRequestException('User already exists');
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        password: hashedPassword,
        name: dto.name,
        role: dto.role,
        termsAccepted: true,
        termsAcceptedAt: new Date(),
        termsVersion: TERMS_VERSION,
      },
    });

    const token = await this.generateAccessToken(
      user.id,
      user.email,
      user.role,
    );

    return {
      accessToken: token,

      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role as Role,
        termsAccepted: user.termsAccepted,
        termsAcceptedAt: user.termsAcceptedAt,
        termsVersion: user.termsVersion,
      },
    };
  }

  async acceptConsent(
    userId: string,
    dto: ConsentDto,
  ): Promise<{
    termsAccepted: boolean;
    termsAcceptedAt: Date | null;
    termsVersion: string | null;
  }> {
    if (!dto.termsAccepted) {
      throw new BadRequestException(
        'You must accept the Terms & Conditions and Startup Idea/Data Disclaimer',
      );
    }

    const user = await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        termsAccepted: true,
        termsAcceptedAt: new Date(),
        termsVersion: TERMS_VERSION,
      },
      select: {
        termsAccepted: true,
        termsAcceptedAt: true,
        termsVersion: true,
      },
    });

    return user;
  }

  async login(dto: LoginDto): Promise<AuthResponseDataDto> {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const passwordMatch = await bcrypt.compare(dto.password, user.password);

    if (!passwordMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const token = await this.generateAccessToken(
      user.id,
      user.email,
      user.role,
    );

    return {
      accessToken: token,

      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role as Role,
        termsAccepted: user.termsAccepted,
        termsAcceptedAt: user.termsAcceptedAt,
        termsVersion: user.termsVersion,
      },
    };
  }
}
