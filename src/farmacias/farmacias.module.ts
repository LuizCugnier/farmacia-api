import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Farmacia } from './entities/farmacia.entity';
import { FarmaciasWithUseCaseController } from './controller/farmacias.controller';
import { CreateFarmaciaUseCase } from './use-cases/create-farmacia.use-case';
import { FindAllFarmaciasUseCase } from './use-cases/find-all-farmacias.use-case';
import { FindByIdFarmaciaUseCase } from './use-cases/find-by-id.farmacia.use-case';
import { UpdateInfoFarmaciaUseCase } from './use-cases/update-info.farmacia.use-case';
import { DeleteFarmaciaUseCase } from './use-cases/delete.farmacia.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([Farmacia])],
  controllers: [FarmaciasWithUseCaseController],
  providers: [
    CreateFarmaciaUseCase,
    FindAllFarmaciasUseCase,
    FindByIdFarmaciaUseCase,
    UpdateInfoFarmaciaUseCase,
    DeleteFarmaciaUseCase,
  ],
})
export class FarmaciasModule {}
