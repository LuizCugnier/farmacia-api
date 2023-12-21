import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Remedio } from '../entities/remedio.entity';

@Injectable()
export class FindAllRemedios {
  @InjectRepository(Remedio)
  private readonly remedioRepository: Repository<Remedio>;
  execute() {
    return this.remedioRepository.find();
  }
}
