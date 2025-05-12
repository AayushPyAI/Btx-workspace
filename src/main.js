import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import store from './store';

const app = createApp(App); // Create the app instance
app.use(store);             // Apply the store to the app
app.mount('#app');          // Mount the app
