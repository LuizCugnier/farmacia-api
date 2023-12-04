import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './entities/cliente.entity';
import { ClientesController } from './controller/clientes.controller';
import { CreateCliente } from './use-cases/create-cliente';
import { FindAllClientes } from './use-cases/find-all-clientes';
import { UpdateInfoCliente } from './use-cases/update-info-cliente';
import { DeleteCliente } from './use-cases/delete-cliente';
import { FindTelefoneByClienteId } from './use-cases/find-telefone-by-cliente-id';

@Module({
  imports: [TypeOrmModule.forFeature([Cliente])],
  controllers: [ClientesController],
  providers: [CreateCliente, FindAllClientes, UpdateInfoCliente, DeleteCliente, FindTelefoneByClienteId],
})
export class ClientesModule {}
