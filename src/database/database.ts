import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '../users/user.entity';
import { Event } from '../event/event.entity';

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'postgres',
  port: 5432,
  username: 'event-root',
  password: 'event-root',
  database: 'event-root',
  entities: [User, Event],
  synchronize: true,
};

export default config;
