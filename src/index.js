import Vue from 'vue';
import VueRouter from 'vue-router';
import VModal from 'vue-js-modal';
import Clipboard from 'v-clipboard';

import { firestorePlugin } from 'vuefire'

import App from './App.vue';
import LandingPage from './components/LandingPage.vue';
import ListPage from './components/ListPage.vue'
import WishPage from "./components/WishPage.vue";
import './index.html';

Vue.use(VueRouter);
Vue.use(VModal);
Vue.use(Clipboard);
Vue.use(firestorePlugin)

const myRouter = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: "home", component: LandingPage },
    { path: '/muj_seznam/:id', name: "mujSeznam", component: WishPage }, // owner
    { path: '/seznam_prani/:id', name: "seznamPrani", component: ListPage }, // donor 
  ],
});

new Vue({
  el: '#app',
  router: myRouter,
  render: h => h(App),

});