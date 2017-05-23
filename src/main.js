// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */

import Vue from 'vue';
import VueResource from 'vue-resource';
import VueI18n from 'vue-i18n';
import App from './App';
import router from './router';


Vue.config.productionTip = false;
Vue.config.apiUrl = process.env.EVENTS_API;

Vue.use(VueResource);
Vue.use(VueI18n);

const messages =
{
    en: {
      select: 'dynamic message',
    }
  ,
};

const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
});

const app = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App},
  i18n
});




