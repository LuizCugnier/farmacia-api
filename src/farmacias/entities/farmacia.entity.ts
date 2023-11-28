import { Farmaceutico } from 'src/farmaceuticos/entities/farmaceutico.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Farmacia {
  @PrimaryGeneratedColumn()
  id: number;

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

  @OneToMany(() => Farmaceutico, (farmaceutico) => farmaceutico.farmacia)
  farmaceuticos: Farmaceutico[];

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
