import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { UsersController } from './users/users.controller';
import config from './database/database';

@Module({
  imports: [AuthModule, UsersModule, TypeOrmModule.forRoot(config)],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
