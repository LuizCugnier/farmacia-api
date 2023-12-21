import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateRemedio } from '../use-case/create-remedio';
import { CreateRemedioDto } from '../dto/create-remedio.dto';
import { FindAllRemedios } from '../use-case/find-all-remedios';
import { FindByIdRemedio } from '../use-case/find-by-id-remedio';
import { UpdateRemedioDto } from '../dto/update-remedio.dto';
import { UpdateInfoRemedio } from '../use-case/update-info-remedio';

@Controller('remedios')
export class RemediosController {
  constructor(
    private readonly createRemedio: CreateRemedio,
    private readonly findAllRemedios: FindAllRemedios,
    private readonly findByIdRemedio: FindByIdRemedio,
    private readonly updateInfoRemedio: UpdateInfoRemedio,
  ) {}

  @Post()
  create(@Body() input: CreateRemedioDto) {
    return this.createRemedio.execute(input);
  }

  @Get()
  findAll() {
    return this.findAllRemedios.execute();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.findByIdRemedio.execute(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() input: UpdateRemedioDto) {
    return this.updateInfoRemedio.execute(+id, input);
  }
}
