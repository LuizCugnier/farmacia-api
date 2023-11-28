import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FarmaceuticosService } from './farmaceuticos.service';
import { CreateFarmaceuticoDto } from './dto/create-farmaceutico.dto';
import { UpdateFarmaceuticoDto } from './dto/update-farmaceutico.dto';

@Controller('farmaceuticos')
export class FarmaceuticosController {
  constructor(private readonly farmaceuticosService: FarmaceuticosService) {}

  @Post()
  create(@Body() createFarmaceuticoDto: CreateFarmaceuticoDto) {
    return this.farmaceuticosService.create(createFarmaceuticoDto);
  }

  @Get()
  findAll() {
    return this.farmaceuticosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.farmaceuticosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFarmaceuticoDto: UpdateFarmaceuticoDto) {
    return this.farmaceuticosService.update(+id, updateFarmaceuticoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.farmaceuticosService.remove(+id);
  }
}
