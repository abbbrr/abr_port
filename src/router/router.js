import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import ProjectPage from '../views/ProjectPage.vue';
import NotFound from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/project-details/:id(\\d+)',
      name: 'project-page',
      component: ProjectPage,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound,
    },
  ],
});

export default router
