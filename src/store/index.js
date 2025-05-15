import { createStore } from 'vuex';

const store = createStore({
  state: {
    isDarkTheme: true
  },
  mutations: {
    toggleTheme(state) {
        console.log("toggle theme hitted ", state)
      state.isDarkTheme = !state.isDarkTheme;
    }
  },
  getters: {
    isDarkTheme: (state) => state.isDarkTheme
  }
});

export default store;
