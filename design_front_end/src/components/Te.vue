<template>
  <div>
    <full-page :options="options" id="fullpage" ref="fullpage" v-cloak>
      <div class="section" :style="{backgroundImage:'url(' + bacimg +')'}">
        <div id="GoPage" @click="GoIndex">&lt;&lt;</div>
        <div class="slide" v-for="item in this.$store.state.CarData" v-cloak>
          <el-drawer
              :visible.sync="drawer"
              :direction="direction"
              :before-close="handleClose"
              :append-to-body=true
              :size="'100%'">
            <div>
            <nav id="nav1">
              <h1>{{cartechincal.name}}</h1>
              <ul id="navul">
                <li>{{ cartechincal.price }}*元起  <span class="navspan">制造商建议零售价(含增值税)</span></li>
                <li>{{cartechincal.bestpower}} / {{cartechincal.maxtorque}}<span class="navspan">最大功率 (kw)/最大功率 (PS)</span></li>
                <li>{{cartechincal.zerohundertime}}s <span class="navspan">0-100 km/h 加速时间</span></li>
                <li>{{cartechincal.maxspeed}} km/h <span class="navspan">最高时速</span></li>
              </ul>
            </nav>
            <header>
              <div id="modelcontrol">
                <img src="http://127.0.0.1:8000/static/718/718model.png" alt="">
              </div>
              <div id="tipsprice">
                * 所列的制造商建议零售价（含增值税）仅供参考，并不包括运输费用、税费（另有明确规定的除外）、牌照、所有权、非强制或地区性要求的设备。特别是，制造商建议零售价（含增值税）并未包含 2016 年 12 月 1 日起生效的《财政部、国家税务总局关于对超豪华小汽车加征消费税有关事项的通知》所要求加征的消费税。根据《关于深化增值税改革有关政策的公告》，自 2019 年 4 月 1 日起增值税税率进行调整。因此所列的厂商建议零售价将可能进行调整。请您与保时捷授权经销商咨询具体的价格信息。
              </div>
              <div id="navleft">
