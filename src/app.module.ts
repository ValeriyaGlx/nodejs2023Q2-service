import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AlbumModule } from './album/album.module';
import { ArtistModule } from './artist/artist.module';
import { TrackModule } from './track/track.module';
import { DatabaseService } from './database/database.service';
import { FavoritesModule } from './favorites/favorites.module';

@Module({
  imports: [UserModule, TrackModule, ArtistModule, AlbumModule, FavoritesModule],
  controllers: [AppController],
  providers: [AppService, DatabaseService],
})
export class AppModule {}
