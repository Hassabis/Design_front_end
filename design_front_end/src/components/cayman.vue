<template>
  <div id="root">
    <el-backtop :bottom="100" :visibility-height="1400">
      <div id="up">
        <i class="el-icon-caret-top"></i>
      </div>
    </el-backtop>
    <header>
      <div id="line1"></div>
      <img :src="require('@/../static/img/Car_img/porsche-svg.svg')" id="Porche" alt="">
      <div id="line2"></div>
    </header>
    <div id="image">
      <img :src="url" alt="">
    </div>
    <span class="title">乐此不疲</span>
    <span class="tips">新款718 Cayman GT4 Clubsport</span>
    <span style="display: block;padding-left: 56px;height: 80px;line-height:60px;width: 100vw;font-size:32px;font-weight:700;background-color: rgb(239, 240, 241)">
        <span class="m-72-cn-menu-button" @click="goindex"></span>
    </span>
    <span style="display: block;padding-left: 56px;height: 80px;line-height:60px;width: 100vw;font-size:32px;font-weight:700;background-color: rgb(239, 240, 241)">
        <p id="p">
          一台中置发动机赛车<br>保时捷718 Cayman GT4 Clubsport
        </p>
    </span>
    <div id="show">
      <div id="c1">
        <img src="http://127.0.0.1:8000/static/competition/718CaymanGT4Clubsport/718Show1.png" alt="">
      </div>
      <div id="c2">
        <img src="http://127.0.0.1:8000/static/competition/718CaymanGT4Clubsport/718Show2.png" alt="">
      </div>
      <div id="c3">
        <img src="http://127.0.0.1:8000/static/competition/718CaymanGT4Clubsport/718Show3.png" alt="">
      </div>
      <span id="abs">概念</span>
      <p id="c911">
        GT4 Clubsport 代表了纯粹的赛车运动。它的配方众所周知：轻质的车身、平衡的性能。无论是轻松愉快的赛道活动，还是针锋相对的赛场竞技，它都如鱼得水。但是请当心：你驾驶它的时间越久，就越不想停下来。新款718
      </p>
    </div>
    <div id="video">
      <div id="v1">
        <vueMiniPlayer
            ref="vueMiniPlayer"
            :video="video"
            :mutex="true"
            @fullscreen="handleFullscreen"
        />
      </div>
      <div id="v2">
        <ul>
          <li style="margin-left: -20px;font-size: 32px">“它要求你全神贯注”</li>
          <li>- CJ Wilson</li>
          <li>美国职业棒球大联盟全明星球员/赛车手</li>
        </ul>
      </div>
    </div>
    <div id="TeData">
      <div id="t1">
      <span style="display: block;padding-left: 56px;height: 60px;line-height:60px;width: 20vw;font-size:32px;font-weight:700;background-color: rgb(239, 240, 241);position: absolute;">
      技术数据
    </span>
        <img id="modelRSR" src="http://127.0.0.1:8000/static/competition/718CaymanGT4Clubsport/porsche-model.webp" alt="">
        <div style="width: 540px;margin-top: -55px;margin-left: 120px"><el-divider></el-divider></div>
        <span style="position: relative;left: 50%;transform: translateX(-50%);width: 300px;margin-left: -150px ">长度:4,456mm（不含导流片、尾翼、扩散板）</span>
      </div>
      <div id="t2">
        <ul>
          <li></li>
          <li><span class="left">发动机</span><span class="right">中置铝合金六缸水平对置发动机</span></li>
          <li><span class="left">排量</span><span class="right">3.800cc</span></li>
          <li><span class="left">功率</span><span class="right">313kW (425PS)</span></li>
          <li><span class="left">变速箱</span><span class="right">标配6速保时捷双离合器变速箱(PDK)</span></li>
          <li><span class="left">重量</span><span class="right">1,320kg</span></li>
        </ul>
      </div>
    </div>
    <footer>
    <span style="display: block;padding-left: 56px;height: 60px;line-height:60px;width: 20vw;font-size:32px;font-weight:700;background-color: rgb(239, 240, 241);">
      特征
    </span>
      <div>
        <ul class="comcar comcar2">
          <li>
            <img src="http://127.0.0.1:8000/static/competition/718CaymanGT4Clubsport/发动机.png" alt="">
            <div class="contentbox2 contentbox3" >
              <i class="el-icon-arrow-right el-icon-arrow-right2"></i>
              <span class="carname carname3">发动机</span>
              <span class="carname4"><i class="el-icon-arrow-right"></i>了解更多</span>
            </div>
          </li>
          <li>
            <img src="http://127.0.0.1:8000/static/competition/718CaymanGT4Clubsport/底盘.png" alt="">
            <div class="contentbox2 contentbox3">
              <i class="el-icon-arrow-right el-icon-arrow-right2"></i>
              <span class="carname carname3">底盘</span>
              <span class="carname4"><i class="el-icon-arrow-right"></i>了解更多</span>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <ul class="c911f">
          <li>
            <img src="http://127.0.0.1:8000/static/competition/718CaymanGT4Clubsport/车身壳体.png" alt="">
            <span class="c911t"><i class="el-icon-arrow-right"></i>车身壳体</span>
            <span class="carname5"><i class="el-icon-arrow-right"></i>了解更多</span>
          </li>
          <li>
            <img src="http://127.0.0.1:8000/static/competition/718CaymanGT4Clubsport/安全性.png" alt="">
            <span class="c911t" ><i class="el-icon-arrow-right"></i>安全性</span>
            <span class="carname5"><i class="el-icon-arrow-right"></i>了解更多</span>
          </li>
          <li>
            <img src="http://127.0.0.1:8000/static/competition/718CaymanGT4Clubsport/制动系统.png" alt="">
            <span class="c911t"><i class="el-icon-arrow-right"></i>制动系统</span>
            <span class="carname5"><i class="el-icon-arrow-right"></i>了解更多</span>
          </li>
        </ul>
      </div>
      <div id="book">
        <h2 id="booktitle">车书。</h2>
        <p class="book">有人说，只有从调教到完赛都能亲力亲为的车手，才能在比赛中取得好成绩，而CJ Wilson却有不同的见解。看看他是怎么说的。</p>
        <div id="right">
          <a href="http://127.0.0.1:8000/static/competition/718CaymanGT4Clubsport/The Magalog.pdf" id="btn">
            阅读
          </a>
        </div>
      </div>
      <div id="detail">
        <span style="display: block;padding-left: 56px;height: 60px;line-height:60px;width: 20vw;font-size:32px;font-weight:700;background-color: rgb(239, 240, 241);">Details</span>
        <img id="left" src="http://127.0.0.1:8000/static/competition/718CaymanGT4Clubsport/bring7.png" alt="">
        <div id="right2">
          <span id="r1">Contact Racing Cars Sales:</span>
          <a href="mailto:GT4Clubsport@porsche.cn" class="r2">e-mail: motorsport@porsche.de</a>
        </div>
      </div>
    </footer>
    <fotter_v></fotter_v>
  </div>
