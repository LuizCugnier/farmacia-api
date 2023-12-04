import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityNotFoundError, Repository } from 'typeorm';
import { Cliente } from '../entities/cliente.entity';


@Injectable()
export class DeleteCliente {
  constructor(
    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>,
  ) {}

  async execute(id: number) {
    try {
      const cliente = await this.clienteRepository.findOneByOrFail({
        id: id,
      });
      await this.clienteRepository.remove(cliente);
      return { message: `Cliente com id ${id} removida com sucesso` };
    } catch (error) {
      if (error instanceof EntityNotFoundError) {
        throw new NotFoundException(`Cliente com id ${id} não encontrada`);
      }

      throw new Error(error.message);
    }
  }
}
