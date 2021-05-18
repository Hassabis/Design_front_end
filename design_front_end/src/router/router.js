import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
const login =()=> import("../views/Login/login")
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
  ],
  mode:"history"
})
