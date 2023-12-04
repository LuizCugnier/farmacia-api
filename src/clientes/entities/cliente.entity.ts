import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Telefone } from './cliente-telefone.entity';

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

  @OneToMany(() => Telefone, (telefone) => telefone.cliente)
  telefones: Telefone[];

  constructor(props: {
    nome: string;
    idade: number;
    cpf: number;
    logradouro: string;
    numero: number;
    bairro: string;
    cidade: string;
    estado: string;
    telefones: Telefone[];
  }) {
    Object.assign(this, props);
  }
}
