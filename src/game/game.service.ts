import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGameDto } from './dto/create-game-dto';
import { Game } from './entities/game.entity';

@Injectable()
export class GameService {
  games: Game[] = [];

  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.game.findMany();
  }

  create(createGameDto: CreateGameDto) {
    const game: Game = { ...createGameDto};
    return this.prisma.game.create({
      data: game,
    })
  }
}
