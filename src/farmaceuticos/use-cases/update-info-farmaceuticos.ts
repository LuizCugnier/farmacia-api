import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Farmaceutico } from '../entities/farmaceutico.entity';
import { UpdateFarmaceuticoDto } from '../dto/update-farmaceutico.dto';

@Injectable()
export class UpdateInfoFarmaceutico {
  constructor(
    @InjectRepository(Farmaceutico)
    private readonly farmaceuticoRepository: Repository<Farmaceutico>,
  ) {}

  async execute(id: number, input: UpdateFarmaceuticoDto) {
    const farmaceutico = await this.farmaceuticoRepository.findOneByOrFail({
      id: id,
    });

    input.crf && (farmaceutico.crf = input.crf);
    input.nome && (farmaceutico.nome = input.nome);
    input.data_nascimento &&
      (farmaceutico.data_nascimento = input.data_nascimento);
    input.carg_horaria && (farmaceutico.carg_horaria = input.carg_horaria);

    return this.farmaceuticoRepository.save(farmaceutico);
  }
}
