import { Album } from "src/album/entities/album.entity";
import { Artist } from "src/artist/entities/artist.entity";
import { Track } from "src/track/entities/track.entity";
import { User } from "src/user/entities/user.entity";

export class Database {
  public users: User[] = [];
  public albums: Album[] = [];
  public artists: Artist[] = [];
  public tracks: Track[] = [];
}
