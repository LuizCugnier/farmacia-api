import { DataSourceOptions } from 'typeorm';

const DataSource: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '040604',
  database: 'farmaciaAPI',
  synchronize: false,
  logging: true,
  entities: [
    'src/clientes/entities/cliente.entity.ts',
    'src/entregadores/entities/entregador.entity.ts',
    'src/farmaceuticos/entities/farmaceutico.entity.ts',
    'src/farmaciasen/tities/farmacia.entity.ts',
  ],
  migrations: ['src/migrations/**/*.ts'],
};

export default DataSource;
