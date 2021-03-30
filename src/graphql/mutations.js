/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAlbum = /* GraphQL */ `
  mutation CreateAlbum(
    $input: CreateAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    createAlbum(input: $input, condition: $condition) {
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
export const deleteAlbum = /* GraphQL */ `
  mutation DeleteAlbum(
    $input: DeleteAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    deleteAlbum(input: $input, condition: $condition) {
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
export const createPhoto = /* GraphQL */ `
  mutation CreatePhoto(
    $input: CreatePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    createPhoto(input: $input, condition: $condition) {
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
export const deletePhoto = /* GraphQL */ `
  mutation DeletePhoto(
    $input: DeletePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    deletePhoto(input: $input, condition: $condition) {
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
export const updateAlbum = /* GraphQL */ `
  mutation UpdateAlbum(
    $input: UpdateAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    updateAlbum(input: $input, condition: $condition) {
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
export const updatePhoto = /* GraphQL */ `
  mutation UpdatePhoto(
    $input: UpdatePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    updatePhoto(input: $input, condition: $condition) {
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
