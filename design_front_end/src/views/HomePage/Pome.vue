<template>
  <el-carousel :interval="4000" type="card" height="400px">
    <el-carousel-item v-for="item in img_Box" :key="item">
      <h3 class="medium"><img :src="item.path" alt=""></h3>
      <div id="hidden">
        <div class="main">{{item.sentense}}</div>
        <span class="Ser">{{ item.tips }}</span>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
  name:"Pome",
  data(){
    return{
      img_Box:[
        {
          path:require("@/../static/img/Car_img/nav_01.jpg"),
          sentense:"Porsche的'竞'化论",
          tips:"心动了吗"
        },
        {
          path: require("@/../static/img/Car_img/nav_02.jpg"),
          sentense:"生来就和别人不同",
          tips:"你也是吗?"
        },
        {
          path:require("@/../static/img/Car_img/nav_05.jpg"),
          sentense:"专注跑车性能70年",
          tips:"我们代表顶峰"
        },
        {
          path:require("@/../static/img/Car_img/nav_04.jpg"),
          sentense:"高级定制，打造你自己的专属",
          tips:"Porsche"
        }
      ]
    }
  }
}
</script>
<style>
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
img{
  width: 100%;
  height: 100%;
}
#hidden{
  position: absolute;
  top: 300px;
  margin-left: 10px;
}
#hidden:hover{
  color: firebrick;
}
.main{
  font-size: 34px;
}
.Ser{
  font-size: 24px;
}
</style>