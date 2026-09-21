import { ApiProperty } from '@nestjs/swagger';
import { Equals } from 'class-validator';

export class ConsentDto {
  @ApiProperty({
    example: true,
    description:
      'Confirms acceptance of the Terms & Conditions and Startup Idea/Data Disclaimer',
  })
  @Equals(true, {
    message:
      'You must accept the Terms & Conditions and Startup Idea/Data Disclaimer',
  })
  termsAccepted: boolean;
}
