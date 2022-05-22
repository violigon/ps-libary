import { Body, Controller, Get, Param, Post, Delete } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateGenreDto } from './dto/create-genre-dto';
import { Genre } from './entities/genre.entity';
import { GenreService } from './genre.service';
import { UpdateGenreDto } from './dto/update-genre-dto';
import { HttpCode, HttpStatus } from '@nestjs/common';


@ApiTags('genre')
@Controller('genre')
export class GenreController {

  constructor(private genreService: GenreService) {}

  @Get()
  @ApiOperation({
    summary: 'Listar todos os jogos',
  })
  findAll(): Promise<Genre[]> {
    return this.genreService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Visualizar Jogo',
  })

  findOne(@Param('id') id: string): Promise<Genre> {
    return this.genreService.findById(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Criar um jogo',
  })
  create(@Body() dto: CreateGenreDto): Promise<Genre> {
    return this.genreService.create(dto);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Editar um jogo pelo ID',
  })
  update(@Param('id') id: string, @Body() dto: UpdateGenreDto): Promise<Genre> {
    return this.genreService.update(id, dto);
};

@Delete(':id')
@HttpCode(HttpStatus.NO_CONTENT)
@ApiOperation({
  summary: 'Remover um jogo pelo ID',
});
delete(@Param('id'): string {
  this.genreService.delete(id);
});

};