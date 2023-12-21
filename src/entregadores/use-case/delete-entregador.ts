import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityNotFoundError, Repository } from 'typeorm';
import { Entregador } from '../entities/entregador.entity';

@Injectable()
export class DeleteEntregador {
  constructor(
    @InjectRepository(Entregador)
    private readonly entregadorRepository: Repository<Entregador>,
  ) {}

  async execute(id: number) {
    try {
      const entregador = await this.entregadorRepository.findOneByOrFail({
        id: id,
      });
      await this.entregadorRepository.remove(entregador);
      return { message: `entregador com id ${id} removida com sucesso` };
    } catch (error) {
      if (error instanceof EntityNotFoundError) {
        throw new NotFoundException(`entregador com id ${id} não encontrada`);
      }

      throw new Error(error.message);
    }
  }
}
