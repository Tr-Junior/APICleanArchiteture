// src/dto/CreateBookDto.ts
import { IsString, IsNotEmpty, IsNumber, IsDateString } from 'class-validator';

export class CreateBookDto {
  @IsString()
    @IsNotEmpty()
    title!: string;

  @IsString()
    @IsNotEmpty()
    author!: string;

@IsDateString()
    @IsNotEmpty()
    publishedDate!: number;
}
