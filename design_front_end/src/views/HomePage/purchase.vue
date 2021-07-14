<template>
  <div id="root">
    <div id="line1"></div>
    <img :src="require('/static/img/Car_img/porsche-svg.svg')" id="Porche" alt="">
    <div id="line2"></div>
    <div id="ControlContent">
      <div class="content">
        <p style="font-size: 14px;width: 480px;margin-top: 80px">* 所列的制造商建议零售价（含增值税）仅供参考，并不包括运输费用、税费（另有明确规定的除外）、牌照、所有权、非强制或地区性要求的设备。特别是，制造商建议零售价（含增值税）并未包含 2016 年 12 月 1 日起生效的《财政部、国家税务总局关于对超豪华小汽车加征消费税有关事项的通知》所要求加征的消费税。根据《关于深化增值税改革有关政策的公告》，自 2019 年 4 月 1 日起增值税税率进行调整。因此所列的厂商建议零售价将可能进行调整。请您与保时捷授权经销商咨询具体的价格信息。
        </p>
      </div>
      <div class="content">
        <h2>数据保护声明</h2>
        <p id="tips">保时捷集团或其代理机构可能会通过您提供的信息以及我们已经存储的关于您的信息联系您，包括通过邮件、电话、短消息或者传真的形式，向您介绍有关保时捷的产品和我们提供的服务信息。我们可能会在一段合理的时间内保存您的信息，以便向您提供与我们的产品和服务有关的介绍、邀请函或资讯。</p>
        <h1>阅读即代表同意隐私协议</h1>
        <el-button type="danger" @click="buy(CarData.name,CarData.price)">向经销商提交提交购买</el-button>
      </div>
      <div class="content">
        <h2>我的{{CarData.name}}</h2>
        <img :src="CarData.carimage" alt="">
        <span id="price">总价:{{CarData.price}} 元</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "purchase",
  mounted() {
    axios.get(this.API.API_CARTACHINCALDATA + localStorage.pk + "/").then(res => {
      // localStorage.clear()
      this.CarData = res.data
      console.log(this.CarData)
    }).catch(err => {
      console.log(err)
    })
    setTimeout(()=>{
      this.$message({
        message:'请注意您的隐私安全,Porsche官方不会以任何形式任何理由向您索取个人信息',
        center:true,
        type: 'warning'
      });
    },1000)
  },
  data(){
    return{
      CarData:"",
      formdata:{
        price:"",
        name:""
      }
    }
  },
  methods:{
    buy(name,price){
      this.formdata.name = name;
      this.formdata.price = price
      axios.post(this.API.API_PAY,this.formdata).then(res => {
        location.href = res.data.alipay_url
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
@import "../../../static/css/purchase.css";
</style>