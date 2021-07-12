<template>
<div id="root">

  <figure class="sample" @mouseenter="changeImg1">
    <img src="http://127.0.0.1:8000/static/TayCan/Taybac/Taycan5.png" alt="sample3"/>
    <figcaption>
      <h3>NO.3</h3>
    </figcaption><i class="ion-ios-location-outline"></i>
    <a href="#"></a>
  </figure>
  <figure class="sample Taycan2"  @mouseenter="changeImg2">
    <img src="http://127.0.0.1:8000/static/TayCan/Taybac/Taycan3.png" alt="sample2"/>
    <figcaption>
      <h3>NO.3</h3>
    </figcaption><i class="ion-ios-location-outline"></i>
    <a href="#"></a>
  </figure>
  <figure class="sample Taycan2"  @mouseenter="changeImg3">
    <img src="http://127.0.0.1:8000/static/TayCan/Taybac/TaycanBac2.png" alt="sample1"/>
    <figcaption>
      <h3>NO.1</h3>
    </figcaption><i class="ion-ios-home-outline"></i>
    <a href="#"></a>
  </figure>
  <figure class="sample Taycan2"  @mouseenter="changeImg4">
    <img src="http://127.0.0.1:8000/static/TayCan/Taybac/TaycanBac.png" alt="sample2"/>
    <figcaption>
      <h3>NO.3</h3>
    </figcaption><i class="ion-ios-location-outline"></i>
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
  name: "DetailShow",
  methods:{
    changeImg1(){
      this.$store.commit("changeBacImg",{
        image:"http://127.0.0.1:8000/static/TayCan/Taybac/Taycan5.png",
        title:"800V架构",
        desc:"性能是保时捷的灵魂——各个方面皆是如此。正如  所展示的，即使在充电时：在理想条件下¹，其 800V 架构可支持高达 175kW 的充电功率，能够时刻准备好应对驾驶者的所有期盼：驾驶。"
      })
    },
    changeImg2(){
      this.$store.commit("changeBacImg",{
        image:"http://127.0.0.1:8000/static/TayCan/Taybac/Taycan3.png",
        title:"动感飞线",
        desc:"我们顷刻便了然什么对我们的灵魂有益，而什么能激发灵魂。  在瞬息之间尽显自身魅力：流畅鲜明的侧面轮廓和动态飞线。车身尾部采用无缝条状灯带设计，并带有由三维立体玻璃字母组成的保时捷标志。看够了吗？当然没有。"
      })
    },
    changeImg3(){
      this.$store.commit("changeBacImg",{
        image:"http://127.0.0.1:8000/static/TayCan/Taybac/TaycanBac2.png",
        title:"续航里程",
        desc:" 对 Taycan而言，即使是遥远的终点也宛如近在咫尺。高性能蓄电池升级版可为Taycan 提供高达 416 km 的 WLTP 续航里程，因而可减少停留和充电需求，让您能够轻松完成长途跋涉。 "
      })
    },
    changeImg4(){
      this.$store.commit("changeBacImg",{
        image:"http://127.0.0.1:8000/static/TayCan/Taybac/TaycanBac.png",
        title:"驱动理念",
        desc:"不论从技术角度还是从主观感受而言，驱动电机的相互作用都可以产生惊人的性能数据：借助起步控制系统可输出高达 560kW (761PS) 的超增压功率，两台发动机在 2.8 秒内即可令  S 从静止加速到 100km/h。由此带来的是与 918 Spyder 等超级跑车不相上下的起步性能。而且这种性能可以反复爆发出来：可实现连续加速，最高车速可达 260km/h"
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
</style>