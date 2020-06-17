import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import LandingPage from './components/LandingPage.vue';
import ListPage from './components/ListPage.vue'
import WishForm from "./components/WishFormPage.vue";
import WishList from "./components/ExistingList.vue";
import './index.html';

Vue.use(VueRouter);

const myRouter = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: LandingPage },
    { path: '/seznam_prani', component: ListPage },
    { path: '/nove_prani', component: WishForm },
    { path: '/muj_seznam', component: WishList },
  ],
});

new Vue({
  el: '#app',
  router: myRouter,
  render: h => h(App),
});