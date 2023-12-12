import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FarmaciasModule } from './farmacias/farmacias.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { FarmaceuticosModule } from './farmaceuticos/farmaceuticos.module';
import { ClientesModule } from './clientes/clientes.module';
import { EntregadoresModule } from './entregadores/entregadores.module';
import { RemediosModule } from './remedios/remedios.module';
import { PedidosModule } from './pedidos/pedidos.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    FarmaciasModule,
    FarmaceuticosModule,
    ClientesModule,
    EntregadoresModule,
    RemediosModule,
    PedidosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
