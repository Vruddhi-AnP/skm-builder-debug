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
