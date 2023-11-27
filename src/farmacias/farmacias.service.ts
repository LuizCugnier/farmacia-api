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
    return this.farmaciaRepository.find();
  }

  findOne(id: number) {
    return this.farmaciaRepository.findOneByOrFail({ id: id });
  }

  async update(id: number, updateFarmaciaDto: UpdateFarmaciaDto) {
    const farmacia = await this.farmaciaRepository.findOneByOrFail({ id: id });

    updateFarmaciaDto.logradouro &&
      (farmacia.logradouro = updateFarmaciaDto.logradouro);

    updateFarmaciaDto.numero && (farmacia.numero = updateFarmaciaDto.numero);

    updateFarmaciaDto.bairro && (farmacia.bairro = updateFarmaciaDto.bairro);

    updateFarmaciaDto.cidade && (farmacia.cidade = updateFarmaciaDto.cidade);

    updateFarmaciaDto.estado && (farmacia.estado = updateFarmaciaDto.estado);

    return this.farmaciaRepository.save(farmacia);
  }

  remove(id: number) {
    this.farmaciaRepository.delete({ id: id });
    return `Farmacia com o id ${id} foi deletada com sucesso!`;
  }
}
