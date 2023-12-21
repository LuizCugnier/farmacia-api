import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Entregador } from '../entities/entregador.entity';
import { Repository } from 'typeorm';
import { UpdateEntregadorInfoDto } from '../dto/update-entregador.dto';

@Injectable()
export class UpdateEntregadorInfo {
  constructor(
    @InjectRepository(Entregador)
    private readonly entregadorRepository: Repository<Entregador>,
  ) {}

  async execute(id: number, input: UpdateEntregadorInfoDto) {
    const entregador = await this.entregadorRepository.findOneByOrFail({
      id: id,
    });

    input.nome && (entregador.nome = input.nome);
    input.idade && (entregador.idade = input.idade);
    input.cnh && (entregador.cnh = input.cnh);
    return this.entregadorRepository.save(entregador);
  }
}
