import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'postgres',
  port: 5432,
  username: 'event-root',
  password: 'event-root',
  database: 'event-root',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false,
};

export default config;
