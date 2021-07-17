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
const user =()=> import("../views/User/UserCenter")
const porschelogin =()=> import("../views/Login/porsche_login")
const Purchase =()=> import("../views/HomePage/purchase")
const compare =()=> import("../components/compare")
import Learn from "../components/Learn";
import subscribe from "../components/subscribe";
import motorcycles from "../components/motorcycles";
import TheSportsCar from "../components/TheSportsCar";
import GT3Cup911 from "../components/GT3Cup911";
import GT3R911 from "../components/GT3R911";
import cayman from "../components/cayman";
import GT2RSClubsport911 from "../components/GT2RSClubsport911";
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
      component:porschelogin
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
      component:porschelogin
    },
    {
      //汽车详情页
      path:'/detail',
      name:"CarDetail",
      component:Te
    },
    {
      path:'/profile',
      component:user
    },
    {
      path:'/purchase',
      component:Purchase
    },
    {
      path:"/compare",
      component:compare
    },
    {
      path:"/subscribe",
      name:"subscribe",
      component:subscribe
    },
    {
      path:"/motorcycles",
      name:"motorcycles",
      component:motorcycles
    },
    {
      path:"/TheSportsCar",
      name:"TheSportsCar",
      component:TheSportsCar
    },
    {
      path:"/911GT3Cup",
      name:"911GT3Cup",
      component:GT3Cup911
    },
    {
      path:"/GT3R911",
      name:"GT3R911",
      component:GT3R911
    },
    {
      path:"/GT2RSClubsport911",
      name:"GT2RSClubsport911",
      component:GT2RSClubsport911
    },
    {
      path:"/cayman",
      name:"cayman",
      component:cayman
    }
  ],
  mode:"history"
})
