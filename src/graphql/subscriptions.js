/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAlbum = /* GraphQL */ `
  subscription OnCreateAlbum($owner: String) {
    onCreateAlbum(owner: $owner) {
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
export const onUpdateAlbum = /* GraphQL */ `
  subscription OnUpdateAlbum($owner: String) {
    onUpdateAlbum(owner: $owner) {
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
export const onDeleteAlbum = /* GraphQL */ `
  subscription OnDeleteAlbum($owner: String) {
    onDeleteAlbum(owner: $owner) {
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
export const onCreatePhoto = /* GraphQL */ `
  subscription OnCreatePhoto($owner: String) {
    onCreatePhoto(owner: $owner) {
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
export const onUpdatePhoto = /* GraphQL */ `
  subscription OnUpdatePhoto($owner: String) {
    onUpdatePhoto(owner: $owner) {
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
export const onDeletePhoto = /* GraphQL */ `
  subscription OnDeletePhoto($owner: String) {
    onDeletePhoto(owner: $owner) {
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
