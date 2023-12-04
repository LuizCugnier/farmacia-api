import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateCliente } from '../use-cases/create-cliente';
import { CreateClienteDto } from '../dto/create-clientes.dto';
import { FindAllClientes } from '../use-cases/find-all-clientes';

@Controller('clientes')
export class ClientesController {
  constructor(
    private readonly createCliente: CreateCliente,
    private readonly findAllClientes: FindAllClientes,
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
    return 'Listando telefones do cliente';
  }

  @Post(':id/telefones')
  createTelefone(@Param('id') id: string) {
    return 'Criando telefone para o cliente';
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return 'Atualizando cliente';
  }

  @Delete(':id')
    remove(@Param('id') id: string) {
        return 'Removendo cliente';
    }
}
