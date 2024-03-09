import { IsInt, IsNotEmpty, IsString, IsUUID } from "class-validator";

export class CreateAlbumDto {
  @IsString()
  name: string;

  @IsInt()
  year: number;

  artistId: string; 
}
