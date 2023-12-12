import { Farmacia } from 'src/farmacias/entities/farmacia.entity';
import { Pedido } from 'src/pedidos/entities/pedido.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
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

  @OneToMany(() => Pedido, (pedido) => pedido.farmaceutico)
  pedidos: Pedido[];

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
