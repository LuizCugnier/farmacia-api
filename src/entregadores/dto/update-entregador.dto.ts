import { PartialType } from '@nestjs/mapped-types';
import { IsNumberString, MaxLength, Min, Validate } from 'class-validator';
import { IsIdadeFormatConstraint } from 'src/validation/idade-format.validation';

class _UpdateEntregadorDto {
  @MaxLength(100, { message: 'O nome deve ter menos de 100 caracteres' })
  nome: string;

  @IsNumberString({}, { message: 'A idade deve conter apenas números' })
  @MaxLength(3, { message: 'A idade deve ter menos de 3 caracteres' })
  @Validate(IsIdadeFormatConstraint)
  idade: string;

  @MaxLength(9, { message: 'A CNH deve ter menos de 9 caracteres' })
  @IsNumberString({}, { message: 'A CNH deve conter apenas números' })
  cnh: string;
}

export class UpdateEntregadorInfoDto extends PartialType(
  _UpdateEntregadorDto,
) {}
