import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateFarmaciaDto } from '../dto/create-farmacia.dto';
import { UpdateFarmaciaDto } from '../dto/update-farmacia.dto';
import { CreateFarmaciaUseCase } from '../use-cases/create-farmacia.use-case';
import { FindAllFarmaciasUseCase } from '../use-cases/find-all-farmacias.use-case';

@Controller('farmacias')
export class FarmaciasWithUseCaseController {
  constructor(
    private readonly createFarmaciaUseCase: CreateFarmaciaUseCase,
    private readonly findAllFarmaciasUseCase: FindAllFarmaciasUseCase,
  ) {}

  @Post()
  create(@Body() createFarmaciaDto: CreateFarmaciaDto) {
    return this.createFarmaciaUseCase.execute(createFarmaciaDto);
  }

  @Get()
  findAll() {
    return this.findAllFarmaciasUseCase.execute();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.farmaciasService.findOne(+id);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateFarmaciaDto: UpdateFarmaciaDto,
  // ) {
  //   return this.farmaciasService.update(+id, updateFarmaciaDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.farmaciasService.remove(+id);
  // }
}
