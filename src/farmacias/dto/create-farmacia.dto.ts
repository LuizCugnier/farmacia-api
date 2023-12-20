import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateFarmaciaDto {
  id: number;

  @IsNotEmpty()
  @MaxLength(150)
  logradouro: string;

  @IsNotEmpty()
  numero: number;

  @IsNotEmpty()
  @MaxLength(100)
  bairro: string;

  @IsNotEmpty()
  @MaxLength(100)
  cidade: string;

  @IsNotEmpty()
  @MaxLength(100)
  estado: string;
}
