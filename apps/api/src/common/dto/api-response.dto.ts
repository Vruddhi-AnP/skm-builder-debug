import { ApiProperty } from '@nestjs/swagger';

export class ApiResponseDto<T> {
  @ApiProperty({
    example: true,
  })
  success: boolean;

  @ApiProperty({
    example: 201,
  })
  statusCode: number;

  @ApiProperty({
    example: 'Request successful',
  })
  message: string;

  @ApiProperty({
    example: '/api/auth/signup',
  })
  path: string;

  @ApiProperty({
    example: '2026-05-21T10:22:57.187Z',
  })
  timestamp: string;

  data: T;
}
