import Vue from 'vue'
import App from './components/App.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Dashboard from './components/Dashboard.vue'
import Singin from './components/SingIn.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/dashboard', component: Dashboard },
    { path: '/singin', component: Singin }
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
