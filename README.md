# Home Library Service Part 1

## Description

Let's try a Home Library Service! Users can create, read, update, delete data about Artists, Tracks and Albums, add them to Favorites in their own Home Library!

## Downloading

```
git clone git@github.com:ValeriyaGlx/nodejs2023Q2-service.git
```

## Installing NPM modules

```
npm install
```

## Setup Enviroment
Setup `.env` variables. Use `.env.example` file for it

## Running application in the prod mode


```
npm start
```

After starting the app on port (`4000 as default` http://localhost:4000/ ) you can open in your browser OpenAPI documentation by typing http://localhost:4000/docs/.

## Testing

After application running open new terminal and enter:


```
npm run test
```

### Auto-fix 

```
npm run lint
```

## Implementation details
  * `Users` (`/user` route)
    * `GET /user` - get all users
      - Server answer with `status code` **200** and all users records
    * `GET /user/:id` - get single user by id
      - Server answer with `status code` **200** and and record with `id === userId` if it exists
      - Server answer with `status code` **400** and corresponding message if `userId` is invalid (not `uuid`)
      - Server answer with `status code` **404** and corresponding message if record with `id === userId` doesn't exist
    * `POST /user` - create user 
        - Server answer with `status code` **201** and newly created record if request is valid
        - Server answer with `status code` **400** and corresponding message if request `body` does not contain **required** fields
    * `PUT /user/:id` - update user's password
      - Server answer with` status code` **200** and updated record if request is valid
      - Server answer with` status code` **400** and corresponding message if `userId` is invalid (not `uuid`)
      - Server answer with` status code` **404** and corresponding message if record with `id === userId` doesn't exist
      - Server answer with` status code` **403** and corresponding message if `oldPassword` is wrong
    * `DELETE /user/:id` - delete user
      - Server answer with `status code` **204** if the record is found and deleted
      - Server answer with `status code` **400** and corresponding message if `userId` is invalid (not `uuid`)
      - Server answer with `status code` **404** and corresponding message if record with `id === userId` doesn't exist

  * `Tracks` (`/track` route)
    * `GET /track` - get all tracks
      - Server answer with `status code` **200** and all tracks records
    * `GET /track/:id` - get single track by id
      - Server answer with `status code` **200** and and record with `id === trackId` if it exists
      - Server answer with `status code` **400** and corresponding message if `trackId` is invalid (not `uuid`)
      - Server answer with `status code` **404** and corresponding message if record with `id === trackId` doesn't exist
    * `POST /track` - create new track
      - Server answer with `status code` **201** and newly created record if request is valid
      - Server answer with `status code` **400** and corresponding message if request `body` does not contain **required** fields
    * `PUT /track/:id` - update track info
      - Server answer with` status code` **200** and updated record if request is valid
      - Server answer with` status code` **400** and corresponding message if `trackId` is invalid (not `uuid`)
      - Server answer with` status code` **404** and corresponding message if record with `id === trackId` doesn't exist
    * `DELETE /track/:id` - delete track
      - Server answer with `status code` **204** if the record is found and deleted
      - Server answer with `status code` **400** and corresponding message if `trackId` is invalid (not `uuid`)
      - Server answer with `status code` **404** and corresponding message if record with `id === trackId` doesn't exist

  * `Artists` (`/artist` route)
    * `GET /artist` - get all artists
      - Server answer with `status code` **200** and all artists records
    * `GET /artist/:id` - get single artist by id
      - Server answer with `status code` **200** and and record with `id === artistId` if it exists
      - Server answer with `status code` **400** and corresponding message if `artistId` is invalid (not `uuid`)
      - Server answer with `status code` **404** and corresponding message if record with `id === artistId` doesn't exist
    * `POST /artist` - create new artist
      - Server answer with `status code` **201** and newly created record if request is valid
      - Server answer with `status code` **400** and corresponding message if request `body` does not contain **required** fields
    * `PUT /artist/:id` - update artist info
      - Server answer with` status code` **200** and updated record if request is valid
      - Server answer with` status code` **400** and corresponding message if `artist` is invalid (not `uuid`)
      - Server answer with` status code` **404** and corresponding message if record with `id === artistId` doesn't exist
    * `DELETE /artist/:id` - delete album
      - Server answer with `status code` **204** if the record is found and deleted
      - Server answer with `status code` **400** and corresponding message if `artistId` is invalid (not `uuid`)
      - Server answer with `status code` **404** and corresponding message if record with `id === artistId` doesn't exist

  * `Albums` (`/album` route)
    * `GET /album` - get all albums
      - Server answer with `status code` **200** and all albums records
    * `GET /album/:id` - get single album by id
      - Server answer with `status code` **200** and and record with `id === albumId` if it exists
      - Server answer with `status code` **400** and corresponding message if `albumId` is invalid (not `uuid`)
      - Server answer with `status code` **404** and corresponding message if record with `id === albumId` doesn't exist
    * `POST /album` - create new album
      - Server answer with `status code` **201** and newly created record if request is valid
      - Server answer with `status code` **400** and corresponding message if request `body` does not contain **required** fields
    * `PUT /album/:id` - update album info
      - Server answer with` status code` **200** and updated record if request is valid
      - Server answer with` status code` **400** and corresponding message if `albumId` is invalid (not `uuid`)
      - Server answer with` status code` **404** and corresponding message if record with `id === albumId` doesn't exist
    * `DELETE /album/:id` - delete album
      - Server answer with `status code` **204** if the record is found and deleted
      - Server answer with `status code` **400** and corresponding message if `albumId` is invalid (not `uuid`)
      - Server answer with `status code` **404** and corresponding message if record with `id === albumId` doesn't exist

  * `Favorites`
    * `GET /favs` - get all favorites
      - Server answer with `status code` **200** and all favorite records
    * `POST /favs/track/:id` - add track to the favorites
      - Server answer with `status code` **201** and corresponding message if track with `id === trackId` exists
      - Server answer with `status code` **400** and corresponding message if `trackId` is invalid (not `uuid`)
      - Server answer with `status code` **422** and corresponding message if track with `id === trackId` doesn't exist
    * `DELETE /favs/track/:id` - delete track from favorites
      - Server answer with `status code` **204** if the track was in favorites and now it's deleted id is found and deleted
      - Server answer with `status code` **400** and corresponding message if `trackId` is invalid (not `uuid`)
      - Server answer with `status code` **404** and corresponding message if corresponding track is not favorite
    * `POST /favs/album/:id` - add album to the favorites
      - Server answer with `status code` **201** and corresponding message if album with `id === albumId` exists
      - Server answer with `status code` **400** and corresponding message if `albumId` is invalid (not `uuid`)
      - Server answer with `status code` **422** and corresponding message if album with `id === albumId` doesn't exist
    * `DELETE /favs/album/:id` - delete album from favorites
      - Server answer with `status code` **204** if the album was in favorites and now it's deleted id is found and deleted
      - Server answer with `status code` **400** and corresponding message if `albumId` is invalid (not `uuid`)
      - Server answer with `status code` **404** and corresponding message if corresponding album is not favorite
    * `POST /favs/artist/:id` - add artist to the favorites
      - Server answer with `status code` **201** and corresponding message if artist with `id === artistId` exists
      - Server answer with `status code` **400** and corresponding message if `artistId` is invalid (not `uuid`)
      - Server answer with `status code` **422** and corresponding message if artist with `id === artistId` doesn't exist
    * `DELETE /favs/artist/:id` - delete artist from favorites
      - Server answer with `status code` **204** if the artist was in favorites and now it's deleted id is found and deleted
      - Server answer with `status code` **400** and corresponding message if `artistId` is invalid (not `uuid`)
      - Server answer with `status code` **404** and corresponding message if corresponding artist is not favorite
