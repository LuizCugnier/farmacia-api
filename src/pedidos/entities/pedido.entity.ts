import { Cliente } from 'src/clientes/entities/cliente.entity';
import { Entregador } from 'src/entregadores/entities/entregador.entity';
import { Farmaceutico } from 'src/farmaceuticos/entities/farmaceutico.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Pedido {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  idade: number;

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

  @ManyToOne(() => Farmaceutico, (farmaceutico) => farmaceutico.pedidos)
  farmaceutico: Farmaceutico;

  @ManyToOne(() => Cliente, (cliente) => cliente.pedidos)
  cliente: Cliente;

  @ManyToOne(() => Entregador, (entregador) => entregador.pedidos)
  entregador: Entregador;

  constructor(props: {
    id: number;
    logradouro: string;
    numero: number;
    bairro: string;
    cidade: string;
    estado: string;
  }) {
    Object.assign(this, props);
  }
}
