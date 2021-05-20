<template>
  <div id="root">
    <div class="container right-panel-active">
      <!-- 注册 -->
      <div class="container_form container--signup">
        <form action="#" class="form" id="form1">
          <h2 class="form_title">注册</h2>
          <input type="text" placeholder="用户名" class="input" v-model="username" @blur="check_username"/>
          <span v-show="error_name" class="zaizai">{{error_message}}</span>
          <input type="email" placeholder="邮箱" class="input" />
          <input type="password" placeholder="密码" class="input" v-model="password"/>
          <input type="password" placeholder="确认密码" class="input" v-model="password2" @blur="check_cpwd" />
          <span v-show="error_check_password" class="zaizai">{{passmessage}}</span>
          <button class="btn">注册</button>
        </form>
      </div>
      <!-- 登录 -->
      <div class="container_form container--signin">
        <form action="#" class="form" id="form2">
          <h2 class="form_title">登录</h2>
          <input type="email" placeholder="用户名" class="input" />
          <input type="password" placeholder="密码" class="input" />
          <a href="#" class="link">忘记密码?</a>
          <button class="btn">登录</button>
        </form>
      </div>
      <!-- 浮层 -->
      <div class="container_overlay">
        <div class="overlay">
          <div class="overlay_panel overlay--left">
            <button class="btn" id="signIn">登录</button>
          </div>
          <div class="overlay_panel overlay--right">
            <button class="btn" id="signUp">注册</button>
          </div>
        </div>
      </div>
    </div>
    <!-- 背景 -->
    <div class="slidershow">
      <div v-for="item in BgImg" class="slidershow--image" :style="{backgroundImage:'url('+item+')'}"></div>
    </div>
  </div>

</template>

<script>
import "@/../static/js/login_js/login.js"
export default {
  name: "login",
  data(){
    return{
      BgImg:[
        require("@/../static/img/login_img/Porsche_911_Car.jpg"),
        require("@/../static/img/login_img/Porche.jpg"),
        require("@/../static/img/login_img/Porche_02.jpg"),
        require("@/../static/img/login_img/Porche_03.jpg"),
        require("@/../static/img/login_img/Porche_04.jpg"),
      ],
      passmessage:'',
      password: '',
      password2: '',
      username:'',
      error_check_password : false,
      error_message:'',
      error_name:false
    }
  },
  methods:{
    check_cpwd(){
      //验证两次密码是否一致
      if (this.password2 !== this.password){
        this.error_check_password = true;
        this.passmessage = "粗心死了，两次密码都不一样！"
      }else {
        this.error_check_password = false;
      }
    },
    check_username(){
      //用户名是5-20个字符 [a-zA-Z0-9_-]
      //定义正则
      let re = /^[a-zA-Z0-9_-]{5,15}$/;
      if (re.test(this.username)){
        this.error_name = false;
      }else {
        //匹配失败,展示错误信息
        this.error_message = '请输入5-20个字符的用户名';
        this.error_name = true;
      }
    },
  },
}
</script>

<style scoped>
@import '../../../static/css/login_css/login.css';
@import '../../../static/css/login_css/style.css';
.zaizai{
  color: red;
  font-size: 14px;
  position: relative;
  /*top: 10px;*/
}
</style>