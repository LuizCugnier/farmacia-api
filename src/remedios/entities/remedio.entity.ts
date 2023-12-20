import { Pedido } from 'src/pedidos/entities/pedido.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Remedio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  lote: number;

  @Column()
  validade: string;

  @Column()
  fabricante: string;

  @Column()
  quantidade: number;

  @Column()
  preco: number;

  @Column()
  generico: boolean;

  @ManyToOne(() => Pedido, (pedido) => pedido.remedios)
  pedido: Pedido;

  constructor(props: {
    nome: string;
    lote: number;
    validade: string;
    fabricante: string;
    quantidade: number;
    preco: number;
    generico: boolean;
    pedido?: Pedido;
  }) {
    Object.assign(this, props);
  }
}
