<template>
<div id="root">
  <div id="left">
    <span>隐私条款</span>
    <span>用户协议</span>
    <span>投诉电话</span>
    <span>网站地图</span>
    <span>法律声明</span>
    <span>环保信息查询</span>
    <span>供应商平台</span>
    <br>
    <div class="bot_01" :style="{left:Cleft}">
      <span>©Porsche版权所有</span>
      <span>京ICP备 1314520号</span>
      <span id="spc"><img id="police" :src="require('@/../static/img/Common/Police.png')" alt="">京公安备案 13145209999号</span>
      <nav>孤鸿踏雪，似我</nav>
    </div>
  </div>
  <div id="right">
    <span>官方在线展厅</span>
    <span>官方应用</span>
    <span>官方微信</span>
    <br>
    <span class="bot">天猫官方店铺</span>
    <span class="bot">官方微博</span>
    <span class="bot">官方抖音</span>
  </div>
</div>
</template>

<script>
export default {
  name: "MiniFotter",
  props:{
    Cleft:{
      type:String,
      require:false
    }
  }
}
</script>

<style scoped>
nav{
  color: darkgoldenrod;
  position: absolute;
  bottom: 0;
  left: 469px;
}
#root{
  position: relative;
  height: 100px;
  width: 99vw;
  /*background-color: salmon;*/
  border-top: 1px solid #e3e4e4;
  /*background-color: salmon;*/
}
#left{
  font-size: 12px;
  position: absolute;
  left: 30px;
  top: 22px;
}
ul{
  position: relative;
  left: -15px;
  top: -10px;
}
ul,li{
  display: inline-block;
}
li{
  user-select: none;
  font-size: 12px;
  margin-left: 25px;
  /*border-left: solid 1px #e3e4e4;*/
}
#left>span{
  margin-left: 35px;
}
.bot_01{
  width: 800px;
  display: inline-block;
  margin-top: 15px;
  margin-left: 4px;
  /*font-size: 12px;*/
  position: absolute;
  /*left: -180px;*/
  /*margin-top: 2px;*/
}
.bot_01>span{
  margin-left: 30px;
}
#tips>span{
  margin-left: 30px;
}
#right{
  font-size: 12px;
  position: absolute;
  right: 100px;
  top: 20px;
}
#right>span{
  margin-left: 35px;
}
.bot{
  display: inline-block;
  margin-top: 15px;
}
#police{
  bottom:-4px;
  left: -20px;
  position: absolute;
  width: 20px;
  height: 20px;
}
#spc{
  position: relative;
  left: 5px;
}
</style>