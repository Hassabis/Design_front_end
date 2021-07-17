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
    <div id="video">
      <div id="v1">
        <vueMiniPlayer
            ref="vueMiniPlayer"
            :video="video"
            :mutex="true"
            @fullscreen="handleFullscreen"
        />
      </div>
    </div>
    <span style="display: block;padding-left: 56px;height: 80px;line-height:60px;width: 100vw;font-size:32px;font-weight:700;background-color: rgb(239, 240, 241)">
        <span class="m-72-cn-menu-button" @click="goindex"></span>
    </span>
    <div id="TeData">
      <div id="t1">
      <span style="display: block;padding-left: 56px;height: 60px;line-height:60px;width: 20vw;font-size:32px;font-weight:700;background-color: rgb(239, 240, 241);position: absolute;">
      技术数据
    </span>
        <img id="modelRSR" src="http://127.0.0.1:8000/static/competition/911GT3R/porsche-model.webp" alt="">
        <div style="width: 540px;margin-top: -55px;margin-left: 120px"><el-divider></el-divider></div>
        <span style="position: relative;left: 50%;transform: translateX(-50%);width: 300px;margin-left: -150px ">长度:4,604mm（不含导流片、尾翼、扩散板）</span>
      </div>
      <div id="t2">
        <ul>
          <li></li>
          <li><span class="left">发动机</span><span class="right">水冷水平对置六缸发动机</span></li>
          <li><span class="left">排量</span><span class="right">4,000cm3</span></li>
          <li><span class="left">功率</span><span class="right">约 375kW (515 hp) 取决于节流阀</span></li>
          <li><span class="left">变速箱</span><span class="right">顺序6速爪式换挡变速箱</span></li>
          <li><span class="left">重量</span><span class="right">约 1,243kg</span></li>
        </ul>
      </div>
    </div>
    <footer>
    <span style="display: block;padding-left: 56px;height: 60px;line-height:60px;width: 20vw;font-size:32px;font-weight:700;background-color: rgb(239, 240, 241);">
      亮点
    </span>
      <div>
        <ul class="c911f">
          <li>
            <img src="http://127.0.0.1:8000/static/competition/911GT3R/bring1.png" alt="">
            <span class="c911t">The 911 GT3 R concept<i class="el-icon-arrow-right"></i></span>
          </li>
          <li>
            <img src="http://127.0.0.1:8000/static/competition/911GT3R/bring2.png" alt="">
            <span class="c911t" >The design<i class="el-icon-arrow-right"></i></span>
          </li>
          <li>
            <img src="http://127.0.0.1:8000/static/competition/911GT3R/bring3.png" alt="">
            <span class="c911t">The drive<i class="el-icon-arrow-right"></i></span>
          </li>
          <li>
            <img src="http://127.0.0.1:8000/static/competition/911GT3R/bring4.png" alt="">
            <span class="c911t">The brakes<i class="el-icon-arrow-right"></i></span>
          </li>
          <li>
            <img src="http://127.0.0.1:8000/static/competition/911GT3R/bring5.png" alt="">
            <span class="c911t" >The chassis<i class="el-icon-arrow-right"></i></span>
          </li>
          <li>
            <img src="http://127.0.0.1:8000/static/competition/911GT3R/bring6.png" alt="">
            <span class="c911t">Safety<i class="el-icon-arrow-right"></i></span>
          </li>
        </ul>
      </div>
      <div id="detail">
        <span style="display: block;padding-left: 56px;height: 60px;line-height:60px;width: 20vw;font-size:32px;font-weight:700;background-color: rgb(239, 240, 241);">Details</span>
        <img id="left" src="http://127.0.0.1:8000/static/competition/911GT3R/bring7.png" alt="">
        <div id="right">
          <a href="http://127.0.0.1:8000/static/competition/911GT3R/911 GT3 R(2019) - Vehicle description.pdf" id="h2" @click="download">下载 911 GT3 R pdf文件查看详情信息</a>
          <span id="r1">Contact Racing Cars Sales:</span>
          <span class="r1">Dr. Ing. h.c. F. Porsche AG</span>
          <span class="r1">Motorsport Sales</span>
          <span class="r1">Porsche straße 911</span>
          <span class="r1">71287 Weissach</span>
          <span class="r1">Germany</span>
          <a href="mailto:motorsport@porsche.de" class="r2">e-mail: motorsport@porsche.de</a>
          <span class="r2">fax: + 49 (0)711 911 82920</span>
        </div>
      </div>
    </footer>
    <fotter_v></fotter_v>
  </div>
</template>

<script>
import fotter_v from "./fotter_v";
import axios from "axios";
export default {
  name: "GT3R911",
  data() {
    return {
      fit: "fill",
      url: "http://127.0.0.1:8000/static/competition/911RSR2017/911RSR2017.png",
      video: {
        url: "http://127.0.0.1:8000/static/competition/911GT3R/porsche-911-GT3-R-Teaser.mp4",
        cover: "http://127.0.0.1:8000/static/competition/911GT3R/porsche-911-GT3-R-Teaser.jpg",
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
    goindex(){
      location.href = "/index"
    },
    handleFullscreen() {},
    download(){
      axios.post("http://127.0.0.1:8000/static/competition/911GT3R/911 GT3 R(2019) - Vehicle description.pdf",{
        headers:{
          'Content-Type': 'application/json',
        },
        async : false,
        responseType:'blob'
      }).then(res => {
        if (!res.data){
          return;
        }
        var name = "911 GT3 R(2019) - Vehicle description.pdf";
        var blob = new Blob([res.data]);
        var url = window.URL.createObjectURL(blob);
        var aLink = document.createElement("a");
        aLink.style.display = "none";
        aLink.href = url;
        aLink.setAttribute("download", name);
        document.body.appendChild(aLink);
        aLink.click();
        document.body.removeChild(aLink); //下载完成移除元素
        window.URL.revokeObjectURL(url); //释放掉blob对象
      })
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
  color: white;
  position: absolute;
  width: 600px;
  left: 150px;
  font-size: 46px;
  height: 80px;
  line-height: 80px;
  top: 500px;
}
.tips{
  font-weight: 700;
  color: white;
  position: absolute;
  width: 600px;
  font-size: 28px;
  left: 150px;
  top: 570px;
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
  width: 800px;
  height: 50px;
  position: absolute;
  top:560px;
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
  flex: 1;
  height: 100%;
  background-color: salmon;
;
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
  color: white;
}
.comcar2 li{
  height: 500px;
}
.c911f{
  display: flex;
  flex-flow: wrap;
  position: relative;
}
.c911f li{
  margin-left: 1px;
  width: 500px;
  position: relative;
  flex-flow: wrap;
  /*flex: 1;*/
  background-color: salmon;
  height: 300px;
}
.c911t{
  display: block;
  color: white;
  z-index: 99999;
  position: absolute;
  top:250px;
  font-size: 18px;
  width: 98%;
  height: 50px;
  line-height: 50px;
  padding-left: 10px;
  background-color: rgb(39, 42, 43);
}
.c911t:hover{
  color: firebrick;
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
#right{
  position: relative;
}
#h2{
  font-size: 14px;
  position: absolute;
  top: -380px;
  left: 700px;
  font-weight: 500;
  text-align: center;
  width: 280px;
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
  top: -210px;
  left: 700px;
  margin-top: 5px;

}
</style>
