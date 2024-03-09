import { PartialType } from '@nestjs/swagger';
import { CreateTrackDto } from './create-track.dto';
import { IsInt, IsString } from 'class-validator';

export class UpdateTrackDto extends PartialType(CreateTrackDto) {
  @IsString()
  name: string;

  artistId: string;

  albumId: string;

  @IsInt()
  duration: number;
}
