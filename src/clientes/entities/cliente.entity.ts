import { Pedido } from 'src/pedidos/entities/pedido.entity';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity()
@Unique(['cpf'])
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  idade: number;

  @Column({ type: 'bigint' })
  cpf: number;

  @Column()
  logradouro: string;

  @Column()
  numero: number;

  @Column()
  bairro: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  @Column('simple-array', { nullable: true })
  telefones?: string[];

  @OneToMany(() => Pedido, (pedido) => pedido.cliente)
  pedidos: Pedido[];

  constructor(props: {
    nome: string;
    idade: number;
    cpf: number;
    logradouro: string;
    numero: number;
    bairro: string;
    cidade: string;
    estado: string;
    telefones?: string[];
  }) {
    Object.assign(this, props);
  }
}