<!--                <h1>技术数据</h1>-->
                <el-collapse v-model="activeNames" @change="handleChange">
                  <el-collapse-item title="驱动单元 Driver Element" name="1">
                    <div class="controlnav"><span class="nleft">气缸数</span><span class="nright">{{cartechincal.number_of_cylinders}}</span></div>
                    <div class="controlnav"><span class="nleft">排量</span><span class="nright">{{cartechincal.displacement}} cm³</span></div>
                    <div class="controlnav"><span class="nleft">最大功率(kw)</span><span class="nright">{{cartechincal.bestpower}} kw</span></div>
                    <div class="controlnav"><span class="nleft">最大功率(PS)</span><span class="nright">{{cartechincal.maxtorque}} PS</span></div>
                    <div class="controlnav"><span class="nleft">最大功率对应发动机转速</span><span class="nright">{{cartechincal.mostpowerspeed}} rpm</span></div>
                    <div class="controlnav"><span class="nleft">发动机最高转速</span><span class="nright">{{cartechincal.enginemostspeed}} rpm</span></div>
                    <div class="controlnav"><span class="nleft">最大扭矩</span><span class="nright">{{cartechincal.maxtorque}} Nm</span></div>
                    <div class="controlnav"><span class="nleft">最大扭矩对应发动机转速</span><span class="nright">{{cartechincal.maximumSpeed}} rpm</span></div>
                  </el-collapse-item>
                  <el-collapse-item title="性能 Performance" name="2">
                    <div class="controlnav"><span class="nleft">最高时速</span><span class="nright">{{cartechincal.maxspeed}} km/h</span></div>
                    <div class="controlnav"><span class="nleft">0-100km/h加速时间</span><span class="nright">{{cartechincal.zerohundertime}} s</span></div>
                    <div class="controlnav"><span class="nleft">0-160km/h加速时间</span><span class="nright">{{cartechincal.zerohuntersix}} s</span></div>
                    <div class="controlnav"><span class="nleft">80-120kn/h加速时间</span><span class="nright">{{cartechincal.eightspped}} s</span></div>
                  </el-collapse-item>
                  <el-collapse-item title="车身 Car Body" name="3">
                    <div class="controlnav"><span class="nleft">长度</span><span class="nright">{{cartechincal.carlong}} mm</span></div>
                    <div class="controlnav"><span class="nleft">宽度</span><span class="nright">{{cartechincal.carwidth}} mm</span></div>
                    <div class="controlnav"><span class="nleft">宽度(包含后视镜)</span><span class="nright">{{cartechincal.carwidthmirror}} mm</span></div>
                    <div class="controlnav"><span class="nleft">高度</span><span class="nright">{{cartechincal.carheight}} mm</span></div>
                    <div class="controlnav"><span class="nleft">轴距</span><span class="nright">{{cartechincal.maxtorque}} mm</span></div>
                    <div class="controlnav"><span class="nleft">空载重量(中国)</span><span class="nright">{{cartechincal.weight}} kg</span></div>
                  </el-collapse-item>
                  <el-collapse-item title="容量 Capacity" name="4">
                    <div class="controlnav"><span class="nleft">行李厢容积(前)</span><span class="nright">{{cartechincal.contentarea}}</span></div>
                    <div class="controlnav"><span class="nleft">行李厢容积(前排座椅后，至车顶)</span><span class="nright">{{cartechincal.mostcontentarea}}</span></div>
                    <div class="controlnav"><span class="nleft">燃油箱</span><span class="nright">{{cartechincal.oilbox}}</span></div>
                  </el-collapse-item>
                  <el-collapse-item title="制造商建议零售价 Establish retail price" name="5">
                    <div class="controlnav"><span class="nleft">PDK</span><span class="nright">{{cartechincal.price}} 元起*</span></div>
                    <br>
                    <div>* 所列的制造商建议零售价（含增值税）仅供参考，并不包括运输费用、税费（另有明确规定的除外）、牌照、所有权、非强制或地区性要求的设备。特别是，制造商建议零售价（含增值税）并未包含 2016 年 12 月 1 日起生效的《财政部、国家税务总局关于对超豪华小汽车加征消费税有关事项的通知》所要求加征的消费税。根据《关于深化增值税改革有关政策的公告》，自 2019 年 4 月 1 日起增值税税率进行调整。因此所列的厂商建议零售价将可能进行调整。请您与保时捷授权经销商咨询具体的价格信息。</div>
                  </el-collapse-item>
                </el-collapse>
              </div>
            </header>
            </div>
          </el-drawer>
          <el-drawer
              :visible.sync="drawer2"
              :direction="direction2"
              :append-to-body="true"
              :size="'100%'"
              :before-close="handleClose">
            <el-drawer
                :append-to-body="true"
                :before-close="handleClose"
                :visible.sync="innerDrawer">
              <div id="innerbox">
                <ul v-for="i in carlist">
                  <li v-if="i.name !== c1.name" @click="comCar(i)">{{i.name}}</li>
                </ul>
              </div>
            </el-drawer>
            <div style="display: flex;width: 96vw;height: 600px;margin-top: -60px">
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
          </el-drawer>
          <div class="meta">
            <h2 id="controlheader">{{item.carheader}}</h2>
            <h4 id="price">{{ item.carprice }}*元起</h4>
            <img :src="item.carmodel" alt="">
            <div class="waote">
              <div>
                <span>
                  {{item.carpower}}
                </span><br>
                <span class="des">
                  最大功率(kw)/最大功率(PS)
                </span>
              </div>
              <div>
                <span>{{item.carspeeds}}s</span><br>
                <span class="des">0 - 100km/h加速时间</span>
              </div>
              <div>
                <span>{{item.cartime}} km/h</span><br>
                <span class="des">最高时速</span>
              </div>
              <div class="but">
                <div class="chi" @click="getData(item.id)" type="primary">
                  技术数据
                </div>
                <div class="chi"  @click="changedrawer2(item.id,token)" type="primary" >
                 购买
                </div>
                <div class="chi" @click="pushCompare(item.id)" type="primary">
                  比较
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="this.$store.state.CarTypeId === 4" class="section">
        <h2 id="TaycanHeader" style="font-size: 32px">Taycan设计理念</h2>
        <div id="TayCanHeaderLeft">
          <div>
            <video :src="require('@/../static/video/TaycanDesign.mp4')" loop autoplay muted></video>
          </div>
        </div>
        <el-button style="display: none"></el-button>
        <div id="TaycanHeaderRight">
          <div id="TaycanHeaderControl">
            <p style="position: absolute;top: -350px;font-size: 10px;width: 1000px;left: -1060px;text-align: left;font-family: 'Microsoft YaHei UI Light'">请注意，本页面所显示的车辆及/或车辆装备（包括但不限于充电装备）图片仅作为通用版本用于各个国家/地区展示和参考使用。由于各个国家/地区的法律要求（尤其是在车辆质量、安全性、网络安全、个人数据等的存储和传输等方面的法律要求）、市场情况（包括道路和网络现状等）、用户习惯（例如由于文化差异）的不同，您所购买的车辆可能在不同国家/地区会配置不同的装备。本页面所展示图片是保时捷为您所购买的车辆所制定的适用于各个国家/地区的通用版。因此，可能出现实际装备描述与本广告中的图示或描述有所不同的情形。</p>
            <h2 style="font-size: 32px;font-weight: 600;position: absolute;top: -50px;user-select: none">电驰 神往</h2>
          <p style="width: 378px;text-align: left;line-height: 28px;font-size: 18px;user-select: none">灵魂有其千面多样性，而从无固定形态。它是可变且不断变化着的——以各种方式将自己展现于人前。当您将目光投注于保时捷 Taycan，灵魂便一展微笑，表达出全然的喜悦之情。又或者，当 Taycan Turbo S 的 1.2g 静止起动性能一触即发时，您兴奋战栗到浑身起鸡皮疙瘩。</p>
          </div>
        </div>
      </div>
      <div v-else-if="this.$store.state.CarTypeId === 5" class="section">
        <div id="PanmeraHeaderLeft">
          <div>
            <img src="http://127.0.0.1:8000/static/Panamera/panamera/PanmeraShow.png"/>
          </div>
        </div>
        <div id="PanmeraHeaderRight">
          <div id="PanmeraheaderControl">
            <p style="position: absolute;top: -350px;font-size: 10px;width: 1000px;left: -1060px;text-align: left;font-family: 'Microsoft YaHei UI Light'">请注意，本页面所显示的车辆及/或车辆装备（包括但不限于充电装备）图片仅作为通用版本用于各个国家/地区展示和参考使用。由于各个国家/地区的法律要求（尤其是在车辆质量、安全性、网络安全、个人数据等的存储和传输等方面的法律要求）、市场情况（包括道路和网络现状等）、用户习惯（例如由于文化差异）的不同，您所购买的车辆可能在不同国家/地区会配置不同的装备。本页面所展示图片是保时捷为您所购买的车辆所制定的适用于各个国家/地区的通用版。因此，可能出现实际装备描述与本广告中的图示或描述有所不同的情形。</p>
            <h2 style="font-size: 32px;font-weight: 600;position: absolute;top: -50px;user-select: none">Panamera 理念</h2>
            <p style="width: 378px;text-align: left;line-height: 28px;font-size: 18px;user-select: none">幻想能够符合逻辑吗？可以符合逻辑吗？也许不。我们坚信，最初的幻想越是天马行空，最后的结果往往也越令人惊艳。Panamera 就是这种值得为之奋斗的梦想。一台供四人乘坐的跑车？兼备出色的运动性和出众的舒适性？

              同时兼具典型的保时捷动力和更高的效率？许多人认为这不可能，还有人称之为勇气可嘉</p>
          </div>
        </div>
      </div>
      <div v-else class="section">
