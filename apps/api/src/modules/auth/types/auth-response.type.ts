import { Role } from '../../../common/enums/role.enum';

export type AuthUser = {
  id: string;

  email: string;

  name: string | null;

  role: Role;
};

export type AuthResponseData = {
  accessToken: string;

  user: AuthUser;
};
