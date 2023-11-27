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
import { FindByIdFarmaciaUseCase } from '../use-cases/find-by-id.farmacia.use-case';
import { UpdateInfoFarmaciaUseCase } from '../use-cases/update-info.farmacia.use-case';
import { DeleteFarmaciaUseCase } from '../use-cases/delete.farmacia.use-case';

@Controller('farmacias')
export class FarmaciasWithUseCaseController {
  constructor(
    private readonly createFarmaciaUseCase: CreateFarmaciaUseCase,
    private readonly findAllFarmaciasUseCase: FindAllFarmaciasUseCase,
    private readonly findByIdFarmaciaUseCase: FindByIdFarmaciaUseCase,
    private readonly updateInfoFarmaciaUseCase: UpdateInfoFarmaciaUseCase,
    private readonly deleteFarmaciaUseCase: DeleteFarmaciaUseCase,
  ) {}

  @Post()
  create(@Body() createFarmaciaDto: CreateFarmaciaDto) {
    return this.createFarmaciaUseCase.execute(createFarmaciaDto);
  }

  @Get()
  findAll() {
    return this.findAllFarmaciasUseCase.execute();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.findByIdFarmaciaUseCase.execute(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFarmaciaDto: UpdateFarmaciaDto,
  ) {
    return this.updateInfoFarmaciaUseCase.execute(+id, updateFarmaciaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deleteFarmaciaUseCase.execute(+id);
  }
}
