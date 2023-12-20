import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Farmacia } from 'src/farmacias/entities/farmacia.entity';
import { RemediosController } from './controller/remedios.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Farmacia])],
  controllers: [RemediosController],
})
export class RemediosModule {}
