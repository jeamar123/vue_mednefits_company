import Vue from 'vue'
import Router from 'vue-router'

// axios.defaults.baseURL = process.env.BASE_URL;
// axios.defaults.serverUrl = 'http://medicloud.local';
// axios.defaults.user_id = null;

import Auth from './views/Auth.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    { path: '*', redirect: '/auth'},
    { path: '/auth', name: 'auth', component: Auth },
    // {
    //   path: '/app',
    //   name: 'dashboard',
    //   redirect: '/app/dashboard',
    //   component: Dashboard,
    //   meta: { auth: true },
    //   children: [
    //     { name: 'Intro', path: '/app/dashboard', component: Intro },
    //   ]
    // },
    
  ]
})
