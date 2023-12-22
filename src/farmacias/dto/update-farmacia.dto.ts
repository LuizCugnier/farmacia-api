import { PartialType } from '@nestjs/mapped-types';
import { MaxLength } from 'class-validator';

class _UpdateFarmaciaDto {
  @MaxLength(150)
  logradouro: string;

  @MaxLength(6)
  numero: number;

  @MaxLength(100)
  bairro: string;

  @MaxLength(100)
  cidade: string;

  @MaxLength(100)
  estado: string;
}

export class UpdateFarmaciaDto extends PartialType(_UpdateFarmaciaDto) {}
