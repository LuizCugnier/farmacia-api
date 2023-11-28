import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FarmaciasModule } from './farmacias/farmacias.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Farmacia } from './farmacias/entities/farmacia.entity';
import { ConfigModule } from '@nestjs/config';
import { FarmaceuticosModule } from './farmaceuticos/farmaceuticos.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as 'postgres',
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    FarmaciasModule,
    FarmaceuticosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
