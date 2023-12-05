import { Farmacia } from 'src/farmacias/entities/farmacia.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity()
@Unique(['crf'])
export class Farmaceutico {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  crf: number;

  @Column()
  nome: string;

  @Column()
  data_nascimento: Date;

  @Column()
  carg_horaria: number;

  @ManyToOne(() => Farmacia, (farmacia) => farmacia.farmaceuticos)
  farmacia: Farmacia;

  constructor(props: {
    crf: number;
    nome: string;
    data_nascimento: Date;
    carg_horaria: number;
    farmaciaId: number;
  }) {
    Object.assign(this, props);
  }
}
