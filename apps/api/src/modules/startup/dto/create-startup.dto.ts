import { IsOptional, IsString } from 'class-validator';

export class CreateStartupDto {
  @IsString()
  name: string;

  @IsString()
  industry: string;

  @IsOptional()
  @IsString()
  description?: string;
}
