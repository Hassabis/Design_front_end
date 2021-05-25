<template>
<div id="root">
  <section>
    <!-- 登录 -->

    <div class="container">
      <div class="user singinBx">
        <div class="imgBx"><img src="./2.jpg" alt=""></div>
        <div class="formBx">
          <form action="">
            <h2>登录</h2>
            <input type="text" name="" v-model="username" placeholder="用户名">
            <input type="password" name="" v-model="password" placeholder="密码">
            <span id="login_tips" v-show="err_show">用户名或密码不能为空</span>
<!--            <input type="submit" name="" value="登录">-->
            <div id="login" @click="login">登录</div>
            <p class="signup">没有账号？<a href="javascript:;" @click="topggleForm">注册</a></p>
          </form>
        </div>
      </div>
      <!-- 注册 -->

      <div class="user singupBx">
        <div class="formBx">
          <form>
            <h2>注册</h2>
            <input type="text" name="username" placeholder="用户名" v-model="username" @blur="check_username">
            <span id="tipname" v-show="error_name" >用户名长度应在2-8个字符间</span>
            <input type="email" name="email" placeholder="邮箱地址" v-model="email" @blur="check_email">
            <span id="email" v-show="email_check">邮箱格式有误</span>
            <input type="password" name="password" placeholder="密码" v-model="password" @blur="check_pwdlen">
            <span id="tippwd" v-show="pwdlength">密码长度应在8位到12位之间</span>
            <input type="password" name="password2" placeholder="再次输入密码" v-model="password2" @blur="check_cpwd">
            <span id="confirm" v-show="error_check_password">{{ passmessage }}</span>
            <div @click="register" id="register">注册</div>
            <p class="signup">已有账号？<a href="javascript:;" @click="topggleForm">登录</a></p>
          </form>
        </div>
        <div class="imgBx"><img src="./3.jpg" alt=""></div>
      </div>
    </div>
  </section>
  <canvas class="background"></canvas>
</div>
</template>

<script>
import "./spc/main"
import "./spc/particles"
import axios from "axios"
export default {

  name: "porsche_login",
  data(){
    return{
      error_name:false,
      username:'',
      password: '',
      password2: '',
      passmessage:'',
      email:'',
      error_check_password : false,
      pwdlength:false,
      email_check:false,
      register_suc:'',
      err_msg:'',
      err_show:false
    }
  },
  methods:{
    login(){
      if (this.username === '' || this.password === ''){
        this.err_msg = "用户名或密码不能为空"
        this.err_show = true
        return;
      }
      axios.post('http://127.0.0.1:8000/login/',{
        username:this.username,
        password:this.password
      })
      .then(response=>{

        sessionStorage.clear();
        localStorage.clear();
        // localStorage.token = response.data.token;
        // localStorage.username = response.data.username;
        // localStorage.user_id = response.data.id;
        sessionStorage.token = response.data.token;
        sessionStorage.username = response.data.username;
        sessionStorage.user_id = response.data.id;
        this.$router.push('/index')
      })
      .catch(err=>{
        this.err_show = true;
      })
    },
    register(){
      console.log("储存")
      axios.post('http://127.0.0.1:8000/register/',{
        username:this.username,
        password:this.password,
        password2:this.password2,
        email:this.email
      })
      .then(response =>{
        if (response.data.msg === "success"){
          this.register_suc = response.data.msg
          location.reload();
        }
      })
      .catch(err=>{
        console.log("失败，暂且不处理")
      })
    },
    topggleForm(){
      let container = document.querySelector('.container');
      container.classList.toggle('active');
    },
    check_username(){
      //用户名是2-8个字符 [a-zA-Z0-9_-]
      this.error_name = this.username.length < 2 || this.username.length > 8;
      // let re = /^[a-zA-Z0-9_-]{2,8}$/;
      // this.error_name = !re.test(this.username);
    },
    check_cpwd(){
      //验证两次密码是否一致
      if (this.password2 !== this.password){
        this.error_check_password = true;
        this.passmessage = "粗心死了，两次密码都不一样！"
      }else {
        this.error_check_password = false;
      }
    },
    check_pwdlen(){
      this.pwdlength = this.password.length < 8 || this.password.length > 12;
    },
    check_email(){
      let re = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
      this.email_check = !re.test(this.email);
    }
  },
}
</script>

