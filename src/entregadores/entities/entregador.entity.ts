import { Pedido } from 'src/pedidos/entities/pedido.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
@Unique(['cnh'])
export class Entregador {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  idade: string;

  @Column()
  cnh: string;

  @OneToMany(()=> Pedido, (pedido) => pedido.entregador)
  pedidos: Pedido[];

  constructor(props: { nome: string; idade: string; cnh: string }) {
    Object.assign(this, props);
  }
}
