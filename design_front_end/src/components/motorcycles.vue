<template>
  <div id="root">

    <el-backtop :bottom="100" :visibility-height="1400">
      <div id="up">
        <i class="el-icon-caret-top"></i>
      </div>
    </el-backtop>
    <div id="logo">
      <logo></logo>
    </div>
    <el-carousel height="570px" direction="vertical" :autoplay="true">
      <el-carousel-item v-for="(item,index) in nav" :key="index">
        <h3 class="medium"><img :src="item.imageurl" alt=""></h3>
        <div class="contentbox">
        <h2 class="title">{{item.title}}</h2>
        <span class="tips">{{item.tips}}</span>
        </div>
      </el-carousel-item>
    </el-carousel>
    <div class="m-72-cn-menu-button" @click="goindex"></div>
    <span style="display: block;padding-left: 56px;height: 60px;line-height:60px;width: 80vw;font-size:32px;font-weight:700;background-color: rgb(239, 240, 241)">
      保时捷赛车运动
    </span>
    <el-row :gutter="20">
      <el-col :span="6"><div class="grid-content bg-purple">
        <img src="http://127.0.0.1:8000/static/competition/choose1.png" alt="">
      </div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">
        <img src="http://127.0.0.1:8000/static/competition/choose2.png" alt="">
      </div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">
        <img src="http://127.0.0.1:8000/static/competition/choose3.png" alt="">
      </div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">
        <img src="http://127.0.0.1:8000/static/competition/choose4.png" alt="">
      </div></el-col>
    </el-row>
    <div style="display: flex">
      <div class="choose">
        从杯赛用车到模拟器
        <div class="buttonC" @click="goindex"><i class="el-icon-arrow-right"></i>了解更多</div>
      </div>
      <div class="choose">
        <div class="choose">
          勒芒24分钟
          <div class="buttonC" @click="goindex"><i class="el-icon-arrow-right"></i>了解更多</div>
        </div>
      </div>
      <div class="choose">
        <div class="choose">
          保时捷的2019赛车年
          <div class="buttonC" @click="goindex"><i class="el-icon-arrow-right"></i>了解更多</div>
        </div>
      </div>
      <div class="choose">
        <div class="choose">
          赛事新闻
          <div class="buttonC"><i class="el-icon-arrow-right"></i>了解更多</div>
        </div>
      </div>
    </div>
    <span style="display: block;padding-left: 56px;height: 60px;line-height:60px;width: 100vw;font-size:32px;font-weight:700;background-color: rgb(239, 240, 241);margin-top: 30px">
      赛车
    </span>
    <div>
      <ul class="comcar">
        <li>
          <img src="http://127.0.0.1:8000/static/competition/911RSR.png" alt="">
          <div class="contentbox2" @click="RSR911">
            <i class="el-icon-arrow-right"></i>
            <span class="carname">911 RSR</span>
          </div>
        </li>
        <li>
          <img src="http://127.0.0.1:8000/static/competition/911RSR2017.png" alt="">
          <div class="contentbox2" @click="GT3Cup911">
            <i class="el-icon-arrow-right"></i>
            <span class="carname">911GT3 Cup</span>
          </div>
        </li>
        <li>
          <img src="http://127.0.0.1:8000/static/competition/911GT3R.png" alt="">
          <div class="contentbox2" @click="GT3R911">
            <i class="el-icon-arrow-right"></i>
            <span class="carname">911GT3 R </span>
          </div>
        </li>
        <li>
          <img src="http://127.0.0.1:8000/static/competition/911GT3CUP.png" alt="">
          <div class="contentbox2">
            <i class="el-icon-arrow-right"></i>
            <span class="carname">911GT3 Cup</span>
          </div>
        </li>
        <li>
          <img src="http://127.0.0.1:8000/static/competition/911 GT2 RS Clubsport.png" alt="">
          <div class="contentbox2" @click="GT2RSClubsport911">
            <i class="el-icon-arrow-right"></i>
            <span class="carname">911 GT2 RS Clubsport</span>
          </div>
        </li>
        <li>
          <img src="http://127.0.0.1:8000/static/competition/718 GT4 Clubsport.png" alt="">
          <div class="contentbox2" @click="CaymanGT4Clubsport718">
            <i class="el-icon-arrow-right"></i>
            <span class="carname">718 Cayman GT4 Clubsport</span>
          </div>
        </li>
      </ul>
    </div>
    <span style="display: block;padding-left: 56px;height: 60px;line-height:60px;width: 100vw;font-size:32px;font-weight:700;background-color: rgb(239, 240, 241);margin-top: 30px">
      赛车运动
    </span>
    <div>
      <ul class="comcar">
        <li>
          <img src="http://127.0.0.1:8000/static/competition/电动方程式锦标赛Formula E.png" alt="">
          <div class="contentbox2">
            <i class="el-icon-arrow-right"></i>
            <span class="carname">电动方程式锦标赛（Formula） E</span>
          </div>
        </li>
        <li>
          <img src="http://127.0.0.1:8000/static/competition/车队赛事.png" alt="">
          <div class="contentbox2">
            <i class="el-icon-arrow-right"></i>
            <span class="carname">车队赛事</span>
          </div>
        </li>
        <li>
          <img src="http://127.0.0.1:8000/static/competition/客户赛事.png" alt="">
          <div class="contentbox2">
            <i class="el-icon-arrow-right"></i>
            <span class="carname">客户赛事</span>
          </div>
        </li>
      </ul>
    </div>
    <span style="display: block;padding-left: 56px;height: 60px;line-height:60px;width: 100vw;font-size:32px;font-weight:700;background-color: rgb(239, 240, 241);margin-top: 30px">
      更多赛车运动
    </span>
    <div>
      <ul class="comcar comcar2">
        <li>
          <img src="http://127.0.0.1:8000/static/competition/使命报告.png" alt="">
          <div class="contentbox2 contentbox3" >
            <i class="el-icon-arrow-right el-icon-arrow-right2"></i>
            <span class="carname carname3">使命报告</span>
            <span class="carname4">使命：未来跑车有关保时捷未来赛车使命的所有故事</span>
          </div>
        </li>
        <li>
          <img src="http://127.0.0.1:8000/static/competition/概述信息.png" alt="">
          <div class="contentbox2 contentbox3">
            <i class="el-icon-arrow-right el-icon-arrow-right2"></i>
            <span class="carname carname3">概述信息&贸易信息</span>
            <span class="carname4">保时捷赛车运动一览</span>
          </div>
        </li>
        <li>
          <img src="http://127.0.0.1:8000/static/competition/赛况速报.png" alt="">
          <div class="contentbox2 contentbox3">
            <i class="el-icon-arrow-right el-icon-arrow-right2"></i>
            <span class="carname carname3">赛况速报</span>
            <span class="carname4">不容错过：您可以选择通过电子邮件接收提醒，及时掌握最新且有趣的速报动态，直接了解所有实时新闻。</span>
          </div>
        </li>
      </ul>
    </div>
    <fotter_v></fotter_v>
  </div>
