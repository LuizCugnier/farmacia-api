import { Module } from '@nestjs/common';
import { FarmaciasService } from './farmacias.service';
//import { FarmaciasController } from './controllers/farmacias.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Farmacia } from './entities/farmacia.entity';
import { FarmaciasWithUseCaseController } from './controller/farmacias-with-use-case.controller';
import { CreateFarmaciaUseCase } from './use-cases/create-farmacia.use-case';
import { FindAllFarmaciasUseCase } from './use-cases/find-all-farmacias.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([Farmacia])],
  controllers: [FarmaciasWithUseCaseController],
  providers: [FarmaciasService, CreateFarmaciaUseCase, FindAllFarmaciasUseCase],
})
export class FarmaciasModule {}
