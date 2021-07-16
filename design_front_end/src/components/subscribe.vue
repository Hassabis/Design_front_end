<template>
<div id="root">
  <div id="logo">
    <logo></logo>
  </div>
  <div class="m-72-cn-menu-button" @click="goindex"></div>
  <div id="left" style="margin-left: 100px">
    <h2>尊敬的保时捷车主和车迷</h2>
    <span style="font-size: 14px">如果您对试驾某款保时捷车型感兴趣，请留下联络信息，我们将在短时间内联系您。</span>
    <el-form ref="form" :model="sizeForm" label-width="80px" size="medium " style="margin-top: 30px">
      <el-form-item label="称呼" >
        <el-select v-model="sizeForm.sex" placeholder="您的称呼">
          <el-option label="先生" value="female"></el-option>
          <el-option label="女士" value="male"></el-option>
        </el-select>
      </el-form-item>
      <div style="width: 300px;">
        <el-form-item label="姓氏">
          <el-input v-model="sizeForm.name1"></el-input>
        </el-form-item>
      </div>
      <div style="width: 300px;">
        <el-form-item label="名字">
          <el-input v-model="sizeForm.name2"></el-input>
        </el-form-item>
      </div>
      <div style="width: 300px;">
        <el-form-item label="电话">
          <el-input v-model="sizeForm.phone"></el-input>
        </el-form-item>
      </div>
      <el-form-item label="省" >
        <el-select v-model="sizeForm.province" placeholder="请选择省份">
          <div v-for="(item,index) in province" :key="index">
            <el-option :label="item.name" :value="item.id"></el-option>
          </div>
        </el-select>
      </el-form-item>
      <el-form-item label="市" >
        <el-select v-model="sizeForm.city" placeholder="请选择市">
          <el-option v-for="(item,index) in city" :key="index" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="区" >
        <el-select v-model="sizeForm.district" placeholder="请选择区">
          <el-option v-for="(item,index) in distict" :key="index" :label="item.name" :value="item.name"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="车型号" >
        <el-select v-model="sizeForm.car" placeholder="请选择车辆">
          <el-option v-for="(item,index) in car" :key="index" :label="item.name" :value="item.name"></el-option>
        </el-select>
      </el-form-item>
      <el-button type="primary" @click="onSubmit" style="margin-left: 81px">立即申请</el-button>
    </el-form>
  </div>
  <div id="right">
    <img :src="require('@/../static/img/Car_img/nav_03.jpg')" alt="">
  </div>
</div>
</template>

<script>
import logo from "./NavBar/logo";
import axios from "axios";
export default {
  mounted() {
    axios.get(this.API.API_PROVINCE).then(res => {
      this.province = res.data
    }).catch(err => {
      alert("服务器未开启" + err)
    })
    axios.post(this.API.API_CARTACHINCALDATA).then(res => {
      this.car = res.data
    })
  },
  name: "subscribe",
  components:{
    logo
  },
  methods:{
    goindex(){
      this.$router.replace("/index")
    },
    onSubmit(){
      this.$notify({
        title:"提交成功",
        message:"我们会在七个工作日之内联系您,正在为您跳转至主页...",
        type:"success",
        duration:4000
      })
      setTimeout(()=>{
        location.href = "/index"
      },4000)
    }
  },
  data(){
    return{
      sizeForm: {
        sex: '',
        name1: '',
        name2: '',
        phone: '',
        province:"",
        city:"",
        district:"",
        car:""
      },
      province:"",
      city:"",
      distict:"",
      car:""
    }
  },
  watch:{
    // 监听到省份id发生变化
    'sizeForm.province':function (){
      axios.get(this.API.API_CITY + this.sizeForm.province).then(res => {
        this.city = res.data
        this.$message({
          type:"success",
          message:"我们会根据您提供的地址给您联系最近的保时捷中心",
          duration:6000
        })
      }).catch(err => {
        console.log(err)
      })
    },
    // 监听到市级id发生变化
    'sizeForm.city':function (){
      axios.get(this.API.API_DISTRICT + this.sizeForm.city).then(res => {
        this.distict = res.data
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
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
    position: fixed;
    top: 100px;
    left: 10px;
  }
  #logo{
  width: 100vw;
  height: 100px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  }
ul li{
  list-style: none;
}
#right{
  position: absolute;
  width: 900px;
  height: 450px;
  top: 210px;
  left: 30%;
}
img{
  width:100%;
  height: 100%;
}
</style>