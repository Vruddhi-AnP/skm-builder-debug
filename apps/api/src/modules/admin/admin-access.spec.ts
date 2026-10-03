import { ExecutionContext } from '@nestjs/common';

import { Reflector } from '@nestjs/core';

import { Role } from '../../common/enums/role.enum';

import { RolesGuard } from '../auth/guards/roles.guard';

import { AdminController } from './admin.controller';

function createContext(role: Role): ExecutionContext {
  return {
    getHandler: () => AdminController.prototype.findAdvisors,

    getClass: () => AdminController,

    switchToHttp: () => ({
      getRequest: () => ({
        user: {
          id: 'user-1',
          role,
        },
      }),
    }),
  } as unknown as ExecutionContext;
}

describe('Admin endpoint authorization', () => {
  const reflector = new Reflector();

  const guard = new RolesGuard(reflector);

  it('blocks a non-admin user from an admin endpoint', () => {
    const allowed = guard.canActivate(createContext(Role.FOUNDER));

    expect(allowed).toBe(false);
  });

  it('allows an admin user to an admin endpoint', () => {
    const allowed = guard.canActivate(createContext(Role.ADMIN));

    expect(allowed).toBe(true);
  });
});
