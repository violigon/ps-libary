import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGenreDto } from './dto/create-genre-dto';
import { Genre } from './entities/genre.entity';
import { UpdateGenreDto } from './dto/update-genre-dto';

@Injectable()
export class GenreService {
  handleError(error: Error) {
    console.log(error.message);

    return undefined;
  }

  constructor(private readonly prisma: PrismaService) {}
  findAll(): Promise<Genre[]> {
    return this.prisma.game.findMany();
  }
  async findById(id: string): Promise<Genre> {
    const record = await this.prisma.genre.findUnique({ where: { id }});

    if (!record) {
      throw new NotFoundException(`Registro com o '${id}' não encontrado.`)
    }
    return record;
  }
  create(dto: CreateGenreDto): Promise<Genre> {
    const data: Genre = { ...dto};
    return this.prisma.genre.create({ data }).catch(this.handleError);
  }

  async update(id: string, dto: UpdateGenreDto): Promise<Genre> {
    await this.findById(id);
    
    const data: Partial<Genre> = {...dto};

    return this.prisma.genre.update({
      where: { id },
      data,
    });
  }
  async delete(id: string) {
    await this.prisma.genre.delete({ where: { id } });
  }
}
