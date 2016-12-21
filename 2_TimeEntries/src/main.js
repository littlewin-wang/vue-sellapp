// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App'
import Home from './components/home'
import 'bootstrap/dist/css/bootstrap.css'

import store from './store'
import TimeEntries from './components/timeentries.vue'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/time-entries',
    component: TimeEntries,
    children: [{
      path: 'log-time',
      component: resolve => require(['./components/logtime.vue'], resolve)
    }]
  }
]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  ...App
})
