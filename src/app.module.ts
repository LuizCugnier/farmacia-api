import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FarmaciasModule } from './farmacias/farmacias.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Farmacia } from './farmacias/entities/farmacia.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: 5432,
      username: 'postgres',
      password: 'cezy229451668',
      database: 'farmaciaAPI',
      entities: [Farmacia],
      synchronize: true,
    }),
    FarmaciasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
