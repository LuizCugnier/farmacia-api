import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Entregador } from 'src/clientes/entities/entregador.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FindAllEntregadores {
  constructor(
    @InjectRepository(Entregador)
    private readonly entregadorRepository: Repository<Entregador>,
  ) {}

  execute() {
    return this.entregadorRepository.find();
  }
}