</template>

<script>
import fotter_v from "./fotter_v";
export default {
  name: "cayman",
  data() {
    return {
      fit: "fill",
      url: "http://127.0.0.1:8000/static/competition/718CaymanGT4Clubsport/porsche-motorsport-image.jpg",
      video: {
        url: "http://127.0.0.1:8000/static/competition/718CaymanGT4Clubsport/porsche-718-Cayman-GT4-Clubsport.mp4",
        cover: "http://127.0.0.1:8000/static/competition/718CaymanGT4Clubsport/porsche-718-Cayman-GT4-Clubsport.jpg",
        muted: false,
        loop: false,
        preload: "auto",
        poster: "",
        volume: 1,
        autoplay: false
      }
    }
  },
  computed: {
    $video() {
      return this.$refs.vueMiniPlayer.$video;
    }
  },
  methods:{
    handleFullscreen() {},
    goindex(){
      location.href = "/index"
    }
  },
  components:{
    fotter_v
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  user-select: none;
}
/*#root{*/
/*  !*position: relative;*!*/
/*  margin: 0 auto;*/
/*  background-color: salmon;*/
/*  width: 100vw;*/
/*  height: 100vh;*/
/*}*/
@media only screen and (min-width: 768px) and (max-width: 991px){}
.m-72-cn-menu-button:before {
  line-height: 60px;
}
.m-72-cn-menu-button:before {
  font-size: 2.2em;
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
  position: relative;
  top: 10px;
  left: 10px;
}

#Porche{
  width: 123px;
  height: 75px;
  position: relative;
  left: 50%;
  margin-left: -61.5px;
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
img{
  width: 100%;
  height: 100%;
}
#image{
  position: relative;
  left: 50%;
  /*margin: 0 auto;*/
  transform: translateX(-50%);
  width: 100vw;
  height: 600px;
}
.title{
  font-weight: 700;
  /*background-color: salmon;*/
  color: black;
  position: absolute;
  width: 600px;
  left: 150px;
  font-size: 46px;
  height: 80px;
  line-height: 80px;
  top: 150px;
}
.tips{
  font-weight: 700;
  color: black;
  position: absolute;
  width: 600px;
  font-size: 28px;
  left: 150px;
  top: 210px;
  height: 80px;
  line-height: 80px;
  /*background-color: salmon;*/
}
#show{
  position: relative;
  width: 100%;
  height: 700px;
  /*background-color: salmon;*/
}
ul{
  list-style: none;
}
#c1{
  position: absolute;
  width: 62vw;
  height: 520px;
  left: 0;
  top:0;
  background-color: #e3e4e4;
}
#c2{
  position: absolute;
  width: 36vw;
  height: 320px;
  right: 0;
  top: 100px;
  background-color: #e3e4e4;
}
#c3{
  position: absolute;
  width: 30vw;
  height: 280px;
  right: 91px;
  top: 420px;
  background-color: #e3e4e4;
}
#c911{
  /*background-color: salmon;*/
  width: 460px;
  height: 50px;
  position: absolute;
  top:620px;
  left: 200px;
  line-height: 25px;
}
#video{
  margin-top: 60px;
  /*background-color: salmon;*/
  display: flex;
  height: 500px;
}
#v1{
  flex: 6;
  height: 100%;
  background-color: salmon;
