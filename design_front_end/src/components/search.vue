<template>
<div id="root">
  <header>
    <div id="line1"></div>
    <img :src="require('@/../static/img/Car_img/porsche-svg.svg')" id="Porche" alt="">
    <div id="line2"></div>
  </header>
  <div class="m-72-cn-menu-button" @click="goindex"></div>
  <span style="display: block;padding-left: 56px;height: 60px;line-height:60px;width: 95vw;font-size:32px;font-weight:700;background-color: rgb(239, 240, 241)">
      网站搜索
    </span>
  <div id="search">
    <input type="text" v-model="key">
    <div id="go" @click="searh"><i class="el-icon-search" style="color: white;font-size: 28px"></i></div>
  </div>
  <span class="search">所有关于 <span style="color: firebrick">{{this.$store.state.searchname}}</span> 的结果</span>
  <div v-if="this.$store.state.searchResult.length === 0" style="width: 80vw;height: 40vh;">
    <h1 style="position: absolute;left: 50%;top:50%;transform: translate(-50%,-50%)">
      暂无数据
    </h1>
  </div>
  <div id="result" v-else>
      <div class="content" v-for="(item,index) in this.$store.state.searchResult" :key="index">
        <img :src="item.object.carimage" alt="">
          <span class="compare" @click="searchCar(item.object.technicalsign)">数据</span>
          <span class="buy" @click="buy(item.object.name,item.object.price)">购买</span>
          <span class="name">{{item.object.name}}</span>
      </div>
  </div>
  <el-drawer
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose"
      :append-to-body="true"
      :size="'80%'">
    <div>
      <nav id="nav1">
        <h1>{{cartechincal.name}}</h1>
        <ul id="navul">
          <li>{{ cartechincal.price }}*元起  <span class="navspan">制造商建议零售价(含增值税)</span></li>
          <li>{{cartechincal.bestpower}} / {{cartechincal.maxtorque}}<span class="navspan">最大功率 (kw)/最大功率 (PS)</span></li>
          <li>{{cartechincal.zerohundertime}}s <span class="navspan">0-100 km/h 加速时间</span></li>
          <li>{{cartechincal.maxspeed}} km/h <span class="navspan">最高时速</span></li>
        </ul>
      </nav>
      <header>
        <div id="modelcontrol">
          <img src="http://127.0.0.1:8000/static/718/718model.png" alt="">
        </div>
        <div id="tipsprice">
          * 所列的制造商建议零售价（含增值税）仅供参考，并不包括运输费用、税费（另有明确规定的除外）、牌照、所有权、非强制或地区性要求的设备。特别是，制造商建议零售价（含增值税）并未包含 2016 年 12 月 1 日起生效的《财政部、国家税务总局关于对超豪华小汽车加征消费税有关事项的通知》所要求加征的消费税。根据《关于深化增值税改革有关政策的公告》，自 2019 年 4 月 1 日起增值税税率进行调整。因此所列的厂商建议零售价将可能进行调整。请您与保时捷授权经销商咨询具体的价格信息。
        </div>
        <div id="navleft">
          <!--                <h1>技术数据</h1>-->
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="驱动单元 Driver Element" name="1">
              <div class="controlnav"><span class="nleft">气缸数</span><span class="nright">{{cartechincal.number_of_cylinders}}</span></div>
              <div class="controlnav"><span class="nleft">排量</span><span class="nright">{{cartechincal.displacement}} cm³</span></div>
              <div class="controlnav"><span class="nleft">最大功率(kw)</span><span class="nright">{{cartechincal.bestpower}} kw</span></div>
              <div class="controlnav"><span class="nleft">最大功率(PS)</span><span class="nright">{{cartechincal.maxtorque}} PS</span></div>
              <div class="controlnav"><span class="nleft">最大功率对应发动机转速</span><span class="nright">{{cartechincal.mostpowerspeed}} rpm</span></div>
              <div class="controlnav"><span class="nleft">发动机最高转速</span><span class="nright">{{cartechincal.enginemostspeed}} rpm</span></div>
              <div class="controlnav"><span class="nleft">最大扭矩</span><span class="nright">{{cartechincal.maxtorque}} Nm</span></div>
              <div class="controlnav"><span class="nleft">最大扭矩对应发动机转速</span><span class="nright">{{cartechincal.maximumSpeed}} rpm</span></div>
            </el-collapse-item>
            <el-collapse-item title="性能 Performance" name="2">
              <div class="controlnav"><span class="nleft">最高时速</span><span class="nright">{{cartechincal.maxspeed}} km/h</span></div>
              <div class="controlnav"><span class="nleft">0-100km/h加速时间</span><span class="nright">{{cartechincal.zerohundertime}} s</span></div>
              <div class="controlnav"><span class="nleft">0-160km/h加速时间</span><span class="nright">{{cartechincal.zerohuntersix}} s</span></div>
              <div class="controlnav"><span class="nleft">80-120kn/h加速时间</span><span class="nright">{{cartechincal.eightspped}} s</span></div>
            </el-collapse-item>
            <el-collapse-item title="车身 Car Body" name="3">
              <div class="controlnav"><span class="nleft">长度</span><span class="nright">{{cartechincal.carlong}} mm</span></div>
              <div class="controlnav"><span class="nleft">宽度</span><span class="nright">{{cartechincal.carwidth}} mm</span></div>
              <div class="controlnav"><span class="nleft">宽度(包含后视镜)</span><span class="nright">{{cartechincal.carwidthmirror}} mm</span></div>
              <div class="controlnav"><span class="nleft">高度</span><span class="nright">{{cartechincal.carheight}} mm</span></div>
              <div class="controlnav"><span class="nleft">轴距</span><span class="nright">{{cartechincal.maxtorque}} mm</span></div>
              <div class="controlnav"><span class="nleft">空载重量(中国)</span><span class="nright">{{cartechincal.weight}} kg</span></div>
            </el-collapse-item>
            <el-collapse-item title="容量 Capacity" name="4">
              <div class="controlnav"><span class="nleft">行李厢容积(前)</span><span class="nright">{{cartechincal.contentarea}}</span></div>
              <div class="controlnav"><span class="nleft">行李厢容积(前排座椅后，至车顶)</span><span class="nright">{{cartechincal.mostcontentarea}}</span></div>
              <div class="controlnav"><span class="nleft">燃油箱</span><span class="nright">{{cartechincal.oilbox}}</span></div>
            </el-collapse-item>
            <el-collapse-item title="制造商建议零售价 Establish retail price" name="5">
              <div class="controlnav"><span class="nleft">PDK</span><span class="nright">{{cartechincal.price}} 元起*</span></div>
              <br>
              <div>* 所列的制造商建议零售价（含增值税）仅供参考，并不包括运输费用、税费（另有明确规定的除外）、牌照、所有权、非强制或地区性要求的设备。特别是，制造商建议零售价（含增值税）并未包含 2016 年 12 月 1 日起生效的《财政部、国家税务总局关于对超豪华小汽车加征消费税有关事项的通知》所要求加征的消费税。根据《关于深化增值税改革有关政策的公告》，自 2019 年 4 月 1 日起增值税税率进行调整。因此所列的厂商建议零售价将可能进行调整。请您与保时捷授权经销商咨询具体的价格信息。</div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </header>
    </div>
  </el-drawer>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "search",
  mounted() {
    this.$notify({
      title:"按 ESC 退出可退出详情数据的浏览",
      type:"success",
      duration:5000
    })
    document.title = "搜索结果"
    console.log("开始打印")
    console.log(this.$store.state.searchResult)
  },
  data(){
    return{
      key:"",
      formdata:{
        name:"",
        price:""
      },
      drawer:false,
      direction:"ltr",
      cartechincal:""
    }
  },
  methods:{
    searchCar(pk){
      axios.get(this.API.API_CARTACHINCALDATA + pk + "/").then(res => {
        this.cartechincal = res.data
        console.log(this.cartechincal)
        this.drawer = true;
      }).catch(err => {
        alert(err.data)
      })
    },
    handleClose(done) {
      done()
    },
    buy(name,price){
      this.formdata.name = name;
      this.formdata.price = price
      axios.post(this.API.API_PAY,this.formdata).then(res => {
        location.href = res.data.alipay_url
      }).catch(err => {
        console.log(err)
      })
    },
    searh(){
      axios.get(this.API.API_SEARCH + this.key).then(res => {
        this.$store.commit("changesearchResult",res.data)
        this.$store.commit("changesearchname",this.key)
      }).catch(err => {
        console.log(err)
      })
    },
    goindex(){
      location.href = "/index"
    }
  }
}
</script>

