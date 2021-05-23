<template>
  <el-container>
    <el-header height="75px">
      <div id="line1"></div>
      <img :src="require('@/../static/img/Car_img/porsche-svg.svg')" id="Porche" alt="">
      <div id="line2"></div>
    </el-header>
    <el-main>
      <div id="main">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="用户管理" name="first">
            <sapn class="userdesc" style="font-family: 'Microsoft YaHei UI Light'">您好，樊莲果：</sapn>
            <div id="userchoose">
              <el-tabs type="card" :tab-position="tabPosition">
                <el-tab-pane>
                  <span slot="label"><i class="el-icon-user"></i> 个人信息</span>
                  <div id="UserMessage">
                    <span id="countdata">账户信息</span>
                    <span id="mobile">手机</span><br>
                    <div id="phone">
                      <el-input
                          placeholder="请输入手机号码"
                          v-model="input"
                          clearable
                          size="medium"
                          suffix-icon="el-icon-edit">
                      </el-input>
                    </div>
                    <div id="basicmessage">
                      基本信息
                      <span id="edit" style="float: right;color: deepskyblue" @click="drawer = true" type="primary">编辑</span>
                      <el-drawer
                          title="我是标题"
                          :visible.sync="drawer"
                          :direction="direction"
                          :before-close="handleClose">
                        <span>我来啦!</span>
                      </el-drawer>
                    </div>
                    <div id="message">
                      <span class="message">
                        姓名 <br>
                        <span class="guo">樊莲果</span>
                      </span>
                      <span class="message">
                        性别 <br>
                        <span class="guo">女</span>
                      </span><br>
                      <span class="message">
                        生日 <br>
                        <span class="guo">2001-02-11</span>
                      </span>
                      <span class="message">
                        职业 <br>
                        <span class="guo">学生</span>
                      </span>
                    </div>
                  </div>
                </el-tab-pane>
                <el-tab-pane>
                  <span slot="label"><i class="el-icon-chat-dot-round"></i> 消息中心</span>
                  消息中心
                </el-tab-pane>
                <el-tab-pane>
                  <span slot="label">
                    <i class="el-icon-magic-stick"></i> 收货地址
                  </span>
                  收货地址
                </el-tab-pane>
                <el-tab-pane>
                  <span slot="label">
                    <i class="el-icon-star-off"></i> 我的收藏
                  </span>
                  收藏
                </el-tab-pane>
              </el-tabs>
            </div>
          </el-tab-pane>
          <el-tab-pane label="配置管理" name="second">
            <span class="userdesc" style="font-family: 'Microsoft YaHei UI Light'">您好，樊莲果：</span>
          </el-tab-pane>
          <el-tab-pane label="角色管理" name="third">
            <span class="userdesc" style="font-family: 'Microsoft YaHei UI Light'">您好，樊莲果：</span>
          </el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth">
            <span class="userdesc" style="font-family: 'Microsoft YaHei UI Light'">您好，樊莲果：</span>
          </el-tab-pane>
        </el-tabs>
        <div id="user">
          欢迎您：樊莲果女士
        </div>
      </div>
    </el-main>
    <el-footer>
      <div id="fotter"><MiniFotter></MiniFotter></div>
    </el-footer>
  </el-container>

</template>

<script>
import MiniFotter from "../../components/MiniFotter";
export default {
  name: "UserCenter",
  data() {
    return {
      activeName: 'first',
      tabPosition: 'left',
      input: '',
      drawer: false,
      direction: 'rtl',
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
    }
  },
  handleClick2(tab, event) {
    console.log(tab, event);
  },
  components:{
    MiniFotter
  }
}
</script>

<style scoped>
#fotter{
  position: absolute;
  bottom: -10px;
}
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
#main{
  position: relative;
  width: 1400px;
  left: 50%;
  margin-left: -700px;
}
#user{
  font-family: "Microsoft YaHei UI Light";
  position: absolute;
  right: 10px;
  top: 9px;
}
.userdesc{
  display: block;
  margin-top: 30px;
  margin-left: 100px;
  font-size: 32px;
}
#userchoose{
  margin-left: 160px;
  margin-top: 30px;
}
/*>>>.el-tabs--left{*/
/*  padding: 0 20px;*/
/*  height: 264px;*/
/*  -webkit-box-sizing: border-box;*/
/*  box-sizing: border-box;*/
/*  line-height: 94px;*/
/*  display: inline-block;*/
/*  list-style: none;*/
/*  font-size: 14px;*/
/*  font-weight: 500;*/
/*  color: #303133;*/
/*  position: relative;*/
/*  border-bottom: none;*/
/*}*/
>>>.el-tabs--left span{
  font-size: 14px;
}
>>>.el-tabs--card>.el-tabs__header .el-tabs__nav{
  border: none;
}
>>>.el-tabs--left.el-tabs--card .el-tabs__item.is-left{
  border: none;
}
#UserMessage{
  margin-left: 100px;
  margin-top: 3px;
}
#countdata{
  display: block;
  font-family: "Microsoft YaHei UI Light";
  font-size: 28px;
}
#mobile{
  display: block;
  margin-top: 15px;
}
#phone{
  width: 250px;
  margin-left: -5px;
}
#basicmessage{
  width: 600px;
  margin-top: 25px;
  font-family: Microsoft YaHei UI Light;
  font-size: 26px;
  height: 40px;
  line-height: 40px;
}
#edit:hover{
  cursor: pointer;
}
#message{
  margin-top: 5px;
  font-family: "Microsoft YaHei UI Light";
}
#message>span{
  display: inline-block;
  margin-top: 10px;
}
#message>span:nth-child(1){

}
#message>span:nth-child(2){
  margin-left: 400px;
}
#message>span:nth-child(3){
  margin-left: 30px;
}
#message>span:nth-last-child(1){
  margin-left: 375px;
}
.guo{
  display: inline-block;
  margin-top: 10px;
}
</style>