</template>

<script>
import logo from "./NavBar/logo";
import axios from "axios";
import fotter_v from "./fotter_v";
export default {
  mounted() {
    axios.get(this.API.API_COMPETITIONMESSAGE).then(res => {
      this.nav = res.data
    }).catch(err => {
      this.$notify({
        title:"服务器端的错误",
        message:"请检查您的服务器状况" + err,
        type:"warning",
        duration:6000
      })
    })
  },
  name: "motorcycles",
  components:{
    logo,
    fotter_v
  },
  data(){
    return{
      nav:""
    }
  },
  methods:{
    goindex(){
      location.href = "/index"
    },
    RSR911(){
      location.href = "/TheSportsCar"
    },
    GT3Cup911(){
      location.href = "/911GT3Cup"
    },
    GT3R911(){
      location.href = "/GT3R911"
    },
    GT2RSClubsport911(){
      location.href = "/GT2RSClubsport911"
    },
    CaymanGT4Clubsport718(){
      location.href = "/cayman"
    }
  }
}
</script>

<style scoped>
img{
  width: 100%;
  height: 100%;
}
@media only screen and (min-width: 768px) and (max-width: 991px){}
.m-72-cn-menu-button:before {
  line-height: 60px;
}
.m-72-cn-menu-button:before {
  font-size: 2.6em;
  line-height: 50px;
}
.m-72-cn-menu-button::before {
  content: "";
}
.m-72-cn-menu-button:hover::before{
  cursor: pointer;
  color: firebrick;
}
.m-72-cn-menu-button{
  position: absolute;
  top: 10px;
  left: 10px;
}
#logo{
  width: 100vw;
  height: 100px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
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
.contentbox{
  bottom: 0;
  position: absolute;
  width: 100vw;
  height: 140px;
  /*background-color: salmon;*/
  margin-left: 50px;
}
.title{
  font-size: 32px;
  margin-left: 10px;
}
.title:hover{
  cursor: pointer;
  color: firebrick;
}
.tips{
  font-family: "Microsoft YaHei UI Light";
  font-size: 20px;
  height: 30px;
  width: 100%;
  line-height: 30px;
  margin-left: 10px;
  display: block;
  margin-top: -10px;
}
.tips:hover{
  cursor: pointer;
}
.el-row {
  margin-bottom: 20px;
&:last-child {
   margin-bottom: 0;
 }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  margin-top: 20px;
  height: 310px;
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.choose{
  font-size: 20px;
  padding-left: 10px;
  margin-left: 10px;
  flex: 1;
  height: 100px;
  /*background-color: salmon;*/
}
.buttonC{
  margin-top: 10px;
  margin-left: -10px;
  color: white;
  font-size: 14px;
  text-align: center;
  width: 120px;
  height: 46px;
  line-height: 46px;
  background-color: rgb(49, 54, 57);
}
.buttonC:hover{
  cursor: pointer;
  background-color: firebrick;
}
.comcar{
  position: relative;
  /*background-color: greenyellow;*/
  flex-flow: wrap;
  margin: 10px auto;
  width: 1300px;
  display: flex;
}
.comcar li{
  margin-left: 10px;
  list-style: none;
  /*flex: 1;*/
  /*flex-wrap: wrap;*/
  flex-grow: 0;
  width: 400px;
  height: 280px;
  margin-top: 10px;
  background-color: salmon;
}
.contentbox2{
  font-size: 28px;
  position: relative;
  top: -40px;
  width: 30px;
  /*background-color: salmon;*/
}
.el-icon-arrow-right{
  z-index: 99999;
  color: firebrick;
}
.carname{
  font-size: 18px;
  position: relative;
  top: -40px;
  display: inline-block;
  /*background-color: salmon;*/
  width: 300px;
  left: 30px;
}
.carname:hover{
  cursor: pointer;
  color: firebrick;
}
.comcar2 li{
  height: 420px;
}
.carname3{
  position: relative;
  top: -120px;
  width: 500px;
}
.el-icon-arrow-right2{
  position: relative;
  top: -80px;
}
.carname4{
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 300px;
  top: -120px;
  left: 20px;
}
#up{
  background-color: firebrick;
  height: 100%;
  width: 100%;
  /*background-color: #f2f5f6;*/
  box-shadow: 0 0 6px rgba(0,0,0, .12);
  text-align: center;
  line-height: 40px;
  /*color: #1989fa;*/
  color: white;
}
</style>