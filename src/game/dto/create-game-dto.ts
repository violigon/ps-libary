import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUrl } from 'class-validator';

export class CreateGameDto {
  @IsString()
  @IsUrl()
  @ApiProperty({
    description: 'Nome do Jogo',
    example: 'TheastofUs',
  })
  name: string;
  description: string;
  image: string;
}
