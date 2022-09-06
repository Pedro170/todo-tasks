import { ApiProperty } from '@nestjs/swagger/dist/decorators';

export class BadRequestSwagger {
  @ApiProperty()
  statusCode: number;

  @ApiProperty()
  message: string[];

  @ApiProperty()
  error: string;
}