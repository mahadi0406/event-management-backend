import { Injectable, NotFoundException } from '@nestjs/common';
import { EventDto } from './event.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from './event.entity';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private eventRepository: Repository<Event>,
  ) {}

  async findById(id: number) {
    return this.eventRepository.findOne({ where: { id } });
  }

  async create(eventDto: EventDto) {
    const newEvent = this.eventRepository.create(eventDto);
    return await this.eventRepository.save(newEvent);
  }

  async update(id: number, eventDto: EventDto) {
    const event = await this.findById(id);
    if (!event) {
      throw new NotFoundException(`Event with ID ${id} not found`);
    }
    await this.eventRepository.update(id, eventDto);
    return this.findById(id);
  }
}
