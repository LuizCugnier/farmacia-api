import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Cliente } from './cliente.entity';

@Entity()
export class Telefone {
  @PrimaryColumn()
  clienteId: number;

  @PrimaryColumn()
  numero: string;

  @ManyToOne(() => Cliente, (cliente) => cliente.telefones)
  cliente: Cliente;
}
