<template>
<div id="root">
  <div :style="{width:Cwidth,height:Cheight}">
    <img :src="require('@/../static/img/test_micralcan/720s.webp')" alt="">
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
*{
  margin: 0;
  padding: 0;
}
</style>