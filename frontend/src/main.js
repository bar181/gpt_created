import { createApp } from 'vue';
import App from './App.vue';

// Import the CSS for Tailwind
import './assets/styles.css'; // Adjust the path as per your project structure

// Import FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCoffee  } from '@fortawesome/free-solid-svg-icons';
library.add(faUserSecret, faCoffee );

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);


app.mount('#app');

