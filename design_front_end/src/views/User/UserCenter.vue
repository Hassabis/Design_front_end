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
            <sapn class="userdesc" style="font-family: 'Microsoft YaHei UI Light'">您好，{{ username }}：</sapn>
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
                      <span id="edit" style="float: right;color: deepskyblue" @click="dialog = true" type="primary"><i class="el-icon-s-tools">编辑</i></span>
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
                              <el-input v-model="form.Mprofession">{{profession}}</el-input>
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
                        <span class="guo">{{ username }}</span>
                      </span>
                      <span class="message" id="guoguo2">
                        性别 <br>
                        <span class="guo" id="guo2">{{ gender }}</span>
                      </span><br>
                      <span class="message">
                        生日<br>
                        <span class="guo">{{ birthday }}</span>
                      </span>
                      <span class="message" id="guoguo">
                        职业 <br>
                        <span class="guo" id="guo">{{ profession }}</span>
<!--                        <span class="guo" id="guo"></span>-->
                      </span>
                    </div>
                  </div>
                </el-tab-pane>
                <el-tab-pane>
                  <span slot="label" @click="getAdderss(sessionStorage.user_id)">
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
                      <div class="detail" style="font-family: 'Microsoft YaHei UI Light'" v-for="i in adderss">
                        <h3>{{ i.adderssusername }}</h3>
                        <span style="display: block;margin-top: 10px">手机:{{i.phone}}</span><br>
                        <span style="display: block;margin-top: -5px">地址：{{i.adderss}}</span>
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
                  <div v-if="collect.length === 1" id="collection">
                    <span id="collect">尚未添加任何收藏</span>
                    <span id="gotocollection">请您前往汽车页面，添加爱车至我的收藏后查看。</span>
                  </div>
                </el-tab-pane>
              </el-tabs>
            </div>
          </el-tab-pane>
          <el-tab-pane label="我的订单" name="second">
            <span class="userdesc" style="font-family: 'Microsoft YaHei UI Light'">您好，{{username}}：</span>
          </el-tab-pane>
          <el-tab-pane label="我的车辆" name="third">
            <span class="userdesc" style="font-family: 'Microsoft YaHei UI Light'">您好，{{ username }}：</span>
          </el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth">
            <span class="userdesc" style="font-family: 'Microsoft YaHei UI Light'">您好，{{ username }}：</span>
          </el-tab-pane>
        </el-tabs>
        <div id="user">
          欢迎您：{{username}}
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
import axios from "axios";
export default {
  mounted() {
    let username = sessionStorage.username;
    let birthday = sessionStorage.birthday
    let profession = sessionStorage.profession
    let uid = sessionStorage.user_id
    if (username === undefined){
      location.href = '/login';
      return;
    }
    if (sessionStorage.gender === true){
      this.gender = "男"
    }else {
      this.gender = "女"
    }
    // this.gender = sessionStorage.gender === false ? "女":"男"
    this.username = username
    this.birthday = birthday
    this.profession = profession
    this.form.name = this.username
    this.form.Mprofession = this.profession
    this.form.region = this.gender
    this.uid = uid
    console.log(uid)
    axios.get(this.API.API_ADDERSS_MANAGE + uid + "/").then(res => {
      this.adderss = res.data
    })
    console.log(this.adderss)
  },
  watch:{

  },
  name: "UserCenter",
  data() {
    return {
      Axiosadderss:"",
      gender:'',
      profession:'',
      birthday:'',
      username:'',
      dialog:false,
      timer: null,
      loading:false,
      activeName: 'first',
      tabPosition: 'left',
      input: '',
      drawer: false,
      direction: 'rtl',
      adderss:"",
      collect:[
        {
          carname:"Porsche 911",
          price:"65,0000"
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
        desc: '',
        Mprofession:''
      }
    };
  },
  methods: {
    getAdderss(pk){
      axios.get(this.API.API_ADDERSS_MANAGE + uid + "/").then(res => {
        this.Axiosadderss = res.data
      })
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleClose(done) {
      let formdata = this.form
      if (this.loading) {
        return;
      }
      this.$confirm('确认提交嘛？')
          .then(_ => {
            this.loading = true;
              done();
              axios.put(this.API.API_POST_MODIFYUSERMESSAGE,{
                "data":formdata,
                "uid":this.uid
              }).then(res => {
                console.log(res.data)
                this.username = res.data.username
                this.profession = res.data.profession
                this.birthday = res.data.birthday
                this.gender = res.data.gender === false ? "女":"男"
                this.loading = false;
                // sessionStorage.token = response.data.token;
                sessionStorage.username = res.data.username
                sessionStorage.user_id = res.data.id;
                sessionStorage.birthday = res.data.birthday
                sessionStorage.profession = res.data.profession
                sessionStorage.gender = res.data.gender
                console.log(sessionStorage.gender)
              }).catch(err => {
                alert(err.data)
              })
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
@import "/static/css/user/User.css";
</style>