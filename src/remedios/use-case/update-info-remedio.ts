import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Remedio } from '../entities/remedio.entity';
import { UpdateRemedioDto } from '../dto/update-remedio.dto';

@Injectable()
export class UpdateInfoRemedio {
  constructor(
    @InjectRepository(Remedio)
    private readonly remedioRepository: Repository<Remedio>,
  ) {}
  async execute(id: number, input: UpdateRemedioDto) {
    const remedio = await this.remedioRepository.findOneByOrFail({ id: id });

    input.preco && (remedio.preco = input.preco);
    input.quantidade && (remedio.quantidade = input.quantidade);

    return this.remedioRepository.save(remedio);
  }
}
