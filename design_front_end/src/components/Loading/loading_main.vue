<template>
<div id="root">
  <div id="circle">点击加载更多</div>
</div>
</template>

<script>
export default {
  name: "loading_main"
}
</script>

<style scoped>
#circle{
  /*margin: 10px auto;*/
  width: 220px;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 10px;
  text-align: center;
  line-height: 40px;
  font-family: "Microsoft YaHei UI Light";
  font-size: 18px;
}
#circle:hover{
  cursor: pointer;
  color: skyblue;
}
</style>