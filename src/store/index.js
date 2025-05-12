import { createStore } from 'vuex';

const store = createStore({
  state: {
    isLightTheme: true
  },
  mutations: {
    toggleTheme(state) {
        console.log("toggle theme hitted ", state)
      state.isLightTheme = !state.isLightTheme;
    }
  },
  getters: {
    isLightTheme: (state) => state.isLightTheme
  }
});

export default store;