<style scoped>
#register{
  margin-top: 10px;
  background-color: #677eff;
  height: 40px;
  width: 100px;
  line-height: 40px;
  text-align: center;
}
#login{
  margin-top: 10px;
  background-color: #677eff;
  height: 40px;
  width: 100px;
  line-height: 40px;
  text-align: center;
}
#login:hover{
  cursor: pointer;
}
#register:hover{
  cursor: pointer;
}
h1 {
  text-align: center;
}

.background {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
}
*{
  padding: 0;
  margin:0;
  box-sizing: border-box;
  font-family: 'Poppins',sans-serif;
}

/* 设置整个表单参数 (父盒子)*/

section {
  position: relative;
  min-height: 100vh;
  /*background: pink;*/
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

section .container {
  border-radius: 10px;
  position: relative;
  width: 800px;
  height: 500px;
  background: #fff;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

section .container .user{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
}

/* 更改图片  （左侧）*/
section .container .imgBx{
  position: relative;
  width: 50%;
  height: 100%;
  /* background: #fff; */
  transition: .5s;
}

section .container .user .imgBx img{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 右侧表单盒子 */

section .container .user .formBx {
  position: relative;
  width: 50%;
  height: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  transition: .5s;
}

/* h2 */

section .container .user .formBx form h2{
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;/*大小*/
  letter-spacing: 2px;/* 间距*/
  text-align: center;
  width: 100%;
  margin-bottom: 10px;
  color: #555;
}

/* 表单文字属性 */

section .container .user .formBx form input{
  position: relative;
  width: 100%;
  padding: 10px;
  background: #f5f5f5;
  color: #333;
  border: none;
  outline:none;
  box-shadow:none;
  margin: 8px 0;
  font-size: 14px;
  letter-spacing:1px;
  font-weight: 300;
}

/* 为登录设置样式 */

section .container .user .formBx form input[type="submit"]{
  max-width: 100px;
  background: #677eff;
  color:#fff;
  cursor:pointer;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  transition: .5s;
}

/* 没有账号时 */

section .container .user .formBx form .signup{
  position: relative;
  margin-top: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  color: #555;
  text-transform: uppercase;
  font-weight: 300;
}

section .container .user .formBx form .signup a{
  font-weight: 600;
  text-decoration: none;
  color: #677eff;
}
section .container .singupBx {
  pointer-events: none;
}

section .container.active .singupBx {
  pointer-events: initial;
}

section .container .singupBx .formBx {
  left: 100%;
}

section .container.active .singupBx .formBx {
  left: 0;
}

section .container .singupBx .imgBx {
  left: -100%;
}

section .container.active .singupBx .imgBx {
  left: 0;
}


section .container .singinBx .formBx {
  left: 0;
}

section .container.active .singinBx .formBx {
  left: 100%;
}

section .container .singinBx .imgBx {
  left: 0;
}

section .container.active .singinBx .imgBx {
  left: 100%;
}

@media (max-width: 991px) {
  section .container {
    max-width: 400px;
  }

  section .container .imgBx {
    display: none;
  }

  section .container .user .formBx {
    width: 0;
  }
}
#tipname{
  /*background: salmon;*/
  color: red;
  position: absolute;
  font-size: 14px;
  top: 155px;
  left: 50px;
}
#tippwd{
  color: red;
  position: absolute;
  font-size: 14px;
  top: 265px;
  left: 50px;
}
#confirm{
  color: red;
  position: absolute;
  font-size: 14px;
  top: 317px;
  left: 50px;
}
#email{
  color: red;
  position: absolute;
  font-size: 14px;
  top:211px;
  left: 50px;
}
#login_tips{
  color: red;
  position: absolute;
  font-size: 14px;
  top: 265px;
  left: 45px;
}
</style>