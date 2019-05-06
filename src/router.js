import Vue from 'vue';
import Router from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import CharacterInfo from '@/views/CharacterInfo.vue';


Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/charInfo',
      name: 'charInfo',
      component: CharacterInfo,
      props: true
    }
  ]
});
