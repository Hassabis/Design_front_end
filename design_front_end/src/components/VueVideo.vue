<template>
<div id="root">
  <div :style="{width:Cwidth,height:Cheight}" id="content">
<!--    <img :src="require('@/../static/video/test_micralcan/720s.webp')" alt="">-->
    <video :src="require('@/../static/video/porsche-video.mp4')" loop autoplay muted width="1500px"></video>
    <span id="movielife">
      <h2 id="title">Boxster 25周年</h2>
        Boxster 的历史绵亘二十五载，涌现了四代车型。这些车型集富有辨识度的线条与中置发动机跑车的比例于一身。<br>
      <span class="describe">Boxster 25 周年版的诸多细节将过去拉回到现在</span><br>
      <span class="describe">其设计灵感源自开启 Boxster 时代的 1993 年概念车。</span>
    </span>
  </div>
</div>
</template>

<script>
export default {
  name: "imgbox",
  props:{
    Cwidth:{
      type:String,
      require:true
    },
    Cheight: {
      type:String,
      require: false,
      default:"704px"
    }
  }
}
</script>

<style scoped>

#root{
  margin: 10px auto;
}
#content{
  position: relative;
}
#movielife{
  user-select: none;
  position: absolute;
  display: block;
  color: white;
  bottom: 10px;
  font-size: 16px;
  left: 50px;
}
.describe{
  display: inline-block;
  margin-top: 20px;
}
#title{
  font-size: 32px;
}
</style>