import Vue from 'vue'
import Router from 'vue-router'
const login =()=> import("../views/Login/login")
const index =()=> import("../views/HomePage/index")
// const imgbox =()=> import("../components/imgbox")
const Bottom_page =()=> import("../views/HomePage/Bottom_page")
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      // redirect:('/index')
      redirect:('/index')
    },
    {
      path:"/test",
      component:Bottom_page
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
