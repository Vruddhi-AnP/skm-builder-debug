import { ApiProperty } from '@nestjs/swagger';

import { AccountStatus } from '@prisma/client';

import { IsIn } from 'class-validator';

export class UpdateAdvisorAccountStatusDto {
  @ApiProperty({
    enum: [AccountStatus.APPROVED, AccountStatus.REJECTED],
  })
  @IsIn([AccountStatus.APPROVED, AccountStatus.REJECTED])
  accountStatus: AccountStatus;
}
