<template>
  <div id="root">
    <div id="line1"></div>
    <img :src="require('/static/img/Car_img/porsche-svg.svg')" id="Porche" alt="">
    <div id="line2"></div>
    <div id="ControlContent">
      <div class="content">
      </div>
      <div class="content">
        <h2>数据保护声明</h2>
        <p id="tips">保时捷集团或其代理机构可能会通过您提供的信息以及我们已经存储的关于您的信息联系您，包括通过邮件、电话、短消息或者传真的形式，向您介绍有关保时捷的产品和我们提供的服务信息。我们可能会在一段合理的时间内保存您的信息，以便向您提供与我们的产品和服务有关的介绍、邀请函或资讯。</p>
        <h1>阅读即代表同意隐私协议</h1>
        <el-button type="danger">向经销商提交提交购买</el-button>
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
    axios.get(this.API.API_CARTACHINCALDATA + sessionStorage.pk + "/").then(res => {
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
      CarData:""
    }
  }
}
</script>

<style scoped>
@import "../../../static/css/purchase.css";
</style>