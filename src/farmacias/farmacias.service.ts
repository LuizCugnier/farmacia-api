import { Injectable } from '@nestjs/common';
import { CreateFarmaciaDto } from './dto/create-farmacia.dto';
import { UpdateFarmaciaDto } from './dto/update-farmacia.dto';
import { Repository } from 'typeorm';
import { Farmacia } from './entities/farmacia.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FarmaciasService {
  constructor(
    @InjectRepository(Farmacia)
    private farmaciaRepository: Repository<Farmacia>,
  ) {}

  create(createFarmaciaDto: CreateFarmaciaDto) {
    const farmacia = new Farmacia(createFarmaciaDto);

    return this.farmaciaRepository.save(farmacia);
  }

  findAll() {
    return `This action returns all farmacias`;
  }

  findOne(id: number) {
    return `This action returns a #${id} farmacia`;
  }

  update(id: number, updateFarmaciaDto: UpdateFarmaciaDto) {
    return `This action updates a #${id} farmacia`;
  }

  remove(id: number) {
    return `This action removes a #${id} farmacia`;
  }
}
