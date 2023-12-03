import { PartialType } from '@nestjs/mapped-types';

class _UpdateFarmaceuticoDto {
  crf: number;

  nome: string;

  data_nascimento: Date;

  carg_horaria: number;
}

export class UpdateFarmaceuticoDto extends PartialType(
  _UpdateFarmaceuticoDto,
) {}
