import { createStore } from "vuex";

const store = createStore({
  state: {
    isDarkTheme: true,
    showModel: false,
  },
  mutations: {
    toggleTheme(state) {
      console.log("toggle theme hitted ", state);
      state.isDarkTheme = !state.isDarkTheme;
    },
    SET_MODAL(state, payload) {
      state.showModel = payload;
    },
  },
  getters: {
    isDarkTheme: (state) => state.isDarkTheme,
    showModel: (state) => state.showModel,
  },
  actions: {
    openModal({ commit }) {
      console.log("came here ", commit);
      commit("SET_MODAL", true);
    },
    closeModal({ commit }) {
      console.log("came here ");
      commit("SET_MODAL", false);
    },
  },
});

export default store;
