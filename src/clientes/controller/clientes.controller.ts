import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateCliente } from '../use-cases/create-cliente';
import { CreateClienteDto } from '../dto/create-clientes.dto';
import { FindAllClientes } from '../use-cases/find-all-clientes';
import { UpdateInfoCliente } from '../use-cases/update-info-cliente';
import { UpdateClienteDto } from '../dto/update-cliente.dto';
import { DeleteCliente } from '../use-cases/delete-cliente';
import { FindTelefoneByClienteId } from '../use-cases/find-telefone-by-cliente-id';

@Controller('clientes')
export class ClientesController {
  constructor(
    private readonly createCliente: CreateCliente,
    private readonly findAllClientes: FindAllClientes,
    private readonly updateInfoCliente: UpdateInfoCliente,
    private readonly delelteCliente: DeleteCliente,
    private readonly findTelefoneByClienteId: FindTelefoneByClienteId,
  ) {}

  @Post()
  create(@Body() createClienteDto: CreateClienteDto) {
    return this.createCliente.execute(createClienteDto);
  }

  @Get()
  findAll() {
    return this.findAllClientes.execute();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return 'Listando cliente';
  }

  @Get(':id/telefones')
  findTelefones(@Param('id') id: string) {
    return this.findTelefoneByClienteId.execute();
  }

  @Post(':id/telefones')
  createTelefone(@Param('id') id: string) {
    return 'Criando telefone para o cliente';
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClienteDto: UpdateClienteDto) {
    return this.updateInfoCliente.execute(+id, updateClienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.delelteCliente.execute(+id);
  }
}
