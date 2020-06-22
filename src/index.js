import Vue from 'vue';
import VueRouter from 'vue-router';
import VModal from 'vue-js-modal';
import Clipboard from 'v-clipboard';
import Vuelidate from "vuelidate";
import VueScrollTo from "vue-scrollto";
import { v4 as uuidv4 } from 'uuid';

import { firestorePlugin } from 'vuefire'

import App from './App.vue';
import LandingPage from './components/LandingPage.vue';
import ListPage from './components/ListPage.vue'
import WishPage from "./components/wishPage.vue";
import './index.html';

Vue.use(VueRouter);
Vue.use(VModal);
Vue.use(Clipboard);
Vue.use(firestorePlugin)
Vue.use(Vuelidate);
Vue.use(VueScrollTo);

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
  mounted() {
    if (!localStorage.userID) {
      localStorage.userID = uuidv4();
    }
  },
});