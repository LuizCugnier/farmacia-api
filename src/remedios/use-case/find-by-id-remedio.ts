import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Remedio } from '../entities/remedio.entity';

@Injectable()
export class FindByIdRemedio {
  constructor(
    @InjectRepository(Remedio)
    private readonly remedioRepository: Repository<Remedio>,
  ) {}
  execute(id: number) {
    return this.remedioRepository.findOneByOrFail({ id: id });
  }
}
