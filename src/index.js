import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import LandingPage from './components/LandingPage.vue';
import WishForm from "./components/WishFormPage.vue";
import WishList from "./components/ExistingList.vue";
import './index.html';

Vue.use(VueRouter);

const myRouter = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: LandingPage },
    { path: '/nove_prani', component: WishForm },
    { path: '/seznam_prani', component: WishList },
  ],
});

new Vue({
  el: '#app',
  router: myRouter,
  render: h => h(App),
});