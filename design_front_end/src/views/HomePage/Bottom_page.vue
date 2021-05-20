<template>
  <div>
    <div id="load" @click="ChangeLoading">
      <loading></loading>
    </div>
    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="el-zoom-in-center">
        <div v-show="show2" class="transition-box">.el-zoom-in-center</div>
      </transition>

      <transition name="el-zoom-in-top">
        <div v-show="show2" class="transition-box">.el-zoom-in-top</div>
      </transition>

      <transition name="el-zoom-in-bottom">
        <div v-show="show2" class="transition-box">.el-zoom-in-bottom</div>
      </transition>
    </div>
  </div>
</template>

<script>
import loading from "@/components/Loading/loading_main"
import $ from "jquery";
export default {
  data: () => ({
    show2: false
  }),
  methods:{
    ChangeLoading(){
      this.show2 =!this.show2
      console.log("click")
      $("#load").fadeOut("slow");
      setTimeout(()=>{
        $("#server").slideDown("slow")
      },1000)
    }
  },
  components:{
    loading
  }
}
</script>

<style>
.transition-box {
  margin-bottom: 10px;
  width: 400px;
  height: 200px;
  border-radius: 4px;
  background-color: #409EFF;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
#load{
  position: relative;
  /*left: 50%;*/
  margin-left: 43%
}
</style>