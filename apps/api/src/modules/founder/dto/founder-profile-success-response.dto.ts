import { ApiProperty } from '@nestjs/swagger';

import { ApiResponseDto } from '../../../common/dto/api-response.dto';

import { FounderProfileResponseDataDto } from '../types/founder-profile-response.type';

export class FounderProfileSuccessResponseDto extends ApiResponseDto<FounderProfileResponseDataDto> {
  @ApiProperty({
    type: FounderProfileResponseDataDto,
  })
  declare data: FounderProfileResponseDataDto;
}
