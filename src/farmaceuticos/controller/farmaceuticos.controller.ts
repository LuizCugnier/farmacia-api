import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateFarmaceuticoDto } from '../dto/create-farmaceutico.dto';
import { UpdateFarmaceuticoDto } from '../dto/update-farmaceutico.dto';
import { CreateFarmaceutico } from '../use-cases/create-farmaceutico';
import { FindAllFarmaceuticos } from '../use-cases/find-all-farmaceuticos';

@Controller('farmaceuticos')
export class FarmaceuticosController {
  constructor(
    private readonly createFarmaceutico: CreateFarmaceutico,
    private readonly findAllFarmaceuticos: FindAllFarmaceuticos,
  ) {}

  @Post()
  create(@Body() createFarmaceuticoDto: CreateFarmaceuticoDto) {
    return this.createFarmaceutico.execute(createFarmaceuticoDto);
  }

  @Get()
  findAll() {
    return this.findAllFarmaceuticos.execute();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return;
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFarmaceuticoDto: UpdateFarmaceuticoDto,
  ) {
    return;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return;
  }
}
