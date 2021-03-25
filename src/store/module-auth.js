export default {
  namespaced: true,
  state: () => ({
    loggedIn: false,
    user: "",
    authState: '',
  }),
  mutations: {
    loggedIn: (state, lI) => {
      state.loggedIn = lI;
    },
    user: (state, u) => {
      state.user = u;
    },
    authState: (state, aS) => {
      state.authState = aS;
    }
  },
  actions: {},
  getters: {},
};
