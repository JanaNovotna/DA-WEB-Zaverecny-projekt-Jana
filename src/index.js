import Vue from 'vue';
import VueRouter from 'vue-router';
import VModal from 'vue-js-modal'
import App from './App.vue';
import LandingPage from './components/LandingPage.vue';
import ListPage from './components/ListPage.vue'
import WishForm from "./components/WishFormPage.vue";
import WishList from "./components/WishListPage.vue";
import './index.html';

Vue.use(VueRouter);
Vue.use(VModal)

const myRouter = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: "home", component: LandingPage },
    { path: '/seznam_prani', name: "seznam přání", component: ListPage },
    { path: '/nove_prani', name: "nové přání", component: WishForm },
    { path: '/muj_seznam', name: "můj seznam", component: WishList },
  ],
});

new Vue({
  el: '#app',
  router: myRouter,
  render: h => h(App),
});