<template>
  <div>
    <full-page :options="options" id="fullpage" ref="fullpage" v-cloak>
      <div class="section" :style="{backgroundImage:'url(' + bacimg +')'}">
        <div class="slide" v-for="item in metadata">
          <div class="meta">
            <h2>{{item.name}}</h2>
            <h4>{{ item.price }}</h4>
            <img :src="item.path" alt="">
            <div class="waote">
              <div>
                <span>
                  {{item.power}}
                </span><br>
                <span class="des">
                  {{item.powerdes}}
                </span>
              </div>
              <div>
                <span>{{item.second}}</span><br>
                <span class="des">{{item.secondes}}</span>
              </div>
              <div>
                <span>{{item.speed}}</span><br>
                <span class="des">{{ item.speeddes }}</span>
              </div>
              <div class="but">
                <div class="chi">
                  {{ item.tecdata }}
                </div>
                <div class="chi">
                  {{ item.carconfig }}
                </div>
                <div class="chi">
                  {{ item.compare }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
<!--        <h3>-->
        <div class="video">
          <video :src="require('@/../static/video/718.mp4')" loop autoplay muted height="750px"></video>
        </div>
<!--        </h3>-->
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
<!--        <h3>-->
        <div class="video">
          <video :src="require('@/../static/video/718_comfortable.mp4')" loop autoplay muted height="750px"></video>
<!--        </h3>-->
        </div>
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
<!--        <h3>-->
        <div class="video">
          <video :src="require('@/../static/video/718_farway.mp4')" loop autoplay muted height="750px" width="1400px"></video></div>
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
<!--        <h3>-->
        <div class="video">
          <img id="male" :src="require('@/../static/img/Car_img/porsche-normal_spc.webp')" alt="" style="height: 750px"></div>
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
        <div>
        <h1>诗和远方，本该属于我们</h1>
        <div class="accordion">
          <!-- 在这里我们需要复制5个一样的代码，并修改内容 -->
          <ul>
            <li tabindex="1">
              <div>
                <a href="#">
                  <h2>阳光？夏天？</h2>
                  <p>这本该属于成功的您，放下所有，享受当下</p>
                </a>
              </div>
            </li>

            <li tabindex="2">
              <div>
                <a href="#">
                  <h2>微风和你</h2>
                  <p>有风拂过脸颊，掠起长发。月光如水平静柔和。我心如这月光，平静柔和。不敢去刻意追求什么，只是希望所有美好的开端都有一个美好的结局，一如这春夜长长远远。</p>
                </a>
              </div>
            </li>

            <li tabindex="3">
              <div>
                <a href="#">
                  <h2>兜个风？</h2>
                  <p>人世繁华多笑语，谁又空余两鬓风呢？</p>
                </a>
              </div>
            </li>

            <li tabindex="4">
              <div>
                <a href="#">
                  <h2>稳重</h2>
                  <p>您要的安全，我们都能给</p>
                </a>
              </div>
            </li>

            <li tabindex="5">
              <div>
                <a href="#">
                  <h2>风景</h2>
                  <p>要么读书要么旅行，灵魂和身体，必须有一个在路上。</p>
                </a>
              </div>
            </li>

            <li tabindex="6">
              <div>
                <a href="#">
                  <h2>身未动，心已远。</h2>
                  <p>每个人心中，都会有一个古镇情怀，流水江南，烟笼人家。</p>
                </a>
              </div>
            </li>
            <li tabindex="7">
              <div>
                <a href="#">
                  <h2>我们一定会达到那个远方</h2>
                  <p>对，当然得和你</p>
                </a>
              </div>
            </li>
          </ul>
        </div>
        <p class="about">
          By <a href="javascript:;">Porsche</a>
        </p>
      </div>
        <div id="our">
          <MiniFotter :cleft="-180+'px'" :cnavl="640+'px'"></MiniFotter>
        </div>
      </div>
    </full-page>
  </div>
</template>

<script>
import MiniFotter from "../components/MiniFotter";
import $ from "jquery"
export default {
  beforeDestroy() {
    $.fn.fullpage.destroy('all');
  },
  name: 'VueFullPage',
  label: process.env.LABEL,
  style: process.env.STYLE,
  data() {
    return {
      options: {
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        afterLoad: this.afterLoad,
        navigation: true,
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
      metadata:[
        {
          name:"718 Cayman",
          price:"545,000元起 *",
          path:require('@/../static/img/Car_img/porsche-model_03.webp'),
          power:"184kw/250PS",
          powerdes:"最大功率(kw)/最大功率(PS)",
          second:"5.6s",
          secondes:"0 - 100km/h加速时间",
          speed:"260km/h",
          speeddes:"最高时速",
          tecdata:"技术数据",
          carconfig:"车辆配置器",
          compare:"比较"
        },
        {
          name:"718 Spyder",
          price:"738,000元起 *",
          path:require('@/../static/img/Car_img/porsche-model_01.webp'),
          power:"230kw/300PS",
          powerdes:"最大功率(kw)/最大功率(PS)",
          second:"4.7s",
          secondes:"0 - 100km/h加速时间",
          speed:"270km/h",
          speeddes:"最高时速",
          tecdata:"技术数据",
          carconfig:"车辆配置器",
          compare:"比较"
        },
        {
          name:"911 Carrera & Targa",
          price:"1,278,000元起 *",
          path:require('@/../static/img/Car_img/911_Carrera.webp'),
          power:"283kw/385PS",
          powerdes:"最大功率(kw)/最大功率(PS)",
          second:"4,2s",
          secondes:"0 - 100km/h加速时间",
          speed:"293km/h",
          speeddes:"最高时速",
          tecdata:"技术数据",
          carconfig:"车辆配置器",
          compare:"比较"
        },
        {
          name:"718 Cayman",
          price:"545,000元起 *",
          path:require('@/../static/img/Car_img/911_carrear4.webp'),
          power:"184kw/250PS",
          powerdes:"最大功率(kw)/最大功率(PS)",
          second:"5.6s",
          secondes:"0 - 100km/h加速时间",
          speed:"260km/h",
          speeddes:"最高时速",
          tecdata:"技术数据",
          carconfig:"车辆配置器",
          compare:"比较"
        },
        {
          name:"718 Cayman",
          price:"545,000元起 *",
          path:require('@/../static/img/Car_img/porsche-model_03.webp'),
          power:"184kw/250PS",
          powerdes:"最大功率(kw)/最大功率(PS)",
          second:"5.6s",
          secondes:"0 - 100km/h加速时间",
          speed:"260km/h",
          speeddes:"最高时速",
          tecdata:"技术数据",
          carconfig:"车辆配置器",
          compare:"比较"
        },
        {
          name:"718 Cayman",
          price:"545,000元起 *",
          path:require('@/../static/img/Car_img/porsche-model_03.webp'),
          power:"184kw/250PS",
          powerdes:"最大功率(kw)/最大功率(PS)",
          second:"5.6s",
          secondes:"0 - 100km/h加速时间",
          speed:"260km/h",
          speeddes:"最高时速",
          tecdata:"技术数据",
          carconfig:"车辆配置器",
          compare:"比较"
        }
      ]
    };

  },
  methods: {
    afterLoad: function(origin, destination, direction) {
      console.log('After load....');
      console.log(destination);
      if (destination.index === 0){
        // this.$refs.fullpage.init();
      }
      if (destination.index === 1){

        this.dis()
        $('video').get(parseInt(destination.index - 1)).play()
        // this.$refs.fullpage.init();

      }else if (destination.index === 2){

        this.dis_02()
        $('video').get(parseInt(destination.index - 1)).play()
        console.log("第三页")
        // this.$refs.fullpage.init();

      }else if (destination.index === 3){

        this.dis_03()
        $('video').get(parseInt(destination.index - 1)).play()
        this.$refs.fullpage.init();

      }else if (destination.index === 4){
        this.dis_04()
        this.$refs.fullpage.init();
      }else if (destination.index === 5){
        this.$refs.fullpage.init();
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
  },
  components:{
    MiniFotter
  }
};
</script>

<style scoped>
@import "../../static/css/Detail/style.css";
@import "../../static/css/Detail/bottom.css";
/*img{*/
/*  width:100%; height:100%;*/
/*}*/
.video{
  width: 1550px;
  height: 750px;
}
video{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
#our{
  z-index: 1111;
  margin: 10px auto;
  /*margin-top:0px;*/
  /*margin-top: -130px;*/
  bottom: 10px;
}
</style>