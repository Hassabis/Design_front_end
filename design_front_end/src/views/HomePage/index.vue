<template>
  <div style="position: relative">
    <el-container>
      <el-header height="120px">
        <div id="search">
          <Search></Search>
        </div>
        <div id="meun">
          <Menu></Menu>
        </div>
        <img id="logo" :src="require('@/../static/img/login_img/user_logo.svg')" alt="" style="width: 39px;height: 39px" @click="Go_Login">
        <div id="line1"></div>
        <img :src="require('@/../static/img/Car_img/porsche-svg.svg')" id="Porche" alt="">
        <div id="line2"></div>
      </el-header>
      <el-main>
        <el-carousel height="564px">
          <el-carousel-item v-for="item in img_box" :key="item">
            <h3 class="small"><img :src="item.imageurl" alt=""></h3>
          </el-carousel-item>
        </el-carousel>
      </el-main>
      <div id="nav_01">
        <navleft :Cheight="height"></navleft>
      </div>
      <span
          style="position: absolute;
        top: 720px;
        font-size: 32px;
        font-weight: 900;
        left: 22px;
        display: none"
          id="server">
      我们的服务
    </span>
      <div id="buttom">
        <Bottom_page></Bottom_page>
      </div>
      <div id="our">
        <MiniFotter></MiniFotter>
      </div>
    </el-container>
  </div>

</template>

<script>
import navleft from "@/components/NavBar/Left_nav"
import Bottom_page from "./Bottom_page";
import Menu from "../../components/NavBar/Menu";
import Search from "../../components/NavBar/Search";
import fotter_v from "../../components/fotter_v";
import MiniFotter from "../../components/MiniFotter";
import $ from "jquery"
import axios from "axios";
export default {
  name: "index",
  data(){
    return{
      img_box:"",
      height:'94px',
      width:"1400px"
    }
  },
  mounted() {
    // axios.get(this.API.API_GET_INDEX_IMAGE).then(res => {
    axios.get(this.API.API_GET_INDEX_IMAGE,{"timeout":2000}).then(res => {
      this.img_box = res.data
      console.log(res.data)
    }).catch(err => {
      this.$notify({
        type:"warning",
        title:"检测到服务器端的错误",
        message:"请核实后继续操作",
        duration:6000,
        position:"top-left"
      })
    })


  },
  components:{
    navleft,
    Bottom_page,
    Menu,
    Search,
    fotter_v,
    MiniFotter,
  },
  methods:{
    Go_Login(){
      location.href = '/profile'
    },
  }
}
</script>

<style scoped>
@import url("//unpkg.com/element-ui@2.15.1/lib/theme-chalk/index.css");
@import "../../../static/css/base.css";
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
#Porche{
  width: 123px;
  height: 75px;
  position: relative;
  left: 50%;
  margin-left: -61.5px;
}
#nav_01{
  z-index: 200;
  position: absolute;
  left: 4.4%;
  top: 125px
}
#logo{
  position: relative;
  top: 78px;
  right: 20px;
  float: right;
}
#logo:hover{
  cursor: pointer;
}
#buttom{
  margin: 40px auto;
  margin-left: 30px;
}
#meun{
  position: absolute;
  right: 90px;
  top: 70px;
}
#line1{
  background-color: #e3e4e4;
  width: 650px;
  height: 1px;
  position: absolute;
  top: 60px;
  left: 30px;
}
#line2{
  background-color: #e3e4e4;
  width: 650px;
  height: 1px;
  position: absolute;
  top: 60px;
  right: 30px;
}
#search{
  position: absolute;
  left: 115px;
  top: 90px;
  width: 400px;
}
#our{
  margin: 10px auto;
  margin-top: 460px;
  /*margin-top: -130px;*/
  bottom: 10px;
}
</style>