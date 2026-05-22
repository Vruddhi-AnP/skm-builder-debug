import { ApiProperty } from '@nestjs/swagger';

import { ApiResponseDto } from '../../../common/dto/api-response.dto';

import { AuthResponseDataDto } from '../types/auth-response.type';

export class AuthSuccessResponseDto extends ApiResponseDto<AuthResponseDataDto> {
  @ApiProperty({
    type: AuthResponseDataDto,
  })
  declare data: AuthResponseDataDto;
}
