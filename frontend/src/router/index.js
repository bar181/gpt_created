// frontend/src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AboutPage from '../views/AboutPage.vue';
// ... import other pages ...

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  // ... define other routes ...
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
