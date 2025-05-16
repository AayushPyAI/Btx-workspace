import { createStore } from "vuex";

const store = createStore({
  state: {
    isDarkTheme: false,
    showModel: false,
    showSalesPage: false,
  },
  mutations: {
    toggleTheme(state) {
      state.isDarkTheme = !state.isDarkTheme;
    },
    SET_MODAL(state, payload) {
      state.showModel = payload;
    },
    SHOW_SALES_PAGE(state, payload) {
      state.showSalesPage = payload;
    },
  },
  getters: {
    isDarkTheme: (state) => state.isDarkTheme,
    showModel: (state) => state.showModel,
    showSalesPage: (state) => state.showSalesPage,
  },
  actions: {
    openModal({ commit }) {
      commit("SET_MODAL", true);
    },
    closeModal({ commit }) {
      commit("SET_MODAL", false);
    },
    OPENSALESPAGE({ commit }) {
      commit("SHOW_SALES_PAGE", true);
    },
  },
});

export default store;
