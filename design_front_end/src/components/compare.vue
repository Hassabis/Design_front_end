<template>
  <div id="root">
    <el-drawer
        :before-close="handleClose"
        :visible.sync="innerDrawer">
      <div id="innerbox">
        <ul v-for="i in carlist">
          <li v-if="i.name !== c1.name" @click="comCar(i)">{{i.name}}</li>
        </ul>
      </div>
    </el-drawer>
    <div id="gonindex" @click="goindex">
      <el-button>回到主页</el-button>
    </div>
    <div style="display: flex;width: 96vw;height: 600px;margin-top: -10px">
      <div class="compare">
        <ul class="controlCom">
          <li class="header" style="font-weight: 700;font-size: 24px">最多选择两款车型进行对比</li>
          <li class="header">制造商建议零售价（含增值税）
          </li>
          <li class="normal">车名</li>
          <li class="normal">最大功率（kW）</li>
          <li class="normal">最大功率（PS）</li>
          <li class="normal">0 - 100 km/h 加速时间</li>
          <li class="normal">最高时速</li>
          <li class="normal">高度</li>
          <li class="normal">宽度</li>
          <li class="normal">长度</li>
          <li class="normal">轴距</li>
        </ul>
      </div>
      <div class="compare" v-if="c1.length === 0">
        <li class="header choosecar" style="list-style: none">
          <el-button plain @click="chooseCar(1)">添加其他车辆+</el-button>
        </li>
      </div>
      <div class="compare" v-else>
        <ul class="controlCom">
          <li class="header" style="font-weight: 700;font-size: 24px">
            <div id="de1" @click="deleteCom(1)">
              <i class="el-icon-close" style="font-size: 32px"></i>
            </div>
            <div>
              <img :src="c1.carimage" alt="">
            </div>
          </li>
          <li class="header">
            <span class="PDK">PDK</span>
            <span class="price">{{c1.price}} 元*</span>
            <p class="tips">* 所列的制造商建议零售价（含增值税）仅供参考，并不包括运输费用、税费（另有明确规定的除外）、牌照、所有权、非强制或地区性要求的设备。特别是，制造商建议零售价（含增值税）并未包含 2016 年 12 月 1 日起生效的《财政部、国家税务总局关于对超豪华小汽车加征消费税有关事项的通知》所要求加征的消费税。根据《关于深化增值税改革有关政策的公告》，自 2019 年 4 月 1 日起增值税税率进行调整。因此所列的厂商建议零售价将可能进行调整。请您与保时捷授权经销商咨询具体的价格信息。</p>
          </li>
          <li class="normal">{{c1.name}}</li>
          <li class="normal">{{c1.bestpower}}kW</li>
          <li class="normal">{{c1.maxtorque}}PS</li>
          <li class="normal">{{c1.zerohundertime}}s</li>
          <li class="normal">{{c1.maxspeed}}km/h</li>
          <li class="normal">{{c1.carheight}}mm</li>
          <li class="normal">{{c1.carwidth}}mm</li>
          <li class="normal">{{c1.carlong}}mm</li>
          <li class="normal">{{c1.maxtorque}}mm</li>
        </ul>
      </div>
      <div class="compare" v-if="c2.length === 0">
        <li class="header choosecar" style="list-style: none">
          <el-button plain @click="chooseCar(2)">添加其他车辆+</el-button>
        </li>
      </div>
      <div class="compare" v-else>
        <ul class="controlCom">
          <li class="header" style="font-weight: 700;font-size: 24px">
            <div id="de2" @click="deleteCom(2)">
              <i class="el-icon-close" style="font-size: 32px"></i>
            </div>
            <div>
              <img :src="c2.carimage" alt="">
            </div>
          </li>
          <li class="header">
            <span class="PDK">PDK</span>
            <span class="price">{{c2.price}} 元*</span>
            <p class="tips">* 所列的制造商建议零售价（含增值税）仅供参考，并不包括运输费用、税费（另有明确规定的除外）、牌照、所有权、非强制或地区性要求的设备。特别是，制造商建议零售价（含增值税）并未包含 2016 年 12 月 1 日起生效的《财政部、国家税务总局关于对超豪华小汽车加征消费税有关事项的通知》所要求加征的消费税。根据《关于深化增值税改革有关政策的公告》，自 2019 年 4 月 1 日起增值税税率进行调整。因此所列的厂商建议零售价将可能进行调整。请您与保时捷授权经销商咨询具体的价格信息。</p>
          </li>
          <li class="normal">{{c2.name}}</li>
          <li class="normal">{{c2.bestpower}}kW</li>
          <li class="normal">{{c2.maxtorque}}PS</li>
          <li class="normal">{{c2.zerohundertime}}s</li>
          <li class="normal">{{c2.maxspeed}}km/h</li>
          <li class="normal">{{c2.carheight}}mm</li>
          <li class="normal">{{c2.carwidth}}mm</li>
          <li class="normal">{{c2.carlong}}mm</li>
          <li class="normal">{{c2.maxtorque}}mm</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "compare",
  data(){
    return{
      c1:[],
      c2:[],
      innerDrawer: false,
    }
  },
  methods:{
    goindex(){
      location.href = "/index"
    },
    handleClose(done) {
      done()
    },
    deleteCom(sign){
      if (sign === 1){
        this.c1 = []
      }
      else {
        this.c2 = []
      }
    },
    comCar(data){
      if (this.c1.length === 0){
        this.c1 = data
      }
      else {
        this.c2 = data
      }
      this.handleClose(done)
    },
    chooseCar(sign){
      if (sign === 1){
        axios.post(this.API.API_CARTACHINCALDATA).then(res => {
          this.carlist = res.data
          this.innerDrawer = true;
        })
      }
      if (sign === 2){
        if (this.c1.length === 0){
          this.$store.commit("changewarncount")
          if (this.$store.state.warncount <= 4){
            this.$message('请先添加第一辆车');
          }else {
            this.$message({
              message:"说了让你先加第一辆车,怎么倔的和头驴一样?",
              type:"warning"
            });
          }

        }
        else {
          axios.post(this.API.API_CARTACHINCALDATA).then(res => {
            this.carlist = res.data
            this.innerDrawer = true;
          })
        }
      }
    },
  }
}
</script>

