import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Remedio } from '../entities/remedio.entity';
import { QueryFailedError, Repository } from 'typeorm';
import { CreateRemedioDto } from '../dto/create-remedio.dto';

@Injectable()
export class CreateRemedio {
  constructor(
    @InjectRepository(Remedio)
    private readonly remedioRepository: Repository<Remedio>,
  ) {}

  execute(input: CreateRemedioDto) {
    try {
      const remedio = new Remedio(input);
      return this.remedioRepository.save(remedio);
    } catch (error) {
      console.error('Erro ao salvar remedio:', error);

      if (
        error instanceof QueryFailedError &&
        error.message.includes('duplicate key value violates unique constraint')
      ) {
        throw new Error('Remedio já cadastrado!');
      }
    }
  }
}
