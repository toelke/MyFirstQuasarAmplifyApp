import { API, graphqlOperation } from "aws-amplify";
import { listAlbums, getAlbum } from "src/graphql/queries";
import { createAlbum, deleteAlbum, deletePhoto } from "src/graphql/mutations";

export default {
  namespaced: true,
  state: () => ({
    albums: {},
  }),
  mutations: {
    setAlbums: (state, a) => {
      state.albums = a.reduce((map, obj) => (map[obj.id] = obj, map), {});
    },
  },
  actions: {
    async loadAlbums(context) {
      const albums = await API.graphql(graphqlOperation(listAlbums));
      context.commit("setAlbums", albums.data.listAlbums.items);
    },
    async getAlbum(_, id) {
      return await API.graphql(graphqlOperation(getAlbum, { id: id })).then(
        r => r.data.getAlbum
      );
    },
    async createAlbum(context, name) {
      if (!name) return;
      await API.graphql(graphqlOperation(createAlbum, {input:{name: name}}));
      context.dispatch('loadAlbums');
    },
    async deleteAlbum(context, id) {
      await API.graphql(graphqlOperation(deleteAlbum, {input:{id: id}}));
      context.dispatch('loadAlbums');
    },
    async deletePhoto(context, id) {
      await API.graphql(graphqlOperation(deletePhoto, { input: { id: id } }));
    },
    async loadPhotos(context, album_id) {
    }
  },
  getters: {},
};
