import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Workspace from '@/views/Workspace.vue';
import Hello from '@/views/Hello.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'home',
      component: Home,
      children: [
        {
          path: '',
          name: 'hello',
          component: Hello,
        },
        {
          path: '/device/:deviceId',
          name: 'workspace',
          component: Workspace,
        },
      ],
    },
  ],
});
