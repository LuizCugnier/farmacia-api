import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateEntregadorDto } from '../dto/create-entregador.dto';
import { CreateEntregador } from '../use-case/create-entregador';
import { FindAllEntregadores } from '../use-case/find-all-entregadores';
import { UpdateEntregadorInfoDto } from '../dto/update-entregador.dto';
import { UpdateEntregadorInfo } from '../use-case/update-entregador-info';
import { DeleteEntregador } from '../use-case/delete-entregador';

@Controller('entregadores')
export class EntregadoresController {
  constructor(
    private readonly createEntregador: CreateEntregador,
    private readonly findAllEntregadores: FindAllEntregadores,
    private readonly updateEntregadorInfo: UpdateEntregadorInfo,
    private readonly deleteEntregador: DeleteEntregador,
  ) {}

  @Post()
  create(@Body() createEntregadorDto: CreateEntregadorDto) {
    return this.createEntregador.execute(createEntregadorDto);
  }

  @Get()
  findAll() {
    return this.findAllEntregadores.execute();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() input: UpdateEntregadorInfoDto) {
    return this.updateEntregadorInfo.execute(+id, input);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.deleteEntregador.execute(+id);
  }
}
