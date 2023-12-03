/* eslint-disable prettier/prettier */
import { Repository } from 'typeorm';
import { Farmacia } from '../entities/farmacia.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FindAllFarmaciasUseCase {
  constructor(
    @InjectRepository(Farmacia)
    private readonly farmaciaRepository: Repository<Farmacia>,
  ) {}

  execute() {
    return this.farmaciaRepository.find();
  }
}
