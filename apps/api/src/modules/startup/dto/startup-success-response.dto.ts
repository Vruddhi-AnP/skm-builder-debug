import { ApiProperty } from '@nestjs/swagger';

import { ApiResponseDto } from '../../../common/dto/api-response.dto';

import { StartupResponseDataDto } from '../types/startup-response.type';

export class StartupSuccessResponseDto extends ApiResponseDto<StartupResponseDataDto> {
  @ApiProperty({
    type: StartupResponseDataDto,
  })
  declare data: StartupResponseDataDto;
}
