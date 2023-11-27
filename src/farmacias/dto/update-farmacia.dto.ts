import { PartialType } from '@nestjs/mapped-types';

class _UpdateFarmaciaDto {
  logradouro: string;

  numero: number;

  bairro: string;

  cidade: string;

  estado: string;
}

export class UpdateFarmaciaDto extends PartialType(_UpdateFarmaciaDto) {}
