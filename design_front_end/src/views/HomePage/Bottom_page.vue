<template>
  <div>
    <div id="load" @click="ChangeLoading">
      <loading></loading>
    </div>
    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="el-zoom-in-center">
        <div v-show="show2" class="transition-box">
          <img class="butimg" :src="require('@/../static/img/Car_img/reserver.webp')" alt="">
          <div class="floatBox">
            <h1 class="compare2" @click="gosubscribe">预约试驾</h1>
            <h5>&gt;了解更多</h5>
          </div>
        </div>
      </transition>

      <transition name="el-zoom-in-top">
        <div v-show="show2" class="transition-box">
          <img class="butimg" :src="require('@/../static/img/Car_img/reserver_02.webp')" alt="">
          <div class="floatBox">
            <h1 @click="gocompare" class="compare2">车型比较</h1>
            <h5>&gt;不一样的你</h5>
          </div>
        </div>
      </transition>

      <transition name="el-zoom-in-bottom">
        <div v-show="show2" class="transition-box">
          <img class="butimg" :src="require('@/../static/img/Car_img/reserver_03.webp')" alt="">
          <div class="floatBox">
            <h1 class="compare2">经销商</h1>
            <h5>&gt;在你的城市嘛</h5>
          </div>
        </div>
      </transition>

      <transition name="el-zoom-in-bottom">
        <div v-show="show2" class="transition-box">
          <img class="butimg" :src="require('@/../static/img/Car_img/reserver_04.webp')" alt="">
          <div class="floatBox">
            <h1 class="compare2">关于我们</h1>
            <h5>&gt;了解更多</h5>
          </div>
        </div>
      </transition>
    </div>
<!--    <div id="posi" style="height: 400px;width: 1px;"></div>-->
    <div id="pomes">
      <span>Poems by Porsche</span>
      <Pome></Pome>
    </div>
    <div id="video">
      <Vuevideo :cwidth="width"></Vuevideo>
    </div>
  </div>
</template>

<script>
import loading from "@/components/Loading/loading_main"
import $ from "jquery";
import Pome from "./Pome"
import Scroll from "../../components/Scroll";
import Vuevideo from "../../components/VueVideo";
export default {
  data: () => ({
    show2: false,
    // width:"2400px"
  }),
  methods:{
    gosubscribe(){
      location.href = "/subscribe"
      // this.$router.replace("/subscribe")
    },
    gocompare(){
      this.$router.replace("/compare")
    },
    ChangeLoading(){
      this.show2 =!this.show2
      console.log("click")
      $("#load").fadeOut("slow");
      setTimeout(()=>{
        $("#server").slideDown("slow")
      },1000)
      setTimeout(()=>{
        $("#pomes").slideDown("slow")
      },1000)
      setTimeout(()=>{
        $("#scroll").slideDown("slow")
      },1000)
      setTimeout(()=>{
        $("#video").slideDown("slow")
      },1000)
    }
  },
  components:{
    loading,
    Pome,
    Vuevideo
  }
}
</script>

<style>
/*@import "../../../static/css/base.css";*/
.transition-box {
  margin-bottom: 10px;
  width: 350px;
  height: 350px;
  border-radius: 4px;
  /*background-color: #409EFF;*/
  text-align: center;
  /*border: 1px solid salmon;*/
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
#load{
  position: absolute;
  /*left: 50%;*/
  top: 680px;
  left: 660px;
}
.butimg{
  width: 350px;
  height: 350px;
  position: relative;
  left: -20px;
  top: -40px;
}
.floatBox{
  position:relative;
  top: -150px;
  left: -100px;
  z-index: 10;
}
#pomes{
  display: none;
  position: relative;
  top: 280px;
  font-size: 32px;
  font-weight: 900;
}
#video{
  display: none;
  position: relative;
  top: 300px;
  height: 700px;
  font-size: 32px;
  font-weight: 900;
  /*left: 500px;*/
}
.compare2:hover{
  color: firebrick;
  cursor: pointer;
}
</style>