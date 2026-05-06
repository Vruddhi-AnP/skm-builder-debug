import { IsOptional, IsString } from 'class-validator';

export class CreateStartupDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  industry?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsString()
  founderId: string;
}