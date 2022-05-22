import {
  Body,
  Controller,
  Get,
  Patch,
  Param,
  Post,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateGameDto } from './dto/create-game-dto';
import { Game } from './entities/game.entity';
import { GameService } from './game.service';
import { UpdateGameDto } from './dto/update-game-dto';

@ApiTags('game')
@Controller('game')
export class GameController {
  constructor(private gameService: GameService) {}

  @Get()
  @ApiOperation({
    summary: 'Listar todos os jogos',
  })
  findAll(): Promise<Game[]> {
    return this.gameService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Visualizar Jogo',
  })
  findOne(@Param('id') id: string): Promise<Game> {
    return this.gameService.findById(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Criar um jogo',
  })
  create(@Body() dto: CreateGameDto): Promise<Game> {
    return this.gameService.create(dto);
  }
  @Patch(':id')
  @ApiOperation({
    summary: 'Editar Um jogo pelo ID',
  })
  update(@Param('id') id: string, @Body() dto: UpdateGameDto): Promise<Game> {
    return this.gameService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Remover um jogo pelo ID',
  })
  delete(@Param('id') id: string) {
    this.gameService.delete(id);
  }
}
