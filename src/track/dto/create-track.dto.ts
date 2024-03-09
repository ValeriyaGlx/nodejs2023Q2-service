import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateTrackDto {
  @IsString()
  name: string;

  artistId: string;

  albumId: string;

  @IsInt()
  duration: number;
}
