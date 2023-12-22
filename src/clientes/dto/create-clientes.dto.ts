import { IsNotEmpty, MaxLength, Validate, validate } from 'class-validator';
import { IsCpfFormatConstraint } from 'src/validation/cpf-format.validation';
import { IsIdadeValidConstraint } from 'src/validation/idade-format.validation';

export class CreateClienteDto {
  id: number;

  @IsNotEmpty({ message: 'O nome é obrigatório' })
  @MaxLength(100, { message: 'O nome deve ter menos de 100 caracteres' })
  nome: string;

  @IsNotEmpty({ message: 'A idade é obrigatória' })
  @Validate(IsIdadeValidConstraint)
  idade: string;

  @IsNotEmpty({ message: 'O CPF é obrigatório' })
  @Validate(IsCpfFormatConstraint)
  cpf: string;

  logradouro: string;

  numero: number;

  bairro: string;

  cidade: string;

  estado: string;

  telefones?: string[];
}
