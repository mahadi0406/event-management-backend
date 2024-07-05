import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from './event.entity';
import { EventDto } from './event.dto';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private eventRepository: Repository<Event>,
  ) {}

  findAll(): Promise<Event[]> {
    return this.eventRepository.find();
  }

  findById(id: number): Promise<Event | null> {
    return this.eventRepository.findOneBy({ id });
  }

  async create(eventDto: EventDto): Promise<Event> {
    const event = this.eventRepository.create(eventDto);
    return this.eventRepository.save(event);
  }
}
