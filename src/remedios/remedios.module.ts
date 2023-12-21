import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RemediosController } from './controller/remedios.controller';
import { CreateRemedio } from './use-case/create-remedio';
import { Remedio } from './entities/remedio.entity';
import { FindAllRemedios } from './use-case/find-all-remedios';
import { FindByIdRemedio } from './use-case/find-by-id-remedio';
import { UpdateInfoRemedio } from './use-case/update-info-remedio';

@Module({
  imports: [TypeOrmModule.forFeature([Remedio])],
  controllers: [RemediosController],
  providers: [
    CreateRemedio,
    FindAllRemedios,
    FindByIdRemedio,
    UpdateInfoRemedio,
  ],
})
export class RemediosModule {}
