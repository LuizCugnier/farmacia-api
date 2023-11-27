/* eslint-disable prettier/prettier */
import { Repository } from 'typeorm';
import { Farmacia } from '../entities/farmacia.entity';
import { CreateFarmaciaDto } from '../dto/create-farmacia.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CreateFarmaciaUseCase {
  constructor(
    @InjectRepository(Farmacia)
    private readonly farmaciaRepository: Repository<Farmacia>) {}

  execute(input: CreateFarmaciaDto) {
    const farmacia = new Farmacia(input);

    this.farmaciaRepository.create(farmacia);

    return this.farmaciaRepository.save(farmacia);
  }
}
