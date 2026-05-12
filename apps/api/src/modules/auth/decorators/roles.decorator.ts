// import { SetMetadata } from '@nestjs/common';

// export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
import { SetMetadata } from '@nestjs/common';

import { Role } from '../../../common/enums/role.enum';

import { AUTH_ROLES_KEY } from '../../../common/constants/auth.constants';

export const Roles = (...roles: Role[]) => SetMetadata(AUTH_ROLES_KEY, roles);
