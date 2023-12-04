import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

    constructor(props:{
        nome: string;
        idade: number;
        cnh: string;
    }){
        Object.assign(this, props);
    }
}