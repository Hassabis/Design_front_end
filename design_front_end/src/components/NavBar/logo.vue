<template>
<div id="root">
  <div id="line1"></div>
  <img :src="require('@/../static/img/Car_img/porsche-svg.svg')" id="Porche" alt="">
  <div id="line2"></div>
</div>
</template>

<script>
export default {
  name: "logo"
}
</script>

<style scoped>
#Porche{
  width: 123px;
  height: 75px;
  position: relative;
  left: 50%;
  margin-left: -61.5px;
}
#line1{
  background-color: #e3e4e4;
  width: 650px;
  height: 1px;
  position: absolute;
  top: 60px;
  left: 30px;
}
#line2{
  background-color: #e3e4e4;
  width: 650px;
  height: 1px;
  position: absolute;
  top: 60px;
  right: 30px;
}
</style>