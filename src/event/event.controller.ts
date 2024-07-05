import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { EventService } from './event.service';
import { EventDto } from './event.dto';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post('/')
  store(@Body() eventDto: EventDto) {
    return this.eventService.create(eventDto);
  }
}
