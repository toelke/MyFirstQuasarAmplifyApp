/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listAlbums = /* GraphQL */ `
  query ListAlbums(
    $filter: ModelAlbumFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAlbums(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        owner
        photos {
          items {
            id
            name
            contentType
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getAlbum = /* GraphQL */ `
  query GetAlbum($id: ID!) {
    getAlbum(id: $id) {
      id
      name
      createdAt
      updatedAt
      owner
      photos {
        items {
          id
          name
          fullsize {
            region
            bucket
            key
          }
          contentType
          createdAt
          updatedAt
          album {
            id
            name
            createdAt
            updatedAt
            owner
          }
          owner
        }
        nextToken
      }
    }
  }
`;
export const getPhoto = /* GraphQL */ `
  query GetPhoto($id: ID!) {
    getPhoto(id: $id) {
      id
      name
      fullsize {
        region
        bucket
        key
      }
      contentType
      createdAt
      updatedAt
      album {
        id
        name
        createdAt
        updatedAt
        owner
        photos {
          items {
            id
            name
            contentType
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      owner
    }
  }
`;
export const listPhotos = /* GraphQL */ `
  query ListPhotos(
    $filter: ModelPhotoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPhotos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        fullsize {
          region
          bucket
          key
        }
        contentType
        createdAt
        updatedAt
        album {
          id
          name
          createdAt
          updatedAt
          owner
          photos {
            nextToken
          }
        }
        owner
      }
      nextToken
    }
  }
`;
