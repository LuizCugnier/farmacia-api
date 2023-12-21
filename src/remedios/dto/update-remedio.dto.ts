import { PartialType } from '@nestjs/mapped-types';
import { CreateRemedioDto } from './create-remedio.dto';

class _UpdateRemedioDto {
  quantidade: number;

  preco: number;
}

export class UpdateRemedioDto extends PartialType(_UpdateRemedioDto) {}