<!--        <h3>-->
        <div class="video">
          <video :src="basedata.videoone" loop autoplay muted height="750px"></video>
        </div>
<!--        </h3>-->
        <div id="main">
          <h2 id="title">
            {{ basedata.firsttitle }}
          </h2>
          <span>{{basedata.firsttext}}</span>
          <button id="click">
            +探索更多内容
          </button>
        </div>
      </div>

      <div v-if="this.$store.state.CarTypeId === 4" class="section" id="control" :style="{backgroundImage: 'url(' + this.$store.state.BacImg + ')', backgroundSize:'contain',backgroundPosition:'top center',backgroundRepeat:'no-repeat'}">
        <div id="ControlDetail">
        <DetailShow></DetailShow>
        </div>
      </div>
      <div v-else-if="this.$store.state.CarTypeId === 5" class="section" id="control2" :style="{backgroundImage: 'url(' + this.$store.state.BacImg + ')', backgroundSize:'contain',backgroundPosition:'top center',backgroundRepeat:'no-repeat'}">
        <div id="ControlDetail2">
          <PanameraDetail></PanameraDetail>
        </div>
      </div>
      <div v-else class="section">
<!--        <h3>-->
        <div class="video">
          <video :src="basedata.videotwo" loop autoplay muted height="750px"></video>
