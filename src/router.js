import Vue from 'vue'
import Router from 'vue-router'

// axios.defaults.baseURL = process.env.BASE_URL;
// axios.defaults.serverUrl = 'http://medicloud.local';
// axios.defaults.user_id = null;

import Auth from './views/Auth.vue'
import Dashboard from './views/Dashboard.vue'
import Employee from './views/Employee.vue'
import Claim from './views/Claim.vue'
import Statement from './views/Statement.vue'
import Account from './views/Account.vue'
import Overview from './views/Overview.vue'
import CreditAllocation from './views/CreditAllocation.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    { path: '*', redirect: '/auth'},
    { path: '/auth', name: 'auth', component: Auth },
    {
      path: '/app',
      name: 'dashboard',
      redirect: '/app/dashboard',
      component: Dashboard,
      meta: { auth: true },
      children: [
        { name: 'Intro', path: '/app/dashboard', component: Intro },
        { name: 'Employee', path: '/app/employee', component: Employee },
        { name: 'Activity', path: '/app/activity', component: Activity },
        { name: 'Claim', path: '/app/claim', component: Claim },
        { name: 'Statement', path: '/app/statement', component: Statement },
        { name: 'Account', path: '/app/account', component: Account },
        // sub-nav of employee
        { name: 'Overview', path: '/app/overview', component: Overview },
        { name: 'CreditAllocation', path: '/app/creditAllocation', component: CreditAllocation },
      ]
    },
    
  ]
})
