import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Farmaceutico } from "../entities/farmaceutico.entity";
import { Repository } from "typeorm";

@Injectable()
export class FindAllFarmaceuticos {
    constructor(
        @InjectRepository(Farmaceutico)
        private readonly farmaceuticoRepository: Repository<Farmaceutico>
    ) { }

    execute() {
        return this.farmaceuticoRepository.find();
    }
}