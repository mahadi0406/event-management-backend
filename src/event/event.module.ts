import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from './event.entity';

@Module({
  providers: [EventService],
  controllers: [EventController],
  exports: [EventService],
  imports: [TypeOrmModule.forFeature([Event])],
})
export class EventModule {}
