import { Farmacia } from "src/farmacias/entities/farmacia.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
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
}
