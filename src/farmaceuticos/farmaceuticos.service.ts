import { Injectable } from '@nestjs/common';
import { CreateFarmaceuticoDto } from './dto/create-farmaceutico.dto';
import { UpdateFarmaceuticoDto } from './dto/update-farmaceutico.dto';

@Injectable()
export class FarmaceuticosService {
  create(createFarmaceuticoDto: CreateFarmaceuticoDto) {
    return 'This action adds a new farmaceutico';
  }

  findAll() {
    return `This action returns all farmaceuticos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} farmaceutico`;
  }

  update(id: number, updateFarmaceuticoDto: UpdateFarmaceuticoDto) {
    return `This action updates a #${id} farmaceutico`;
  }

  remove(id: number) {
    return `This action removes a #${id} farmaceutico`;
  }
}
