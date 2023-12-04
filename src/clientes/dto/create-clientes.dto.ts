import { Telefone } from '../entities/cliente-telefone.entity';

export class CreateClienteDto {
  nome: string;

  idade: number;

  cpf: number;

  logradouro: string;

  numero: number;

  bairro: string;

  cidade: string;

  estado: string;

  telefones: Telefone[];
}
