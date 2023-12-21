import {
  IsNotEmpty,
  IsNumberString,
  MaxLength,
  Min,
  Validate,
} from 'class-validator';
import { IsIdadeFormatConstraint } from 'src/validation/idade-format.validation';

export class CreateEntregadorDto {
  @IsNotEmpty({ message: 'O nome é obrigatório' })
  @MaxLength(100, { message: 'O nome deve ter menos de 100 caracteres' })
  nome: string;

  @IsNotEmpty({ message: 'A idade é obrigatória' })
  @IsNumberString({}, { message: 'A idade deve conter apenas números' })
  @MaxLength(3, { message: 'A idade deve ter menos de 3 caracteres' })
  @Validate(IsIdadeFormatConstraint)
  idade: string;

  @IsNotEmpty({ message: 'CNH é obrigatória' })
  @MaxLength(9, { message: 'A CNH deve ter menos de 9 caracteres' })
  @IsNumberString({}, { message: 'A CNH deve conter apenas números' })
  cnh: string;
}
