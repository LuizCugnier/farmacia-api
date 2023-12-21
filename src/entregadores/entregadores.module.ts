import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entregador } from 'src/entregadores/entities/entregador.entity';
import { EntregadoresController } from './controller/entregadores.controller';
import { CreateEntregador } from './use-case/create-entregador';
import { FindAllEntregadores } from './use-case/find-all-entregadores';
import { UpdateEntregadorInfo } from './use-case/update-entregador-info';
import { DeleteEntregador } from './use-case/delete-entregador';

@Module({
  imports: [TypeOrmModule.forFeature([Entregador])],
  controllers: [EntregadoresController],
  providers: [
    CreateEntregador,
    FindAllEntregadores,
    UpdateEntregadorInfo,
    DeleteEntregador,
  ],
})
export class EntregadoresModule {}
