// import { Role } from '../../../common/enums/role.enum';

// export type AuthUser = {
//   id: string;

//   email: string;

//   name: string | null;

//   role: Role;
// };

// export type AuthResponseData = {
//   accessToken: string;

//   user: AuthUser;
// };

import { ApiProperty } from '@nestjs/swagger';

import { Role } from '../../../common/enums/role.enum';

export class AuthUserDto {
  @ApiProperty({
    example: '449c3e83-4ebe-4fd9-8a6e-1ad0adf903aa',
  })
  id: string;

  @ApiProperty({
    example: 'founder@skm.com',
  })
  email: string;

  @ApiProperty({
    example: 'John Founder',

    nullable: true,
  })
  name: string | null;

  @ApiProperty({
    enum: Role,

    example: Role.FOUNDER,
  })
  role: Role;
}

export class AuthResponseDataDto {
  @ApiProperty({
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
  })
  accessToken: string;

  @ApiProperty({
    type: AuthUserDto,
  })
  user: AuthUserDto;
}
