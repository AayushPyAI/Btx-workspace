import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import store from './store';
import router from './routes'
import { OhVueIcon,addIcons } from 'oh-vue-icons';
import { CoPlus,CoPencil,LaAngleDownSolid} from 'oh-vue-icons/icons'; // Import the icon



const app = createApp(App); // Create the app instance
app.use(store);             // Apply the store to the app
app.use(router)
app.mount('#app'); 

app.component('v-icon', OhVueIcon);// Mount the app

addIcons(CoPlus,CoPencil,LaAngleDownSolid); // Add the icon to the library
