import { API, graphqlOperation } from "aws-amplify";
import { listAlbums } from "src/graphql/queries";
import { createAlbum, deleteAlbum } from "src/graphql/mutations";

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
    async createAlbum(context, name) {
      if (!name) return;
      await API.graphql(graphqlOperation(createAlbum, {input:{name: name}}));
      context.dispatch('loadAlbums');
    },
    async deleteAlbum(context, id) {
      await API.graphql(graphqlOperation(deleteAlbum, {input:{id: id}}));
      context.dispatch('loadAlbums');
    },
    async loadPhotos(context, album_id) {
    }
  },
  getters: {},
};
