import { BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { PrismaService } from '../../prisma/prisma.service';
import { Role } from '../../common/enums/role.enum';

import { AuthService } from './auth.service';

describe('AuthService admin signup protection', () => {
  it('rejects admin creation through public signup', async () => {
    const findUnique = jest.fn();
    const create = jest.fn();

    const prisma = {
      user: {
        findUnique,
        create,
      },
    } as unknown as PrismaService;

    const signAsync = jest.fn();

    const jwtService = {
      signAsync,
    } as unknown as JwtService;

    const service = new AuthService(prisma, jwtService);

    await expect(
      service.signup({
        email: 'admin-attempt@skm.test',
        password: 'StrongPassword123',
        name: 'Admin Attempt',
        role: Role.ADMIN,
        termsAccepted: true,
      }),
    ).rejects.toThrow(BadRequestException);

    expect(findUnique).not.toHaveBeenCalled();
    expect(create).not.toHaveBeenCalled();
    expect(signAsync).not.toHaveBeenCalled();
  });
});
