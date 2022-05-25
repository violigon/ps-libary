import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  handleError(error: Error) {
    console.log(error.message);

    return undefined;
  }

  constructor(private readonly prisma: PrismaService) {}
  findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }
  async findById(id: string): Promise<User> {
    const record = await this.prisma.user.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`Registro com o '${id}' não encontrado.`);
    }
    return record;
  }
  create(dto: CreateUserDto): Promise<User> {
    const data: User = { ...dto };
    return this.prisma.user.create({ data }).catch(this.handleError);
  }

  async update(id: string, dto: UpdateUserDto): Promise<User> {
    await this.findById(id);

    const data: Partial<User> = { ...dto };

    return this.prisma.user.update({ where: { id }, data });
  }
  async delete(id: string) {
    await this.prisma.user.delete({ where: { id } });
  }
}
