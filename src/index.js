import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import WishForm from "./components/WishForm.vue";
import WishList from "./components/ExistingList.vue";
import './index.html';

Vue.use(VueRouter);

const myRouter = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/nove_prani', component: WishForm },
    { path: '/seznam_prani', component: WishList },
  ],
});

new Vue({
  el: '#app',
  router: myRouter,
  render: h => h(App),
});