<!--        </h3>-->
        </div>
        <div class="main_02">
          <h2 class="title_02">
            {{ basedata.secondtitle }}
          </h2>
          <span>{{basedata.secondtext}}</span>
          <button class="click_02">
            +探索更多内容
          </button>
        </div>
      </div>

      <div v-if="this.$store.state.CarTypeId === 4" class="section" id="c4">
        <ul id="Carmeaageul">
          <li class="z1">设计<span class="tipscar">查看内饰、外饰和可选车轮<i class="el-icon-arrow-right"></i></span></li>
          <li class="z2">性能<span class="tipscar">了解驱动装置、底盘和制动系统<i class="el-icon-arrow-right"></i></span></li>
          <li class="z3">充电<span class="tipscar">探索更多关于充电知识，在家充电和尊享充电的信息<i class="el-icon-arrow-right"></i></span></li>
          <li class="z4">舒适性<span class="tipscar">了解车内舒适性、信息娱乐和辅助功能<i class="el-icon-arrow-right"></i></span></li>
        </ul>
      </div>
      <div v-else-if="this.$store.state.CarTypeId === 5" class="section" id="c5">
        <ul id="Carmeaageul2">
          <li class="z1">设计<span class="tipscar">查看内饰、外饰和可选车轮<i class="el-icon-arrow-right"></i></span></li>
          <li class="z2">性能<span class="tipscar">了解驱动装置、底盘和制动系统<i class="el-icon-arrow-right"></i></span></li>
          <li class="z3">充电<span class="tipscar">探索更多关于充电知识，在家充电和尊享充电的信息<i class="el-icon-arrow-right"></i></span></li>
          <li class="z4">舒适性<span class="tipscar">了解车内舒适性、信息娱乐和辅助功能<i class="el-icon-arrow-right"></i></span></li>
        </ul>
      </div>
      <div v-else class="section">
<!--        <h3>-->
        <div class="video">
          <video :src="basedata.videothree" loop autoplay muted height="750px" width="1400px"></video></div>
        <div class="main_03">
          <h2 class="title_03">
            {{ basedata.thirddtitle }}
          </h2>
          <span>{{basedata.thirdtext}}</span>
          <button class="click_03">
            +探索更多内容
          </button>
        </div>
      </div>

      <div v-if="this.$store.state.CarTypeId === 4" class="section">
        <div class="video">
          <img id="male2" src="http://127.0.0.1:8000/static/TayCan/Taybac/TaycanMale.png" alt="" style="height: 750px"></div>
        <div class="main_04">
          <h2 class="title_04">
            Taycan
          </h2>
          <span>我们的工程师仅仅稍作停留便继续向前，正如您所见，Taycan就是我们的答案</span>
          <button class="click_04">
            +探索更多内容
          </button>
        </div>
      </div>
      <div v-else-if="this.$store.state.CarTypeId === 5" class="section">
        <div class="video">
          <img id="male3" src="http://127.0.0.1:8000/static/Panamera/panamera/PanameraShow2.png" alt="" style="height: 750px"></div>
        <div class="main_04">
          <h2 class="title_04">
            踏上旅途
          </h2>
          <span>人生是一段漫无目的的旅途，Panamera做的正是让您的旅途舒坦</span>
          <button class="click_04">
            +探索更多内容
          </button>
        </div>
      </div>
      <div v-else class="section">
