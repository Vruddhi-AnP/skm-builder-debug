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

  @ApiProperty({
    example: true,
  })
  termsAccepted: boolean;

  @ApiProperty({
    example: '2026-09-21T12:30:00.000Z',
    nullable: true,
  })
  termsAcceptedAt: Date | null;

  @ApiProperty({
    example: 'SKM-MVP-1.1',
    nullable: true,
  })
  termsVersion: string | null;
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
