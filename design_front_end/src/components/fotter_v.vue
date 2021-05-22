<template>
<div id="root">
  <div id="left">
    <h3 id="Brand">Porsche</h3>
    <h4>集团</h4>
    <h4>投资者</h4>
    <h4>合作伙伴</h4>
    <h4>职业机会</h4>
    <h4>媒体中心</h4>
    <h4>F1赛车</h4>
  </div>
  <article id="right">
    <h3>联系我们</h3>
    <div class="content">经销商</div>
    <div class="content">注册兴趣</div>
    <h3 class="bot">About Wechat</h3>
    <span class="content bot">官方微信</span>
  </article>
  <footer style="font-family: source-han-sansa,soho-gothic-pro,Arial,sans-serif">
    <img id="logo" :src="require('@/../static/img/Car_img/porsche-svg.svg')" alt="">
    <ul id="Our">
      <li>COOKIE政策</li>
      <li>GENDER GAP REPORT</li>
      <li>隐私政策</li>
      <li>条款与条件</li>
      <li>ANTI-SLAVERY STATAMENT</li>
    </ul>
  </footer>
</div>
</template>

<script>
export default {
  name: "fotter_v"
}
</script>

<style scoped>
#root{
  position: relative;
  width: 98vw;
  /*background-color: #333333;*/
  height: 700px;
  background-color: #181c20;
}
#right{
  user-select: none;
  /*display: block;*/
  width: 27vw;
  position: absolute;
  height: 587px;
  top: 50px;
  right: 0;
  /*background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898;*/
  /*background-blend-mode: multiply,multiply;*/
  background-color: #2d3439;
  padding-top: 60px;
  padding-left: 80px;
}
footer{
  position: absolute;
  bottom: 20px;
  left: 50px;
}
.content{
  margin-top: 20px;
  font-size: 16px;
  color: #9da8ae;
}
.content:hover{
  color: #095c91;
  cursor: pointer;
}
h3{
  color: whitesmoke;
}
#left{
  position: absolute;
  top: 80px;
  left: 156px;
}
h4{
  color:#9da8ae
}
h4:hover{
  cursor: pointer;
  color: #095c91;
}
#Brand{
  font-size: 32px;
}
.bot{
  margin-top: 120px;
}
#Our{
  margin-top: -10px;
  width: 800px;
  list-style: none;
  /*height: 30px;*/
  color: #9da8ae;
  background-color: white;
}
#Our li{
  font-size: 12px;
  /*background-color: salmon;*/
  white-space: nowrap;
  float: left;
  height: 40px;
  margin-left: 30px;
  line-height: 40px;
  text-align: center;
}
#Our li:hover{
  cursor: pointer;
}
#logo{
  width: 258px;
  height: 156px;
}
</style>