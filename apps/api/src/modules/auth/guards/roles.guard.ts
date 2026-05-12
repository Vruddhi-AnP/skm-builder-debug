// import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

// import { Reflector } from '@nestjs/core';
// import { Role } from '../../../common/enums/role.enum';
// @Injectable()
// export class RolesGuard implements CanActivate {
//   constructor(private reflector: Reflector) {}

//   canActivate(context: ExecutionContext): boolean {
//     const requiredRoles = this.reflector.getAllAndOverride<Role[]>('roles', [
//       context.getHandler(),
//       context.getClass(),
//     ]);

//     if (!requiredRoles) {
//       return true;
//     }

//     const request = context.switchToHttp().getRequest<{
//       user: {
//         role: Role;
//       };
//     }>();

//     const user = request.user;

//     return requiredRoles.includes(user.role);
//   }
// }

import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

import { Reflector } from '@nestjs/core';

import { Role } from '../../../common/enums/role.enum';

import { CurrentUser } from '../../../common/types/current-user.type';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true;
    }

    const request = context.switchToHttp().getRequest<{
      user: CurrentUser;
    }>();

    const user = request.user;

    return requiredRoles.includes(user.role);
  }
}
