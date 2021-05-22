import Vue from 'vue'
import Router from 'vue-router'
const login =()=> import("../views/Login/login")
const index =()=> import("../views/HomePage/index")
const imgbox =()=> import("../components/VueVideo")
const Bottom_page =()=> import("../views/HomePage/Bottom_page")
const pomes =()=> import("../views/HomePage/Pome")
const Meun = ()=> import("../components/NavBar/Menu")
// const search =()=> import("../components/NavBar/Search")
const fotter =()=> import("../components/fotter_v")
const Mini = () => import("../components/MiniFotter")
const scroll =()=> import("../components/Scroll")
const Te =()=> import("../components/Te")
import Learn from "../components/Learn";
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
      component:Te
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
