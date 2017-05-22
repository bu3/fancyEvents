import Vue from 'vue';
import Router from 'vue-router';
import EventsShowcase from '@/components/events/EventsShowcase';
import Hello from '@/components/Hello';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'EventsShowcase',
      component: EventsShowcase,
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello,
    },
  ],
});
