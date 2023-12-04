export class CreateClienteDto {
  id: number;

  nome: string;

  idade: number;

  cpf: number;

  logradouro: string;

  numero: number;

  bairro: string;

  cidade: string;

  estado: string;

  telefones?: string[];
}
