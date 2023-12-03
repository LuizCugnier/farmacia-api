/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Farmacia } from '../entities/farmacia.entity';
import { EntityNotFoundError, Repository } from 'typeorm';

@Injectable()
export class DeleteFarmaciaUseCase {
  constructor(
    @InjectRepository(Farmacia)
    private readonly farmaciaRepository: Repository<Farmacia>,
  ) {}

  async execute(id: number) {
    try {
      const farmacia = await this.farmaciaRepository.findOneByOrFail({
        id: id,
      });
      await this.farmaciaRepository.remove(farmacia);
      return { message: `Farmacia com id ${id} removida com sucesso` };
    } catch (error) {
      if (error instanceof EntityNotFoundError) {
        throw new NotFoundException(`Farmacia com id ${id} não encontrada`);
      }

      throw new Error(error.message);
    }
  }
}
