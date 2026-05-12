// import { SetMetadata } from '@nestjs/common';

// export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
import { SetMetadata } from '@nestjs/common';

import { Role } from '../../../common/enums/role.enum';

export const Roles = (...roles: Role[]) => SetMetadata('roles', roles);