<style scoped>
ul{
  list-style: none;
}
.compare{
  position: relative;
  overflow: scroll;
  margin-left: 10px;
  flex: 1;
  height: 720px;
  /*background-color: salmon;*/
  font-family: "Microsoft YaHei UI Light";
}
.compare::-webkit-scrollbar {/*滚动条整体样式*/
  width: 0;     /*高宽分别对应横竖滚动条的尺寸*/
  height: 0;
  scrollbar-arrow-color:red;
}
.compare::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  background: rgba(0,0,0,0.2);
  scrollbar-arrow-color:red;
}
.compare::-webkit-scrollbar-track {/*滚动条里面轨道*/
  -webkit-box-shadow: inset 0 0 1px rgba(0,0,0,0.2);
  border-radius: 0;
  background: rgba(0,0,0,0.1);
}
.header{
  position: relative;
  width: 400px;
  height: 255px;
}
.controlCom{
  margin-top: 40px;
  margin-left: 20px;
}
.normal{
  margin-left: -40px;
  height: 55px;
  line-height: 55px;
  border-top: 1px solid rgb(227, 228, 228);
  border-bottom: 1px solid rgb(227, 228, 228);
}
.tips{
  line-height: 28px;
  font-size: 12px;
  margin-top: -7px;
  margin-left: -40px;
}
img{
  position: relative;
  left: -20px;
  height: 100%;
  width: 100%;
}
.PDK{
  display: block;
  position: relative;
  left: 40%;
  transform: translateX(-50%);
  height: 30px;
  border-bottom: 1px solid firebrick;
  text-align: center;
}
.price{
  display: block;
  position: relative;
  left: 40%;
  transform: translateX(-50%);
  height: 30px;
  top: 5px;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
}
.choosecar{
  margin-top: 130px;
  margin-left: 100px;
}
#innerbox{
  height: 700px;
  overflow: scroll;
  margin-top: -50px;
  margin-left: 10px;
}
#innerbox>ul>li:hover{
  cursor: pointer;
}
#innerbox>ul>li{
  line-height: 25px;
  height: 40px;
  /*border-top: 1px solid rgb(227, 228, 228);*/
  border-bottom: 1px solid rgb(227, 228, 228);
}
#innerbox::-webkit-scrollbar {/*滚动条整体样式*/
  width: 0;     /*高宽分别对应横竖滚动条的尺寸*/
  height: 0;
  scrollbar-arrow-color:red;
}
#innerbox::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  background: rgba(0,0,0,0.2);
  scrollbar-arrow-color:red;
}
#innerbox::-webkit-scrollbar-track {/*滚动条里面轨道*/
  -webkit-box-shadow: inset 0 0 1px rgba(0,0,0,0.2);
  border-radius: 0;
  background: rgba(0,0,0,0.1);
}
#de1{
  z-index: 9999;
  position: absolute;
  left: 91%;
  top: -10px;
}
#de2{
  z-index: 9999;
  position: absolute;
  left: 91%;
  top: -10px;
}
#de2{
  cursor:pointer;
}
#de1{
  cursor: pointer;
}
#gonindex{
  position: absolute;
  left: 98%;
  top: 5%;
}
</style>