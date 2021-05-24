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
                      <span id="edit" style="float: right;color: deepskyblue" @click="dialog = true" type="primary">编辑</span>
                      <el-drawer
                          title="个人基本信息修改"
                          :before-close="handleClose"
                          :visible.sync="dialog"
                          :direction="direction"
                          custom-class="demo-drawer"
                          ref="drawer"
                      >
                        <div class="demo-drawer__content">
                          <el-form ref="form" :model="form" label-width="80px">
                            <el-form-item label="姓名">
                              <el-input v-model="form.name"></el-input>
                            </el-form-item>
                            <el-form-item label="性别">
                              <el-select v-model="form.region" placeholder="靓仔还是崽崽">
                                <el-option label="男" value="male"></el-option>
                                <el-option label="女" value="female"></el-option>
                              </el-select>
                            </el-form-item>
                            <el-form-item label="生日">
                              <el-col :span="11">
                                <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                              </el-col>
                            </el-form-item>
                            <el-form-item label="职业">
                              <el-input v-model="form.name"></el-input>
                            </el-form-item>
                          <div class="demo-drawer__footer">
                            <el-button type="primary" @click="$refs.drawer.closeDrawer()" :loading="loading">{{ loading ? '提交中 ...' : '确 定' }}</el-button>
                            <el-button @click="cancelForm">不改了不改了</el-button>
                          </div>
                          </el-form>
                        </div>
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
<!--                        <span class="guo">{{value2.getFullYear()+'-'+ (value2.getMonth() + 1) +'-'+ value2.getDate() }}</span>-->
                        <span class="guo">2001-02-11</span>
                      </span>
                      <span class="message">
                        职业 <br>
                        <span class="guo">学生</span>
                      </span>
                    </div>
                    <article>
                      <div id="motto">
                        <span>MOTTO：如果要飞得高，就该把地平线忘掉；既然非要有人成功，那个人为什么不能是你？</span>
                      </div>
                    </article>
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
                  <div id="home">
                    <span id="homeadderss">收货地址</span>
                  </div>
                  <div v-if="adderss.length === 0" id="hasno">
                    <i class="el-icon-circle-plus" style="cursor: pointer;color: deepskyblue;font-size: 18px">新增收货地址</i>
                  </div>
                  <div v-else id="have" style="width: 370px;text-align: left">
                    <div id="daddy">
                      <div class="detail" style="font-family: 'Microsoft YaHei UI Light'">
                        <h3>樊莲果</h3><h4 id="default">默认地址</h4>
                        <span style="display: block;margin-top: -40px">手机:18670488561</span><br>
                        <span style="display: block;margin-top: -5px">地址：广东省广州市白云区</span>
                        <div class="opertion">
                          <span>编辑</span><span>删除</span>
                        </div>
                      </div>
                      <div class="detail" style="font-family: 'Microsoft YaHei UI Light'">
                        <h3>樊莲果</h3>
                        <span style="display: block;margin-top: 10px">手机:18670488561</span><br>
                        <span style="display: block;margin-top: -5px">地址：广东省广州市白云区</span>
                        <div class="opertion">
                          <span>编辑</span><span>删除</span>
                        </div>
                      </div>
                      <div class="detail" style="font-family: 'Microsoft YaHei UI Light'">
                        <h3>樊莲果</h3>
                        <span style="display: block;margin-top: 10px">手机:18670488561</span><br>
                        <span style="display: block;margin-top: -5px">地址：广东省广州市白云区</span>
                        <div class="opertion">
                          <span>编辑</span><span>删除</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </el-tab-pane>
                <el-tab-pane>
                  <span slot="label">
                    <i class="el-icon-star-off"></i> 我的收藏
                  </span>

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
import $ from "jquery"
export default {
  name: "UserCenter",
  data() {
    return {
      dialog:false,
      timer: null,
      loading:false,
      activeName: 'first',
      tabPosition: 'left',
      input: '',
      drawer: false,
      direction: 'rtl',
      adderss:[
        {
          name:"崽崽"
        }
      ],
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date());
          }
        }, {
          text: '昨天',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
          }
        }, {
          text: '一周前',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
          }
        }]
      },
      value1: '',
      value2: '',
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleClose(done) {
      if (this.loading) {
        return;
      }
      this.$confirm('确认提交嘛？')
          .then(_ => {
            this.loading = true;
            this.timer = setTimeout(() => {
              done();
              // 动画关闭需要一定的时间
              setTimeout(() => {
                this.loading = false;
              }, 400);
            }, 2000);
          })
          .catch(_ => {});
      console.log(this.value2)
    },
    cancelForm() {
      this.loading = false;
      this.dialog = false;
      clearTimeout(this.timer);
    }
  },
  handleClick2(tab, event) {
    console.log(tab, event);
  },
  components:{
    MiniFotter
  },
  computed:{
    // birthday(){
    //   return this.value2.getFullYear() +'-'+ this.value2.getMonth() + 1 + '-' + this.value2.getDate()
    // }
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
#motto{
  font-family: "Microsoft YaHei UI Light";
  margin-top: 70px;
}
#home{
  margin-left: 100px;
  margin-top: 3px;
}
#homeadderss{
  display: block;
  font-family: "Microsoft YaHei UI Light";
  font-size: 28px;
}
#hasno{
  margin-left: 95px;
  margin-top: 34px;
}
#have{
  position: relative;
  margin-left: 100px;
  margin-top: 25px;
  border-radius: 10px;
  /*padding-left: 10px;*/
  /*padding-top: 2px;*/
  /*padding-bottom: 10px;*/
}
.opertion{
  margin-top: 15px;
}
.opertion>span{
  text-align: center;
  display: inline-block;
  color: deepskyblue;
}
.opertion>span:nth-last-child(1){
  margin-left: 10px;
}
#default{
  position: relative;
  right: -230px;
  font-size: 12px;
  padding: 1px;
  width: 100px;
  text-align: center;
  border-radius: 10px;
  border: 2px solid darkkhaki;
  top: -40px;
}
#inner>span{
  display: inline-block;
}
#daddy{
  width: 360px;
  /*background-color: salmon;*/
  overflow: auto;
  height:300px;
}
.detail{
  padding-top: 5px;
  padding-left: 10px;
  padding-bottom: 10px;
  background-color: #e3e4e4;
  margin-top: 25px;
}
.demo-drawer__footer{
  margin-left: 81px;
}
</style>