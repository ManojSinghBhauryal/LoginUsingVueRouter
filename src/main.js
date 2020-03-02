import Vue from 'vue'
import App from './App.vue'
import dash from './components/dash';
import login from './components/login';
import card1 from '@/components/card1';
import card2 from '@/components/card2';
import card3 from '@/components/card3';
import card4 from '@/components/card4';
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
     {
      path:'card2',
      component:card2
     },
     {
      path:'card3',
      component:card3
     },
     {
      path:'card4',
      component:card4
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
  routes
  //  mode:'history'
})

new Vue({
  el:'#app',
  router,
  render: h => h(App),
});
