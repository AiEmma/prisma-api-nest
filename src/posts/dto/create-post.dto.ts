import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({ example: 'titulo do post' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'descrição do post' })
  @IsString()
  @IsOptional()
  content?: string;

  @ApiProperty({ example: 'seunome@email.com' })
  @IsEmail()
  authorEmail: string;
}