;
}
#v2{
  flex: 4;
  height: 100%;
  background-color: rgb(25, 31, 34);
  color: white;
}
#v2 ul{
  list-style: none;
  position: relative;
  margin-left: 150px;
  margin-top: 200px;
}
#v2 ul li{
  font-weight: 700;
  margin-top: 10px;
}
#TeData{
  display: flex;
  position: relative;
  width: 100%;
  height: 500px;
}
#t1{
  flex: 1;
  height: 100%;
  /*background-color: saddlebrown;*/
}
#t2{
  flex: 1;
  height: 100%;
  /*background-color: salmon;*/
}
#modelRSR{
  margin-top: 80px;
  margin-left: 80px;
  width: 600px;
  height: 330px;
}
.left{
  float: left;
  display: inline-block;
  width: 100px;
}
.right{
  display: inline-block;
  float: right;
  /*width: 600px;*/
  /*background-color: #e9e9e9;*/
}
#t2>ul{
  margin-top: 140px;
  /*width: 700px;*/
  margin-left: 150px;
}
#t2>ul li{
  width: 500px;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid grey;
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
.comcar{
  position: relative;
  /*background-color: greenyellow;*/
  flex-flow: wrap;
  margin: 10px auto;
  width: 1550px;
  display: flex;
}
.comcar li{
  margin-left: 10px;
  list-style: none;
  /*flex: 1;*/
  /*flex-wrap: wrap;*/
  flex-grow: 0;
  width: 750px;
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
  color: white;
  font-size: 32px;
  position: relative;
  top: -40px;
  display: inline-block;
  /*background-color: salmon;*/
  width: 400px;
  left: 30px;
}
.carname:hover{
  cursor: pointer;
  color: firebrick;
}
.comcar2 li{
  height: 500px;
}
.carname3{
  position: relative;
  top: -120px;
}
.el-icon-arrow-right2{
  position: relative;
  top: -80px;
}
.carname4{
  color: white;
  position: relative;
  font-size: 14px;
  display: inline-block;
  background-color: transparent;
  border: 1px solid white;
  text-align: center;
  top: -110px;
  left: 30px;
  width: 100px;
  height: 40px;
  line-height: 40px;
}
.carname4:hover{
  cursor: pointer;
}
.c911f{
  display: flex;
  position: relative;
}
.c911f li{
  position: relative;
  flex: 1;
  background-color: salmon;
  height: 300px;
}
.carname5{
  color: white;
  position: relative;
  font-size: 14px;
  display: inline-block;
  background-color: transparent;
  border: 1px solid white;
  text-align: center;
  top: -60px;
  left: 10px;
  width: 100px;
  height: 40px;
  line-height: 40px;
}
.c911t{
  display: block;
  color: white;
  z-index: 99999;
  position: absolute;
  top:190px;
  font-size: 32px;
}
.c911t:hover{
  color: firebrick;
}
#p{
  line-height: 35px;
  font-size: 24px;
}
#abs{
  width: 100px;
  height: 50px;
  position: absolute;
  top:570px;
  font-size: 30px;
  left: 200px;
}
#book{
  position: relative;
  width: 100%;
  height: 700px;
}
#booktitle{
  font-weight: 500;
  position: absolute;
  margin-left: 140px;
  font-size: 52px;
  top: 190px;
}
.book{
  position: absolute;
  width: 400px;
  margin-left: 140px;
  top: 270px;
}
#right{
  position: absolute;
  width: 500px;
  height: 90%;
  background-color: salmon;
  right: 200px;
  background-image: url("http://127.0.0.1:8000/static/competition/718CaymanGT4Clubsport/book.png");
}
#btn{
  position: absolute;
  width: 150px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border: 1px solid white;
  bottom: 30px;
  color: white;
  right: 30px;
}
#btn:hover{
  cursor: pointer;
  color: firebrick;
}
a{
  text-decoration: none;
}
#detail{
  width: 100%;
  height: 500px;
}
#left{
  margin-left: 100px;
  width: 450px;
  height: 350px;
  margin-top: 50px;
}
#right2{
  position: relative;
}
#h2{
  font-size: 14px;
  position: absolute;
  top: -380px;
  left: 700px;
  font-weight: 500;
  text-align: center;
  width:480px;
  height: 60px;
  line-height: 60px;
  background-color: rgb(67, 48, 54);
  color: white;
}
#h2:hover{
  cursor: pointer;
  /*color: firebrick;*/
}
#r1{
  position: absolute;
  top: -280px;
  left: 700px;
  font-weight: 700;
}
.r1{
  display: block;
  position: relative;
  top: -220px;
  left: 700px;
  margin-top: 10px;
}
a{
  color: black;
  text-decoration: none;
}
.r2{
  position: relative;
  display: block;
  top: -230px;
  left: 700px;
  margin-top: 5px;

}
</style>
