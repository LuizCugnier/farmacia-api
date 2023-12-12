import { Pedido } from 'src/pedidos/entities/pedido.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Entregador {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  idade: number;

  @Column()
  cnh: string;

  @OneToMany(()=> Pedido, (pedido) => pedido.entregador)
  pedidos: Pedido[];

  constructor(props: { nome: string; idade: number; cnh: string }) {
    Object.assign(this, props);
  }
}
