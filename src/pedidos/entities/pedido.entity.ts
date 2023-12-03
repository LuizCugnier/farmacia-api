import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
