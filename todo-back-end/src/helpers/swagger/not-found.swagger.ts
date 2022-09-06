import { ApiProperty } from '@nestjs/swagger/dist/decorators';

export class NotFoundSwagger {
  @ApiProperty()
  statusCode: number;

  @ApiProperty()
  message: string;

  @ApiProperty()
  error: string;
}