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
            <h1>预约试驾</h1>
            <h5>&gt;了解更多</h5>
          </div>
        </div>
      </transition>

      <transition name="el-zoom-in-top">
        <div v-show="show2" class="transition-box">
          <img class="butimg" :src="require('@/../static/img/Car_img/reserver_02.webp')" alt="">
          <div class="floatBox">
            <h1>高级定制</h1>
            <h5>&gt;不一样的你</h5>
          </div>
        </div>
      </transition>

      <transition name="el-zoom-in-bottom">
        <div v-show="show2" class="transition-box">
          <img class="butimg" :src="require('@/../static/img/Car_img/reserver_03.webp')" alt="">
          <div class="floatBox">
            <h1>经销商</h1>
            <h5>&gt;在你的城市嘛</h5>
          </div>
        </div>
      </transition>

      <transition name="el-zoom-in-bottom">
        <div v-show="show2" class="transition-box">
          <img class="butimg" :src="require('@/../static/img/Car_img/reserver_04.webp')" alt="">
          <div class="floatBox">
            <h1>关于我们</h1>
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
  </div>
</template>

<script>
import loading from "@/components/Loading/loading_main"
import $ from "jquery";
import Pome from "./Pome"
export default {
  data: () => ({
    show2: false
  }),
  methods:{
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

      })
    }
  },
  components:{
    loading,
    Pome
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
  position: absolute;
  top: 980px;
  z-index: 10;
}
#pomes{
  display: none;
  position: relative;
  top: 280px;
  font-size: 32px;
  font-weight: 900;
}
</style>