<!--        <h3>-->
        <div class="video">
          <video :src="basedata.videofour" loop autoplay muted height="750px" width="1400px"></video></div>
        <div class="main_04">
          <h2 class="title_04">
            {{ basedata.fourdtitle }}
          </h2>
          <span>{{basedata.fourtext}}</span>
          <button class="click_04">
            +探索更多内容
          </button>
        </div>
      </div>
      <div class="section">
        <div>
        <h1>诗和远方，本该属于我们</h1>
        <div class="accordion">
          <ul>
            <li tabindex="1">
              <div>
                <a href="#">
                  <h2>阳光？夏天？</h2>
                  <p>这本该属于成功的您，放下所有，享受当下</p>
                </a>
              </div>
            </li>

            <li tabindex="2">
              <div>
                <a href="#">
                  <h2>微风和你</h2>
                  <p>有风拂过脸颊，掠起长发。月光如水平静柔和。我心如这月光，平静柔和。不敢去刻意追求什么，只是希望所有美好的开端都有一个美好的结局，一如这春夜长长远远。</p>
                </a>
              </div>
            </li>

            <li tabindex="3">
              <div>
                <a href="#">
                  <h2>兜个风？</h2>
                  <p>人世繁华多笑语，谁又空余两鬓风呢？</p>
                </a>
              </div>
            </li>

            <li tabindex="4">
              <div>
                <a href="#">
                  <h2>稳重</h2>
                  <p>您要的安全，我们都能给</p>
                </a>
              </div>
            </li>

            <li tabindex="5">
              <div>
                <a href="#">
                  <h2>风景</h2>
                  <p>要么读书要么旅行，灵魂和身体，必须有一个在路上。</p>
                </a>
              </div>
            </li>

            <li tabindex="6">
              <div>
                <a href="#">
                  <h2>身未动，心已远。</h2>
                  <p>每个人心中，都会有一个古镇情怀，流水江南，烟笼人家。</p>
                </a>
              </div>
            </li>
            <li tabindex="7">
              <div>
                <a href="#">
                  <h2>我们一定会达到那个远方</h2>
                  <p>对，当然得和你</p>
                </a>
              </div>
            </li>
          </ul>
        </div>
        <p class="about">
          By <a href="javascript:;" @click="GoIndex">Porsche</a>
        </p>
      </div>
        <div id="our">
          <MiniFotter :cleft="-180+'px'" :cnavl="640+'px'"></MiniFotter>
        </div>
      </div>
    </full-page>
  </div>
</template>

