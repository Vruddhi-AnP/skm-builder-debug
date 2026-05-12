// import { createParamDecorator, ExecutionContext } from '@nestjs/common';

// export const GetUser = createParamDecorator(
//   (data: unknown, ctx: ExecutionContext) => {
//     const request = ctx.switchToHttp().getRequest();

//     return request.user;
//   },
// );

import { createParamDecorator, ExecutionContext } from '@nestjs/common';

type RequestWithUser = {
  user: {
    id: string;
    email: string;
    role: string;
  };
};

export const GetUser = createParamDecorator(
  (data: keyof RequestWithUser['user'] | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<RequestWithUser>();

    return data ? request.user[data] : request.user;
  },
);
