import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { EventService } from './event.service';
import { EventDto } from './event.dto';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post('')
  async create(@Body() eventDto: EventDto) {
    const createdEvent = await this.eventService.create(eventDto);
    return {
      statusCode: HttpStatus.CREATED,
      message: 'Event created successfully',
      data: createdEvent,
    };
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async update(@Param('id') id: string, @Body() eventDto: EventDto) {
    const updatedEvent = await this.eventService.update(+id, eventDto);
    return {
      statusCode: HttpStatus.OK,
      message: 'Event updated successfully',
      data: updatedEvent,
    };
  }
}
