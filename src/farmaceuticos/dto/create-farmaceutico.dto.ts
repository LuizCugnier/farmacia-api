import {
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  MaxLength,
  Validate,
} from 'class-validator';
import { IsDateFormatConstraint } from 'src/validation/date-format.validation';

export class CreateFarmaceuticoDto {
  @IsNotEmpty({ message: 'O crf é obrigatório' })
  @MaxLength(5, { message: 'O crf deve ter menos de 5 caracteres' })
  @IsNumberString({ no_symbols: true }, { message: 'O crf deve ser um número' })
  crf: string;

  @IsNotEmpty({ message: 'O nome é obrigatório' })
  @MaxLength(200, { message: 'O nome deve ter menos de 200 caracteres' })
  nome: string;

  @IsNotEmpty({ message: 'A data de nascimento é obrigatória' })
  @Validate(IsDateFormatConstraint)
  data_nascimento: Date;

  @IsNotEmpty({ message: 'Carga horaria é obrigatória' })
  @IsNumber({}, {message: 'Carga horaria deve ser um número'})
  carg_horaria: number;

  @IsNotEmpty({ message: 'A referencia para farmacia é necessaria' })
  @IsNumber({}, {message: 'A referencia para farmacia deve ser um número'})
  farmaciaId: number;
}
