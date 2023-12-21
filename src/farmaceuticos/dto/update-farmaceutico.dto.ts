import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsNumberString, MaxLength, Validate } from 'class-validator';
import { IsDateFormatConstraint } from 'src/validation/date-format.validation';

class _UpdateFarmaceuticoDto {
  @MaxLength(5, { message: 'O crf deve ter menos de 5 caracteres' })
  @IsNumberString({ no_symbols: true }, { message: 'O crf deve ser um número' })
  crf: string;

  @MaxLength(200, { message: 'O nome deve ter menos de 200 caracteres' })
  nome: string;

  @Validate(IsDateFormatConstraint)
  data_nascimento: Date;

  @IsNumber({}, { message: 'Carga horaria deve ser um número' })
  carg_horaria: number;
}

export class UpdateFarmaceuticoDto extends PartialType(
  _UpdateFarmaceuticoDto,
) {}
