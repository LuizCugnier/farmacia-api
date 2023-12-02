import { Module } from '@nestjs/common';
import { FarmaceuticosController } from './controller/farmaceuticos.controller';
import { CreateFarmaceutico } from './use-cases/create-farmaceutico';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Farmaceutico } from './entities/farmaceutico.entity';
import { FindAllFarmaceuticos } from './use-cases/find-all-farmaceuticos';

@Module({
  imports: [TypeOrmModule.forFeature([Farmaceutico])],
  controllers: [FarmaceuticosController],
  providers: [CreateFarmaceutico, FindAllFarmaceuticos],
})
export class FarmaceuticosModule {}
