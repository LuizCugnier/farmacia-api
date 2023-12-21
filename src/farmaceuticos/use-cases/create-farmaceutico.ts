import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Farmaceutico } from '../entities/farmaceutico.entity';
import { QueryFailedError, Repository } from 'typeorm';
import { CreateFarmaceuticoDto } from '../dto/create-farmaceutico.dto';

@Injectable()
export class CreateFarmaceutico {
  constructor(
    @InjectRepository(Farmaceutico)
    private readonly farmaceuticoRepository: Repository<Farmaceutico>,
  ) {}

  execute(input: CreateFarmaceuticoDto) {
    try {
      const farmaceutico = new Farmaceutico(input);
      return this.farmaceuticoRepository.save(farmaceutico);
    } catch (error) {
      console.error('Erro ao salvar farmacêutico:', error);

      if (
        error instanceof QueryFailedError &&
        error.message.includes('duplicate key value violates unique constraint')
      ) {
        throw new ConflictException('Farmacêutico já cadastrado!');
      }

      throw new InternalServerErrorException(
        'Erro interno ao processar a solicitação.',
      );
    }
  }
}
