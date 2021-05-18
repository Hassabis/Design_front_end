<template>
  <div id="root">
    <div id="bar" v-for="item in car" :style="{width:Cwidth,height:Cheight,lineHeight:Cheight}">
      <div class="barchild">
        {{item}}
<!--        <img :src="require('@/../static/img/Car_img/mi_01.webp')" alt="">-->
      </div>
    </div>
  </div>
</template>

<script>
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
  }
}
</script>

<style scoped>
#root{
  z-index: 2;
  position: absolute;
  /*background-color: salmon;*/
}
#bar{
  display: flex;
  flex-direction: column;
}
.barchild{
  /*margin-top: 2px;*/
  background-color:rgba(0,0,0,.3);
  width: 237px;
  flex: 1;
  padding-left: 5px;
  /*margin-left: 5px;*/
  text-align: center;
}
#bar>div:hover{
  background-color: firebrick;
}
img{
  float: right;
}
</style>