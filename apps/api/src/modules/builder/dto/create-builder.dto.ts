import { IsObject, IsString } from 'class-validator';

export class CreateBuilderDto {
  @IsString()
  startupId: string;

  @IsObject()
  data: any;
}
