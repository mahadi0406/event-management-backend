import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { UsersController } from './users/users.controller';
import { EventModule } from './event/event.module';
import { EnvetController } from './envet/envet.controller';
import config from './database/database';

@Module({
  imports: [AuthModule, UsersModule, TypeOrmModule.forRoot(config), EventModule],
  controllers: [AppController, UsersController, EnvetController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
