import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityNotFoundError, Repository } from 'typeorm';
import { Farmaceutico } from '../entities/farmaceutico.entity';

@Injectable()
export class DeleteFarmaceutico {
  constructor(
    @InjectRepository(Farmaceutico)
    private readonly farmaceuticoRepository: Repository<Farmaceutico>,
  ) {}

  async execute(id: number) {
    try {
      const farmaceutico = await this.farmaceuticoRepository.findOneByOrFail({
        id: id,
      });
      await this.farmaceuticoRepository.remove(farmaceutico);
      return { message: `Farmaceutico com id ${id} removida com sucesso` };
    } catch (error) {
      if (error instanceof EntityNotFoundError) {
        throw new NotFoundException(`Farmaceutico com id ${id} não encontrada`);
      }

      throw new Error(error.message);
    }
  }
}
