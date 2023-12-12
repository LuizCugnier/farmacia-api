import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Farmacia } from 'src/farmacias/entities/farmacia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Farmacia])],
})
export class RemediosModule {}