<style scoped>
@import "../../static/css/Detail/Taycan.css";
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
@media only screen and (min-width: 768px) and (max-width: 991px){}
.m-72-cn-menu-button:before {
  line-height: 60px;
}
.m-72-cn-menu-button:before {
  font-size: 2.6em;
  line-height: 50px;
}
.m-72-cn-menu-button::before {
  content: "";
}
.m-72-cn-menu-button:hover::before{
  cursor: pointer;
  color: firebrick;
}
.m-72-cn-menu-button{
  position: absolute;
  top: 10px;
  left: 10px;
}
input{
  font-size: 16px;
  width: 240px;
  height: 40px;
  padding-left: 10px;
}
#search{
  width: 310px;
  height: 46px;
  margin-left: 100px;
  margin-top: 40px;
}
#go{
  float: right;
  background-color: firebrick;
  width: 50px;
  height: 45px;
  line-height: 50px;
  text-align: center;
}
#go:hover{
  cursor: pointer;
}
.search{
  color: rgb(157, 160, 161);
  display: block;
  margin-top: 10px;
  margin-left: 100px;
}
#result{
  /*width: 500px;*/
  text-align: center;
  display: flex;
  flex-flow: wrap;
  margin: 10px auto;
  /*background-color: salmon;*/
  width: 1250px;
}
img{
  width: 100%;
  height: 100%;
}
.content{
  position: relative;
  flex-grow: 0;
  /*width: 400px;*/
  height: 240px;
  width: 400px;
  margin-left: 10px;
  margin-top: 10px;
}
.compare{
  /*float: right;*/
  display: block;
  position: absolute;
  /*right: 0;*/
  width: 30%;
  line-height: 40px;
  left: 5%;
  height: 40px;
  bottom: 10px;
  background-color: transparent;
  border: 1px solid white;
  color: white;
}
.buy{
  border: 1px solid white;
  /*float: right;*/
  display: block;
  position: absolute;
  /*right: 0;*/
  width: 30%;
  line-height: 40px;
  right: 5%;
  height: 40px;
  bottom: 10px;
  color: white;
  background-color: transparent;
}
.buy:hover{
  cursor: pointer;
  border-color: firebrick;
  color: firebrick;
}
.compare:hover{
  cursor: pointer;
  border-color: firebrick;
  color: firebrick;
}
.name{
  font-weight: 700;
  color: firebrick;
  position: absolute;
  display: block;
  left: 10px;
  top: 10px;
}
</style>