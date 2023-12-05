/* eslint-disable prettier/prettier */
import { QueryFailedError, Repository } from 'typeorm';
import { Farmacia } from '../entities/farmacia.entity';
import { CreateFarmaciaDto } from '../dto/create-farmacia.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CreateFarmaciaUseCase {
  constructor(
    @InjectRepository(Farmacia)
    private readonly farmaciaRepository: Repository<Farmacia>,
  ) {}

  execute(input: CreateFarmaciaDto) {
    try {
      const farmacia = new Farmacia(input);
      return this.farmaciaRepository.save(farmacia);
    } catch (error) {
      console.error('Erro ao salvar farmácia:', error);

      // Tratar o erro de chave única violada de forma mais abrangente
      // if (
      //   // error instanceof QueryFailedError &&
      //   // error.message.includes('duplicate key value violates unique constraint')
      // ) {
      // }
      throw new Error('Farmácia já cadastrada!');
    }
  }
}
