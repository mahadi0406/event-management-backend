import { IsNotEmpty, IsDateString, IsInt, Min } from 'class-validator';

export class EventDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsDateString()
  startTime: string;

  @IsDateString()
  endTime: string;

  @IsInt()
  @Min(1)
  totalSeats: number;
}
