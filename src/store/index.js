import { createStore } from "vuex";

const store = createStore({
  state: {
    isDarkTheme: false,
    showModel: false,
    showSalesPage: false,
    showMainPage: true,
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
    SHOW_MAIN_PAGE(state, payload) {
      state.showMainPage = payload;
    },
  },
  getters: {
    isDarkTheme: (state) => state.isDarkTheme,
    showModel: (state) => state.showModel,
    showSalesPage: (state) => state.showSalesPage,
    showMainPage: (state) => state.showMainPage,
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
      commit("SHOW_MAIN_PAGE", false);
    },
    OPENMAINPAGE({ commit }) {
      commit("SHOW_MAIN_PAGE", true);
      commit("SHOW_SALES_PAGE", false);
    },
  },
});

export default store;
