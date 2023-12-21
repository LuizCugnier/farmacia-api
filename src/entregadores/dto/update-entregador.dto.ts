import { PartialType } from '@nestjs/mapped-types';

class _UpdateEntregadorDto {
  nome: string;

  idade: number;

  cnh: string;
}

export class UpdateEntregadorInfoDto extends PartialType(_UpdateEntregadorDto) {}
