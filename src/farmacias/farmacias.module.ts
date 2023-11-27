import { Module } from '@nestjs/common';
import { FarmaciasService } from './farmacias.service';
import { FarmaciasController } from './farmacias.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Farmacia } from './entities/farmacia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Farmacia])],
  controllers: [FarmaciasController],
  providers: [FarmaciasService],
})
export class FarmaciasModule {}
