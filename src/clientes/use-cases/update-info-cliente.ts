import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from '../entities/cliente.entity';
import { Repository } from 'typeorm';
import { UpdateClienteDto } from '../dto/update-cliente.dto';

@Injectable()
export class UpdateInfoCliente {
  constructor(
    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>,
  ) {}

  async execute(id: number, input: UpdateClienteDto) {
    const cliente = await this.clienteRepository.findOneByOrFail({ id: id });

    input.nome && (cliente.nome = input.nome);
    input.idade && (cliente.idade = input.idade);
    input.cpf && (cliente.cpf = input.cpf);
    input.logradouro && (cliente.logradouro = input.logradouro);
    input.numero && (cliente.numero = input.numero);
    input.bairro && (cliente.bairro = input.bairro);
    input.cidade && (cliente.cidade = input.cidade);
    input.estado && (cliente.estado = input.estado);
    return this.clienteRepository.save(cliente);
  }
}
