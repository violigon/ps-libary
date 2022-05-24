import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUrl, Matches, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @ApiProperty({
    description: 'Nome do Usuário no login',
    example: 'gustavollema',
  })
  nickname: string;

  @IsString()
  @ApiProperty({
    description: 'Nome do Usuário para exibição',
    example: 'Gustavo Alves',
  })
  name: string;

  @IsString()
  @MinLength(6)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Senha muito fraca',
  })
  @ApiProperty({
    description: 'Senha do usuário para login',
    example: 'Abcd@1234',
  })
  @ApiProperty({
    description: 'Senha do usuário',
    example: 'Abcd@1234',
  })
  password: string;

  @ApiProperty({
    description: 'Deve ser igual a senha',
    example: 'Abcd@1234',
  })
  confirmPassword: string;

  @IsUrl()
  @ApiProperty({
    description: 'Imagem de Perfil do usuário',
    example: 'https://avatars.githubusercontent.com/u/90219607',
  })
  image: string;
}
