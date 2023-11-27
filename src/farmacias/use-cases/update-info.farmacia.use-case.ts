/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Farmacia } from '../entities/farmacia.entity';
import { Repository } from 'typeorm';
import { UpdateFarmaciaDto } from '../dto/update-farmacia.dto';

@Injectable()
export class UpdateInfoFarmaciaUseCase {
  constructor(
    @InjectRepository(Farmacia)
    private readonly farmaciaRepository: Repository<Farmacia>,
  ) {}

  async execute(id: number, input: UpdateFarmaciaDto) {
    const farmacia = await this.farmaciaRepository.findOneByOrFail({ id: id });

    input.logradouro && (farmacia.logradouro = input.logradouro);

    input.numero && (farmacia.numero = input.numero);

    input.bairro && (farmacia.bairro = input.bairro);

    input.cidade && (farmacia.cidade = input.cidade);

    input.estado && (farmacia.estado = input.estado);

    return this.farmaciaRepository.save(farmacia);
  }
}
