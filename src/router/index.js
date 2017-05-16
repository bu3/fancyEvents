import Vue from 'vue';
import Router from 'vue-router';
import EventsShowcase from '@/components/events/EventsShowcase';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'EventsShowcase',
      component: EventsShowcase,
    },
  ],
});
