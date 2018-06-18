import Vue from 'vue'
import App from './components/App.vue'
import VueRouter from 'vue-router'
import { firebaseApp } from './firebaseApp'

Vue.use(VueRouter)

import store from './store'

import Dashboard from './components/Dashboard.vue'
import Singin from './components/SingIn.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/dashboard', component: Dashboard },
    { path: '/singin', component: Singin }
  ]
})

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch('SingIn', user)
    router.push('/dashboard')
  } else {
    router.replace('/singin')
  }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