<script>
import MiniFotter from "../components/MiniFotter";
import $ from "jquery"
import DetailShow from "./DetailShow";
import PanameraDetail from "./PanameraDetail";
import axios from "axios";
export default {
  // beforeCreate() {
  //   if (sessionStorage.getItem("store")){
  //     this.$store.replaceState(
  //         Object.assign(
  //             {},
  //             this.$store.state,
  //             JSON.parse(sessionStorage.getItem("store"))
  //         )
  //     )
  //   }
  //   window.addEventListener("beforeunload",()=>{
  //     sessionStorage.setItem("store",JSON.parse(this.$store.state))
  //   })
  //   axios.get(this.API.API_PAGEBASEDATA +this.$store.state.CarTypeId).then(res => {
  //     this.basedata = res.data
  //   }).catch(err => {
  //     alert(err.data)
  //   })
  // },
  created() {
    if (window.localStorage.getItem("list") ) {
      this.$store.replaceState(Object.assign({},
          this.$store.state,JSON.parse(window.localStorage.getItem("list"))))
    }
  },
  beforeCreate() {
    axios.get(this.API.API_GET_DETAILCAR + sessionStorage.CarTypeIds).then(res => {
      this.$store.commit("changepagemessageData",res.data)
    })
  },
  mounted() {
    axios.get(this.API.API_PAGEBASEDATA + sessionStorage.CarTypeIds).then(res => {
      this.basedata = res.data
      this.$store.commit("changebasepagemessageData",res.data)
    }).catch(err => {
      alert(err.data)
    })
  },
  beforeDestroy() {
    $.fn.fullpage.destroy('all');
  },
  beforeRouteEnter(to,from,next){
    next(vm => {
      sessionStorage.routePrivew = from
      console.log(from)
    })
  },
  name: 'VueFullPage',
  label: process.env.LABEL,
  style: process.env.STYLE,
  data() {
    return {
      routePrivew:sessionStorage.routePrivew,
      token:sessionStorage.token,
      carlist:"",
      innerDrawer: false,
      c1:[],
      c2:[],
      fullscreenLoading: false,
      drawer2:false,
      direction2:"ttb",
      basedata:"",
      cartechincal:"",
      activeNames: ['1'],
      drawer: false,
      direction: 'btt',
      // CarType:"Taycan",
      options: {
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        afterLoad: this.afterLoad,
        navigation: true,
        // anchors: ['page1', 'page2', 'page3','page4'],
        navigationPosition: 'left', //导航小圆点的位置
        controlArrows: true,
        resize: true,
        //鼠标移动到小圆点上时显示出的提示信息
        navigationTooltips: ["第一页","第二页","第三页"],
        //是否显示横向幻灯片的导航
        slidesNavigation: true,
        // lockAnchors: true,
        // css3: true,
        //绑定菜单，设定相关属性和anchors的值对应后，菜单可以控制幻灯片滚动
        menu: '.nav',
        verticalCentered: true,
      },
      bacimg:require("@/../static/img/CarBac/Bac_01.webp"),
    };

  },
  methods: {
    goBack(){
      location.href = "/index"
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
              message:"说了让你先加第一辆车,怎么和倔的和头驴一样?",
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
    pushCompare(pk){
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      axios.get(this.API.API_CARTACHINCALDATA + pk + "/").then(res => {
        this.$store.commit("changec1",res.data)
        this.c1 = res.data
        loading.close();
        this.drawer2 = true
      }).catch(err => {
        const h = this.$createElement;
        loading.close();
        this.$message({
          message: h('p', null, [
            h('span', null, '服务内部错误 '),
            h('i', { style: 'color: red' }, 'ERROR:CODE 500')
          ])
        });
      })

    },
    handleChange(val) {
      console.log(val);
    },
    getData(pk){
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      console.log(pk);
      axios.get(this.API.API_CARTACHINCALDATA + pk + "/").then(res => {
        this.cartechincal = res.data
        console.log(this.cartechincal)
          loading.close();
          this.drawer = true;
      }).catch(err => {
        alert(err.data)
      })

    },
    changedrawer2(pk,token){
      if (sessionStorage.username === undefined){
        localStorage.rou = this.$route.path
        localStorage.pk = pk;
        location.href = "/login"
      }else {
        if (sessionStorage.token !== token){
          alert("小王八羔子,注意您的sql注入行为")
          location.href = "/index"
        }
        else {
          localStorage.pk = pk;
          sessionStorage.pk = pk;
          location.href = "/purchase"
        }
      }
      sessionStorage.token = response.data.token;
      sessionStorage.username = response.data.username;
      // this.$router.push("/purchase")
    },
    handleClose(done) {
      done()
    },
    GoIndex(){
      // this.$router.replace('/index')
      location.href = "/index"
    },
    afterLoad: function(origin, destination, direction) {
      console.log('After load....');
      console.log(destination);
      if (destination.index === 0){
        // this.$refs.fullpage.init();
      }
      if (destination.index === 1){
        if (this.$store.state.CarTypeId === 4){
          setTimeout(()=>{
            $("#TaycanHeader").slideUp("slow")
          },1500)
          $('video').get(parseInt(destination.index - 1)).play()
          setTimeout(()=>{
            $('#TayCanHeaderLeft').slideDown("slow");
          },2500)
          setTimeout(()=>{
            $('#TaycanHeaderRight').show("slow")
          },3000)
          const h = this.$createElement;
          this.$notify({
            title: '温馨提示',
            message: h('i', { style: 'color: red'}, '您很有眼光看上了我们的Taycan系列，但同时请注意个人隐私的安全，切勿在网络上随意留下自己联系方式--Porsche')
          });
        }
        else if (this.$store.state.CarTypeId === 5){

        }
        else {
          this.dis()
          $('video').get(parseInt(destination.index - 1)).play()
          // this.$refs.fullpage.init();
        }

      }else if (destination.index === 2){
        if (this.$store.state.CarTypeId === 4 || this.$store.state.CarTypeId === 5){
          console.log("待处理哦")
        }
        else {
          this.dis_02()
          $('video').get(parseInt(destination.index - 1)).play()
          console.log("第三页")
        }
        // this.$refs.fullpage.init();

      }else if (destination.index === 3){
        if (this.$store.state.CarTypeId === 4 || this.$store.state.CarTypeId === 5){
          setTimeout(()=>{
            $(".z1").fadeIn("slow")
          },1000)
          setTimeout(()=>{
            $(".z2").fadeIn("slow")
          },1400)
          setTimeout(()=>{
            $(".z3").fadeIn("slow")
          },1800)
          setTimeout(()=>{
            $(".z4").fadeIn("slow")
          },2200)
        }
        else {
          this.dis_03()
          $('video').get(parseInt(destination.index - 1)).play()
          this.$refs.fullpage.init();
        }

      }else if (destination.index === 4){
        if (this.$store.state.CarTypeId === 4 || this.$store.state.CarTypeId === 5){
          this.dis_04()
        }
        else {
          this.dis_04()
          $('video').get(parseInt(destination.index - 1)).play()
        }
        this.$refs.fullpage.init();
      }else if (destination.index === 5){
        this.$refs.fullpage.init();
      }
    },
    dis(){
      setTimeout(()=>{
        $("#main").slideDown("slow")
      },1200)
    },
    dis_02(){
      setTimeout(()=>{
        $(".main_02").fadeIn("slow")
      },1200)
    },
    dis_03(){
      setTimeout(()=>{
        $(".main_03").show("slow")
      },1200)
    },
    dis_04(){
      setTimeout(()=>{
        $(".main_04").show("slow")
      },800)
    }
  },
  components:{
    MiniFotter,
    DetailShow,
    PanameraDetail
  },
};
</script>

<style scoped>
@import "../../static/css/Detail/style.css";
@import "../../static/css/Detail/bottom.css";
@import "../../static/css/Detail/Taycan.css";
@import "../../static/css/Detail/Panamera.css";
/*img{*/
/*  width:100%; height:100%;*/
/*}*/
.video{
  width: 1550px;
  height: 750px;
}
video{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
#our{
  z-index: 1111;
  margin: 10px auto;
  /*margin-top:0px;*/
  /*margin-top: -130px;*/
  bottom: 10px;
}
#controlheader{
  width: 700px;
  position: absolute;
  transform: translate(-50%);
  left: 50%;
}
#price{
  position: relative;
  transform: translate(-50%);
  left: 50%;
}
#c4{
  background: url("http://127.0.0.1:8000/static/TayCan/Taybac/TaycanMain.png") no-repeat top center;
  background-size: cover;
}
#c5{
  background: url("http://127.0.0.1:8000/static/Panamera/panamera/PanameraMain.png") no-repeat top center;
  background-size: cover;
}
</style>