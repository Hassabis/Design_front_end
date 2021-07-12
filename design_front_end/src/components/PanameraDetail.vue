<template>
  <div id="root">

    <figure class="sample" @mouseenter="changeImg1">
      <img src="http://127.0.0.1:8000/static/Panamera/panamera/panamerabac1.png" alt="sample3"/>
      <figcaption>
        <h3>NO.3</h3>
      </figcaption><i class="ion-ios-location-outline"></i>
      <a href="#"></a>
    </figure>
    <figure class="sample Taycan2"  @mouseenter="changeImg2">
      <img src="http://127.0.0.1:8000/static/Panamera/panamera/panamerabac2.png" alt="sample2"/>
      <figcaption>
        <h3>NO.3</h3>
      </figcaption><i class="ion-ios-location-outline"></i>
      <a href="#"></a>
    </figure>
    <figure class="sample Taycan2"  @mouseenter="changeImg3">
      <img src="http://127.0.0.1:8000/static/Panamera/panamera/panamerabac3.png" alt="sample1"/>
      <figcaption>
        <h3>NO.1</h3>
      </figcaption><i class="ion-ios-home-outline"></i>
      <a href="#"></a>
    </figure>
    <div id="other" style="position:relative;left: 50%;transform: translateX(-50%);width:85vw;">
      <h2 style="text-align:center;width: 500px;font-size: 32px;font-weight: 700;position: relative;left: 50%;transform: translateX(-50%)">{{this.$store.state.BacTitle}}</h2>
      <p style="text-align:center;width: 1000px;position:relative;left: 50%;transform: translateX(-50%);margin-top: 10px;line-height: 34px">{{this.$store.state.BacDesc}}</p>
    </div>
  </div>
</template>

<script>
import $ from "jquery"

export default {
  name: "PanameraDetail",
  mounted() {
    this.$store.state.BacImg = "http://127.0.0.1:8000/static/Panamera/panamera/panamerabac1.png"
    this.$store.state.BacTitle = "新一代轮胎"
    this.$store.state.BacDesc = "重新调校的底盘和新款 20 及 21 英寸车轮令驾驶体验得到极大提升。"
  },
  methods:{
    changeImg1(){
      this.$store.commit("changeBacImg",{
        image:"http://127.0.0.1:8000/static/Panamera/panamera/panamerabac1.png",
        title:"新一代轮胎",
        desc:"重新调校的底盘和新款 20 及 21 英寸车轮令驾驶体验得到极大提升。"
      })
    },
    changeImg2(){
      this.$store.commit("changeBacImg",{
        image:"http://127.0.0.1:8000/static/Panamera/panamera/panamerabac2.png",
        title:"辅助系统 ",
        desc:"多项驾驶辅助系统让行车更加安全、更加放松。保时捷智慧互联为 Panamera 全系车型插上数字化的翅膀，可满足您现在和未来的需求。"
      })
    },
    changeImg3(){
      this.$store.commit("changeBacImg",{
        image:"http://127.0.0.1:8000/static/Panamera/panamera/panamerabac3.png",
        title:"抬头显示",
        desc:" 抬头显示系统可将本车相关的所有信息直接投射在您的视线中，而车道变换辅助系统可提醒您注意盲区中的物体。 标配包含交通标志识别功能的车道保持辅助系统，可在长途旅行过程中为您提供额外的支持。 "
      })
    },
    Dispic(){
      $(".hover").mouseleave(
          function () {
            $(this).removeClass("hover");
          }
      );
    }
  },
}
</script>

<style scoped>
@import "../../static/css/Detail/TaycanShow.css";
#other{
  position: relative;
  left: 50%;
  margin-left: -15%;


}
</style>