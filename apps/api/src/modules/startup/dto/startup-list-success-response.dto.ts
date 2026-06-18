import { ApiProperty } from '@nestjs/swagger';

import { ApiResponseDto } from '../../../common/dto/api-response.dto';

import { StartupListItemDto } from '../types/startup-list-response.type';

export class StartupListSuccessResponseDto extends ApiResponseDto<
  StartupListItemDto[]
> {
  @ApiProperty({
    type: [StartupListItemDto],
  })
  declare data: StartupListItemDto[];
}
