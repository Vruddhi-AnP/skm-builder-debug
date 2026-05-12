// import { createParamDecorator, ExecutionContext } from '@nestjs/common';
// import { Role } from '../../../common/enums/role.enum';

// type RequestWithUser = {
//   user: {
//     id: string;
//     email: string;
//     role: Role;
//   };
// };

// export const GetUser = createParamDecorator(
//   (data: keyof RequestWithUser['user'] | undefined, ctx: ExecutionContext) => {
//     const request = ctx.switchToHttp().getRequest<RequestWithUser>();

//     return data ? request.user[data] : request.user;
//   },
// );

import { createParamDecorator, ExecutionContext } from '@nestjs/common';

import { CurrentUser } from '../../../common/types/current-user.type';

type RequestWithUser = {
  user: CurrentUser;
};

export const GetUser = createParamDecorator(
  (data: keyof CurrentUser | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<RequestWithUser>();

    return data ? request.user[data] : request.user;
  },
);
