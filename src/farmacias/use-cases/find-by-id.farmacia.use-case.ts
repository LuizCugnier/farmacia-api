/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Farmacia } from '../entities/farmacia.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FindByIdFarmaciaUseCase {
  constructor(
    @InjectRepository(Farmacia)
    private readonly farmaciaRepository: Repository<Farmacia>,
  ) {}

  execute(id: number) {
    return this.farmaciaRepository.findOneByOrFail({ id: id });
  }
}
