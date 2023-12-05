import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateEntregadorDto } from '../dto/create-entregador.dto';
import { CreateEntregador } from '../use-case/create-entregador';
import { FindAllEntregadores } from '../use-case/find-all-entregadores';

@Controller('entregadores')
export class EntregadoresController {
    constructor(
        private readonly createEntregador: CreateEntregador,
        private readonly findAllEntregadores: FindAllEntregadores,
        
    ){}

    @Post()
    create(@Body() createEntregadorDto: CreateEntregadorDto){
        return this.createEntregador.execute(createEntregadorDto);
  }

  @Get()
  findAll() {
    return this.findAllEntregadores.execute();
  }
}
