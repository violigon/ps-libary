import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, } from 'class-validator';

export class CreateGameDto {
  @IsNotEmpty()
  @ApiProperty({
    description: 'Nome do Jogo',
    example: "TheastofUs",
  })
  name: string;
  genero: string;
}