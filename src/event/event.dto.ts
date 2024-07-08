import { IsNotEmpty } from 'class-validator';

export class EventDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;
}
