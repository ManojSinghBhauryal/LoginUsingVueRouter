import Vue from 'vue'
import App from './App.vue'
import dash from './components/dash';
import login from './components/login';
import card1 from '@/components/card1';
import VueRouter from 'vue-router';
Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  { 
    path: '/',
    beforeEnter: (to, from, next) => {
      console.log(localStorage.getItem('isAuthenticated'))
      if (localStorage.getItem('isAuthenticated') === 'true') {
        next('/dash');
      } else {
        next('/login');
      }
    }
  },
  {
    path:'/dash', 
    component: dash,
    children:[
      {
      path:'card1',
      component:card1
     },

],
    beforeEnter: (to, from, next) => {
      console.log(localStorage.getItem('isAuthenticated'))
      if (localStorage.getItem('isAuthenticated') === 'true') {
        next();
      } else {
        next(false);
      }
    }

  },
  {
    path:'/login', 
    component: login,
    beforeEnter: (to, from, next) => {
      console.log(localStorage.getItem('isAuthenticated'))
      if (localStorage.getItem('isAuthenticated') === 'true') {
        next('/dash');
      } else {
        next();
      }
    }
  }
]

const router = new VueRouter({
  routes,
   mode:'history'
})

new Vue({
  el:'#app',
  router,
  render: h => h(App),
});
