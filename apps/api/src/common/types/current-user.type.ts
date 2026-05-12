import { Role } from '../enums/role.enum';

export type CurrentUser = {
  id: string;
  email: string;
  role: Role;
};
