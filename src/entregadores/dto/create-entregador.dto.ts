import {
  IsNotEmpty,
  IsNumberString,
  MaxLength,
  Validate,
} from 'class-validator';
import { IsIdadeValidConstraint } from 'src/validation/idade-format.validation';

export class CreateEntregadorDto {
  @IsNotEmpty({ message: 'O nome é obrigatório' })
  @MaxLength(100, { message: 'O nome deve ter menos de 100 caracteres' })
  nome: string;

  @IsNotEmpty({ message: 'A idade é obrigatória' })
  @Validate(IsIdadeValidConstraint)
  idade: string;

  @IsNotEmpty({ message: 'CNH é obrigatória' })
  @MaxLength(9, { message: 'A CNH deve ter menos de 9 caracteres' })
  @IsNumberString({}, { message: 'A CNH deve conter apenas números' })
  cnh: string;
}
