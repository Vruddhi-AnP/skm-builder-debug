import { ApiProperty } from '@nestjs/swagger';

import { ApiResponseDto } from '../../../common/dto/api-response.dto';

import { BuilderResponseDataDto } from '../types/builder-response.type';

export class BuilderSuccessResponseDto extends ApiResponseDto<BuilderResponseDataDto> {
  @ApiProperty({
    type: BuilderResponseDataDto,
  })
  declare data: BuilderResponseDataDto;
}
