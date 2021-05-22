<template>
  <div>
    <full-page :options="options" id="fullpage" ref="fullpage" v-cloak>
      <div class="section" :style="{backgroundImage:'url(' + bacimg +')'}">
        <div class="slide">
          <div class="meta">
            <h2 >718 Cayman</h2>
            <h4>545,000元起*</h4>
            <img :src="require('@/../static/img/Car_img/porsche-model_03.webp')" alt="">
            <div class="waote">
              <div>
                <span>
                  184kw/250PS
                </span><br>
                <span class="des">
                  最大功率(kw)/最大功率(PS)
                </span>
              </div>
              <div>
                <span>5.6s</span><br>
                <span class="des">0 - 100km/h加速时间</span>
              </div>
              <div>
                <span>260km/h</span><br>
                <span class="des">最高时速</span>
              </div>
              <div class="but">
                <div class="chi">
                  技术数据
                </div>
                <div class="chi">
                  车辆配置器
                </div>
                <div class="chi">
                  比较
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="slide">
          <div class="meta">
            <h2>718 Spyder</h2>
            <h4>738,000元起*</h4>
            <img :src="require('@/../static/img/Car_img/porsche-model_01.webp')" alt="">
            <div class="waote">
              <div>
                <span>
                  220kw/300PS
                </span><br>
                <span class="des">
                  最大功率(kw)/最大功率(PS)
                </span>
              </div>
              <div>
                <span>4.7s</span><br>
                <span class="des">0 - 100km/h加速时间</span>
              </div>
              <div>
                <span>270km/h</span><br>
                <span class="des">最高时速</span>
              </div>
              <div class="but">
                <div class="chi">
                  技术数据
                </div>
                <div class="chi">
                  车辆配置器
                </div>
                <div class="chi">
                  比较
                </div>
              </div>
            </div>
          </div>
        </div>
        <        <div class="slide">
        <div class="meta">
          <h2 >911 Carrera & Targa</h2>
          <h4>1,278,000元起*</h4>
          <img :src="require('@/../static/img/Car_img/911_Carrera.webp')" alt="">
          <div class="waote">
            <div>
                <span>
                  283kw/385PS
                </span><br>
              <span class="des">
                  最大功率(kw)/最大功率(PS)
                </span>
            </div>
            <div>
              <span>4.2s</span><br>
              <span class="des">0 - 100km/h加速时间</span>
            </div>
            <div>
              <span>293km/h</span><br>
              <span class="des">最高时速</span>
            </div>
            <div class="but">
              <div class="chi">
                技术数据
              </div>
              <div class="chi">
                车辆配置器
              </div>
              <div class="chi">
                比较
              </div>
            </div>
          </div>
        </div>
      </div>
        <div class="slide">
        <div class="meta">
          <h2 >911 Carrear4</h2>
          <h4>1,356,000元起*</h4>
          <img :src="require('@/../static/img/Car_img/911_carrear4.webp')" alt="">
          <div class="waote">
            <div>
                <span>
                  283kw/385PS
                </span><br>
              <span class="des">
                  最大功率(kw)/最大功率(PS)
                </span>
            </div>
            <div>
              <span>4.2s</span><br>
              <span class="des">0 - 100km/h加速时间</span>
            </div>
            <div>
              <span>291km/h</span><br>
              <span class="des">最高时速</span>
            </div>
            <div class="but">
              <div class="chi">
                技术数据
              </div>
              <div class="chi">
                车辆配置器
              </div>
              <div class="chi">
                比较
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div class="section">
        <h3>
          <video :src="require('@/../static/video/718.mp4')" loop autoplay muted></video>
        </h3>
        <div id="main">
          <h2 id="title">
            设计
          </h2>
          <span>精准精准而不花哨；自信而不拘谨。整体外形低矮、宽大、流畅。718 车型的外观设计以富有运动感的线条和个性分明的外形轮<br>廓为特点。</span>
          <button id="click">
            +探索更多内容
          </button>
        </div>
      </div>
      <div class="section">
        <h3>
          <video :src="require('@/../static/video/718_comfortable.mp4')" loop autoplay muted></video></h3>
        <div class="main_02">
          <h2 class="title_02">
            舒适性
          </h2>
          <span>自适应减震器可提升日常驾驶的舒适性。此外，车辆还拥有多处储物空间和宽敞的腿部空间，双行李厢能够储存更多物品。。</span>
          <button class="click_02">
            +探索更多内容
          </button>
        </div>
      </div>
      <div class="section">
        <h3>
          <video :src="require('@/../static/video/718_farway.mp4')" loop autoplay muted></video></h3>
        <div class="main_03">
          <h2 class="title_03">
            718 T
          </h2>
          <span>有时，漫无目的才是更好的选择。怎样去到那里？我们去芜存菁：一辆纯粹的跑车，让您忘掉手机、只想升档提速。这辆保时捷只需要一条明确的路——当然，还有您。游刃自如。</span>
          <button class="click_03">
            +探索更多内容
          </button>
        </div>
      </div>
      <div class="section">
        <h3>
          <img :src="require('@/../static/img/Car_img/718_show.webp')" alt=""></h3>
        <div class="main_04">
          <h2 class="title_04">
            718 GTS
          </h2>
          <span>彻底震撼感官，同时拨动您的心弦的跑车。纯粹的保时捷跑车，四个气缸，一位车手：那就是您。。</span>
          <button class="click_04">
            +探索更多内容
          </button>
        </div>
      </div>
      <div class="section">
        <el-carousel :interval="4000" type="card" height="600px">
          <el-carousel-item v-for="item in 6" :key="item.index">
            <h3 class="medium"><img :src="item.path" alt=""></h3>
            <div id="hidden">
              <div class="sentense">{{item}}</div>
              <span class="Ser">{{ item }}</span>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </full-page>
  </div>
