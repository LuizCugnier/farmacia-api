import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from '../entities/cliente.entity';

@Injectable()
export class FindTelefoneByClienteId {
  constructor(
    @InjectRepository(Cliente)
    private readonly TelefoneClienteRepository: Repository<Cliente>,
  ) {}

  execute() {
    //SELECT "telefones" FROM "cliente"
    return this.TelefoneClienteRepository.find({select: ['telefones']});
  }
}
