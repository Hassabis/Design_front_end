<template>
  <div id="root" @mouseleave="hiddenFn">
    <div id="bar" v-for="(item,indexs) in car" :style="{width:Cwidth,height:Cheight,lineHeight:Cheight}">
<!--    <div id="bar" :style="{width:Cwidth,height:Cheight,lineHeight:Cheight}">-->
      <ul>
        <li>
          <div class="barchild" @mouseenter="displayFn" @mouseover="getSecond(item.carsign)">{{item.carheader}}</div>
        </li>
      </ul>
    </div>
    <div class="hidenbox" style="background-color: saddlebrown" v-for="i in detailCar">
      <div id="top"><img :src="i.carbacimage" alt=""></div>
      <img id="spec" :src="i.carmodel" alt="">
      <div id="Price">
        <div class="bottom">
          <h2>{{i.carprice}}元起*</h2>
          <h5>制造商建议零售价(含增值税)</h5>
        </div>
        <div class="bottom">
          <h2>{{i.carpower}}</h2>
          <h5>最大功率(KW)/最大功率(PS)</h5>
        </div>
        <div class="bottom">
          <h2>{{i.carspeeds}}s</h2>
          <h5>0 - 100 km/h加速时间</h5>
          <h2>{{i.cartime}}s</h2>
          <h5>0 - 100 km/h 加速时间,搭配Sport Chrono组件</h5>
        </div>
      </div>
    </div>
    <div id="CarType">
      <ul v-for="i in littlecar">
        <li @click="Go_detail(i.detailsign)" @mouseenter="getThird(i.id)">{{i.little}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import axios from "axios";
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
      car:"",
      littlecar:"",
      detailCar:""
    }
  },
  mounted() {
    axios.get(this.API.API_GET_FIRST_CLASSIFICATION).then(res => {
      this.car = res.data
    }).catch(err => {
      alert(err.data())
    })
  },
  methods:{
    getThird(pk){
      // console.log(pk)
      axios.get(this.API.API_GET_THIRD_CLASSIFICATION + pk + "/").then(res => {
        this.detailCar = res.data
      }).catch(err => {
        alert(err.data)
      })
    },
    getSecond(pk){
      axios.get(this.API.API_GET_SECOND_CLASSIFICATION + pk + '/').then(res => {
        this.littlecar = res.data
      }).catch(err => {
        alert(err)
      })
    },
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
    Go_detail(pk){
      this.$store.commit("changCarTypeId",pk)
      axios.get(this.API.API_GET_DETAILCAR + this.$store.state.CarTypeId + "/").then(res =>{
        this.$store.commit("changeCarTDate",res.data)
      })
      setInterval(()=>{
        if (this.$store.state.CarData.length > 0){
          this.$router.replace("/detail")
        }
      },10)
    }
  }
}
</script>

<style scoped>
@import "../../../static/css/Car_index/style.css";
</style>