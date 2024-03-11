import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { Favorites, FavoritesIds } from 'src/helpers/types';
import { ERRORS } from 'src/helpers/constants';
import { db as dbType } from 'src/database/database';

@Injectable()
export class FavoritesService {
  constructor(private db: dbType) {}

  findAll() {
    return this.db.favorites;
  }

  create(id: string, type: Favorites, typeId: FavoritesIds) {
    const entity = this.db[type].find((entity) => entity.id === id);

    if (!entity) {
      throw new UnprocessableEntityException(ERRORS.entityNotFound(type, id));
    }

    const entityExistInFavs = this.db.favorites[type].some((entity) => entity[typeId] === id);

    if (entityExistInFavs) return undefined;

    this.db.favorites[type].push(entity as any);
    return entity;
  }

  remove(id: string, type: Favorites, typeId: FavoritesIds) {
    const index = this.db.favorites[type].findIndex((entity) => entity[typeId] === id);
    const someEntitiesExist = this.db.favorites[type].some((entity) => entity[typeId] === id);

    if (someEntitiesExist) {
      throw new NotFoundException(ERRORS.entityNotFound(type, id));
    }

    const deletedEntity = this.db.favorites[type].splice(index, 1);

    return deletedEntity;
  }
}
