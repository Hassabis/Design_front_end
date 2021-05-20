<template>
  <div style="position: relative">
    <el-container>
      <el-header height="60px">
        <img id="logo" :src="require('@/../static/img/login_img/user_logo.svg')" alt="" style="width: 39px;height: 39px" @click="Go_Login">
        <img :src="require('@/../static/img/Car_img/porsche-svg.svg')" id="Porche" alt="">
      </el-header>
      <el-main>
        <el-carousel height="564px">
          <el-carousel-item v-for="item in img_box" :key="item">
            <h3 class="small"><img :src="item" alt=""></h3>
          </el-carousel-item>
        </el-carousel>
        <!--        <div style="position: absolute">-->
        <!--        </div>-->
      </el-main>
      <div id="nav_01">
        <navleft :Cheight="height"></navleft>
      </div>
      <span
          style="position: fixed;
        top: 670px;
        font-size: 32px;
        font-weight: 900;
        left: 22px;
        display: none"
          id="server">
      我们的服务
    </span>
    </el-container>
  </div>

</template>

<script>
import navleft from "@/components/NavBar/Left_nav"
import imgbox from "../../components/imgbox";
import $ from "jquery"
export default {
  name: "index",
  data(){
    return{
      img_box:[
          require("@/../static/img/Car_img/porsche-normal.webp"),
          require("@/../static/img/Car_img/porsche-normal_02.webp"),
          require("@/../static/img/Car_img/porsche-normal_03.webp"),
          require("@/../static/img/Car_img/porsche-normal_04.webp")
      ],
      height:'94px'
    }
  },
  components:{
    navleft,
    imgbox
  },
  methods:{
    Go_Login(){
      this.$router.replace('/login')
    }
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
  top: 9.5%;
}
#logo{
  position: relative;
  top: 18px;
  float: right;
}
</style>