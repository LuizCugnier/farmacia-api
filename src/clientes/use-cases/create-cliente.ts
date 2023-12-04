import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryFailedError, Repository } from 'typeorm';
import { Cliente } from '../entities/cliente.entity';
import { CreateClienteDto } from '../dto/create-clientes.dto';

@Injectable()
export class CreateCliente {
  constructor(
    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>,
  ) {}

  execute(input: CreateClienteDto) {
    try {
      const cliente = new Cliente(input);
      return this.clienteRepository.save(cliente);
    } catch (error) {
      console.error('Erro ao salvar cliente:', error);

      if (
        error instanceof QueryFailedError &&
        error.message.includes('duplicate key value violates unique constraint')
      ) {
        throw new Error('Cliente já cadastrado!');
      }
    }
  }
}
