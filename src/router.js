import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Page from './views/WorkspacePage.vue';
import Workspace from './views/Workspace.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '',
          component: Workspace,
        },
        {
          path: '/page/:deviceId',
          component: Page,
        },
      ],
    },
  ],
});
