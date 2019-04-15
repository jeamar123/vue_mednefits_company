import Vue from 'vue'
import Router from 'vue-router'

// axios.defaults.baseURL = process.env.BASE_URL;
// axios.defaults.serverUrl = 'http://medicloud.local';
// axios.defaults.user_id = null;

import Auth from './views/Auth.vue'
import Dashboard from './views/Dashboard.vue'
import Employee from './views/Employee.vue'
import Activity from './views/Activity.vue'
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
      meta: { auth: true },
      component: Dashboard,
        children: [
          { name: 'home', path: 'dashboard', component: Dashboard },
          { name: 'Employee', path: 'employee', component: Employee },
          { name: 'Activity', path: 'activity', component: Activity },
          { name: 'Claim', path: 'claim', component: Claim },
          { name: 'Statement', path: 'statement', component: Statement },
          { name: 'Account', path: 'account', component: Account },
          // sub-nav of employee
          { name: 'Overview', path: 'overview', component: Overview },
          { name: 'CreditAllocation', path: 'creditAllocation', component: CreditAllocation },
        ]
    },
    
  ]
})
