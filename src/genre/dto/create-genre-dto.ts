import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, } from 'class-validator';

export class CreateGenreDto {
  @IsNotEmpty()
  @ApiProperty({
    description: 'Nome do gênero',
    example: "Ação",
  })
  name: string;
  genero: string;
}