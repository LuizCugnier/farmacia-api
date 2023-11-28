import { Module } from '@nestjs/common';
import { FarmaceuticosService } from './farmaceuticos.service';
import { FarmaceuticosController } from './farmaceuticos.controller';

@Module({
  controllers: [FarmaceuticosController],
  providers: [FarmaceuticosService],
})
export class FarmaceuticosModule {}