</template>

<script>
// import { VueExtend } from 'godspen-lib';
import $ from "jquery"
export default {
  // mixins: [VueExtend.mixin],
  name: 'VueFullPage',
  label: process.env.LABEL,
  style: process.env.STYLE,
  data() {
    return {
      options: {
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        afterLoad: this.afterLoad,
        // navigation: true,
        // anchors: ['page1', 'page2', 'page3','page4'],
        navigationPosition: 'left', //导航小圆点的位置
        controlArrows: true,
        resize: true,
        //鼠标移动到小圆点上时显示出的提示信息
        navigationTooltips: ["第一页","第二页","第三页"],
        //是否显示横向幻灯片的导航
        slidesNavigation: true,
        // lockAnchors: true,
        // css3: true,
        //绑定菜单，设定相关属性和anchors的值对应后，菜单可以控制幻灯片滚动
        menu: '.nav',
        verticalCentered: true,
      },
      bacimg:require("@/../static/img/CarBac/Bac_01.webp"),
      img_Box:[
        {
          path:require("@/../static/img/Car_img/nav_01.jpg"),
          sentense:"Porsche的'竞'化论",
          tips:"心动了吗"
        },
        {
          path: require("@/../static/img/Car_img/nav_02.jpg"),
          sentense:"生来就和别人不同",
          tips:"你也是吗?"
        },
        {
          path:require("@/../static/img/Car_img/nav_05.jpg"),
          sentense:"专注跑车性能70年",
          tips:"我们代表顶峰"
        },
        {
          path:require("@/../static/img/Car_img/nav_04.jpg"),
          sentense:"高级定制，打造你自己的专属",
          tips:"Porsche"
        }
      ]
    };
  },
  methods: {
    afterLoad: function(origin, destination, direction) {
      console.log('After load....');
      console.log(destination);
      if (destination.index === 1){
        this.dis()
      }else if (destination.index === 2){
        this.dis_02()
        console.log("第三页")
      }else if (destination.index === 3){
        this.dis_03()
      }else if (destination.index === 4){
        this.dis_04()
      }
    },
    dis(){
      setTimeout(()=>{
        $("#main").slideDown("slow")
      },1200)
    },
    dis_02(){
      setTimeout(()=>{
        $(".main_02").fadeIn("slow")
      },1200)
    },
    dis_03(){
      setTimeout(()=>{
        $(".main_03").show("slow")
      },1200)
    },
    dis_04(){
      setTimeout(()=>{
        $(".main_04").show("slow")
      },800)
    }
  }
};
</script>

<style scoped>
@import "../../static/css/Detail/style.css";
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
.medium>img{
  width: 100%;
  height: 100%;
}
#hidden{
  position: absolute;
  top: 300px;
  margin-left: 10px;
}
#hidden:hover{
  color: firebrick;
}
.sentense{
  font-size: 34px;
}
.Ser{
  font-size: 24px;
}
</style>