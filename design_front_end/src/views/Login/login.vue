<template>
  <div id="root">
    <div class="container right-panel-active">
      <!-- 注册 -->
      <div class="container_form container--signup">
        <form action="#" class="form" id="form1">
          <h2 class="form_title">Sign Up</h2>
          <input type="text" placeholder="User" class="input" />
          <input type="email" placeholder="Email" class="input" />
          <input type="password" placeholder="Password" class="input" />
          <button class="btn">Sign Up</button>
        </form>
      </div>

      <!-- 登录 -->
      <div class="container_form container--signin">
        <form action="#" class="form" id="form2">
          <h2 class="form_title">Sign In</h2>
          <input type="email" placeholder="Email" class="input" />
          <input type="password" placeholder="Password" class="input" />
          <a href="#" class="link">Forgot your password?</a>
          <button class="btn">Sign In</button>
        </form>
      </div>

      <!-- 浮层 -->
      <div class="container_overlay">
        <div class="overlay">
          <div class="overlay_panel overlay--left">
            <button class="btn" id="signIn">Sign In</button>
          </div>
          <div class="overlay_panel overlay--right">
            <button class="btn" id="signUp">Sign Up</button>
          </div>
        </div>
      </div>
    </div>

    <!-- 背景 -->
    <div class="slidershow">
      <div class="slidershow--image" :style="{backgroundImage:'url('+bgimg1+')'}"></div>
      <div class="slidershow--image" :style="{backgroundImage:'url('+bgimg2+')'}"></div>
      <div class="slidershow--image" :style="{backgroundImage:'url('+bgimg3+')'}"></div>
      <div class="slidershow--image" :style="{backgroundImage:'url('+bgimg4+')'}"></div>
    </div>
  </div>

</template>

<script>
import "@/../static/js/login_js/login.js"
export default {
  name: "login",
  data(){
    return{
      bgimg1:require("@/../static/img/login_img/Porsche_911_Car.jpg"),
      bgimg2:require("@/../static/img/login_img/Porche.jpg"),
      bgimg3:require("@/../static/img/login_img/Porche_02.jpg"),
      bgimg4:require("@/../static/img/login_img/Porche_03.jpg"),
    }
  }
}
</script>

<style scoped>
@import '../../../static/css/login_css/login.css';
@import '../../../static/css/login_css/style.css';
</style>