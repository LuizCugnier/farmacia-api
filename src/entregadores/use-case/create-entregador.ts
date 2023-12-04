import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Entregador } from 'src/entregadores/entities/entregador.entity';
import { Repository, QueryFailedError } from 'typeorm';
import { CreateEntregadorDto } from '../dto/create-entregador.dto';

@Injectable()
export class CreateEntregador {
  constructor(
    @InjectRepository(Entregador)
    private readonly entregadorRepository: Repository<Entregador>,
  ) {}

  execute(input: CreateEntregadorDto) {
    try {
      const entregador = new Entregador(input);
      return this.entregadorRepository.save(entregador);
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
