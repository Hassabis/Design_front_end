<template>
  <div id="root" @mouseleave="hiddenFn">
    <div id="bar" v-for="item in car" :style="{width:Cwidth,height:Cheight,lineHeight:Cheight}">
<!--    <div id="bar" :style="{width:Cwidth,height:Cheight,lineHeight:Cheight}">-->
      <ul>
        <li>
          <div class="barchild" @mouseenter="displayFn">{{item}}</div>
<!--          <div class="barchild">崽崽</div>-->
        </li>
      </ul>
    </div>
    <div class="hidenbox" style="background-color: saddlebrown">
      <div id="top"><img :src="require('@/../static/img/CarBac/porsche-normal_01.jpg')" alt=""></div>
      <img id="spec" :src="require('@/../static/img/Car_img/porsche-model_01.webp')" alt="">
      <div id="Price">
        <div class="bottom">
          <h2>1,278,000元起*</h2>
          <h5>制造商建议零售价(含增值税)</h5>
        </div>
        <div class="bottom">
          <h2>283 kW/385 PS</h2>
          <h5>最大功率(KW)/最大功率(PS)</h5>
        </div>
        <div class="bottom">
          <h2>4.2s</h2>
          <h5>0 - 100 km/h加速时间</h5>
          <h2>4.0s</h2>
          <h5>0 - 100 km/h 加速时间,搭配Sport Chrono组件</h5>
        </div>
      </div>
    </div>
    <div id="CarType">
      <ul>
        <li @click="Go_detail">911 Carrera & Targa车型</li>
        <li @click="Go_detail">911 Turbo S车型</li>
      </ul>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: "Left_nav",
  props:{
    Cwidth:{
      type:String,
      default:'250px'
    },
    Cheight:{
      type:String,
      default: '100px'
    }
  },
  data(){
    return{
      car:["Taycan","911","Macan","Panamera","Cayenne","718"]
    }
  },
  methods:{
    hiddenFn(){
      $("#CarType").fadeOut("slow");
      setTimeout(()=>{
        $(".hidenbox").slideUp("slow");
      },1000);
      setTimeout(()=>{
        $("#spec").fadeOut("slow");
      },500)
    },
    displayFn(){
      $("#CarType").fadeIn("slow");
      setTimeout(()=>{
        $(".hidenbox").slideDown("slow");
      },500);
      setTimeout(()=>{
        $("#spec").fadeIn("slow");
      },1000)
    },
    Go_detail(){
      this.$router.replace("/detail")
    }
  }
}
</script>

<style scoped>
@import "../../../static/css/Car_index/style.css";
</style>