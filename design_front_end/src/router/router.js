import Vue from 'vue'
import Router from 'vue-router'
const login =()=> import("../views/Login/login")
const index =()=> import("../views/HomePage/index")
// const imgbox =()=> import("../components/imgbox")
const Bottom_page =()=> import("../views/HomePage/Bottom_page")
const pomes =()=> import("../views/HomePage/Pome")
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      // redirect:('/index')
      redirect:('/test')
    },
    {
      path:"/test",
      component:pomes
    },
    {
      // 主页
      path:"/index",
      name:"index",
      component:index
    },
    {
      // 登录页面
      path:'/login',
      name:'login',
      component:login
    }
  ],
  mode:"history"
})
