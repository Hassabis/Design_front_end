<template>
<div id="root">
  <div id="content">
    <ul>
      <li v-for="item in message">{{item}}</li>
    </ul>
    <div id="tips">
      <span>©Porsche版权所有</span>
      <span>京ICP备09012434号</span>
      <span id="spc"><img id="police" :src="require('@/../static/img/Common/Police.png')" alt="">京公安备案 1231331323号</span>
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
  data(){
    return{
      message:[
          "隐私条款",
          "用户协议",
          "投诉电话",
          "网站地图",
          "法律声明",
          "环保信息查询",
          "供应商平台"
      ]
    }
  }
}
</script>

<style scoped>
#root{
  position: relative;
  height: 100px;
  width: 99vw;
  /*background-color: salmon;*/
  border-top: 1px solid #e3e4e4;
}
ul{
  position: relative;
  left: -19px;
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
#tips{
  font-size: 12px;
  position: absolute;
  left: 15px;
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