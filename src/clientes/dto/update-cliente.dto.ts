import { PartialType } from '@nestjs/mapped-types';

class _UpdateClienteDto {
  nome: string;

  idade: string;    

  cpf: string;

  logradouro: string;

  numero: number;

  bairro: string;

  cidade: string;

  estado: string;

  telefones: string[];
}


export class UpdateClienteDto extends PartialType(_UpdateClienteDto) {}
