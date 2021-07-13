import Vue from 'vue'
import Vuex from 'vuex'
import th from "element-ui/src/locale/lang/th";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    basedata:"",
    pagemessageData:"",
    warncount:1,
    c1:"",
    c2:"",
    purCar:"",
    CarTypeId:"",
    CarData:"",
    BacImg:"http://127.0.0.1:8000/static/TayCan/Taybac/TaycanBac.png",
    BacTitle:"800V架构",
    BacDesc:"性能是保时捷的灵魂——各个方面皆是如此。正如  所展示的，即使在充电时：在理想条件下¹，其 800V 架构可支持高达 175kW 的充电功率，能够时刻准备好应对驾驶者的所有期盼：驾驶。"
  },
  mutations: {
    changCarTypeId(state,pk){
      state.CarTypeId = pk;
    },
    changeCarTDate(state,context){
      state.CarData = context
    },
    changeBacTitle(state,context){
      state.BacImg = context
    },
    changeBacImg(state,context){
      state.BacImg = context.image
      state.BacTitle = context.title
      state.BacDesc = context.desc
    },
    changeData(state,context){
      state.purCar = context
      console.log(state.purCar)
    },
    changec1(state,context){
      state.c1 = context
    },
    changec2(state,context){
      state.c2 = context
    },
    changec3(state,context){
      state.c3 = context
    },
    changewarncount(state){
      state.warncount += 1
    },
    changepagemessageData(state,context){
      state.CarData = context
      window.localStorage.setItem("list",JSON.stringify(state.CarData))
    },
    changebasepagemessageData(state,context){
      state.basedata = context
      window.localStorage.setItem("list2",JSON.stringify(state.CarData))
    }
  },
  actions: {
    UpdataCarData(context,payload){
      return new Promise((resolve,reject)=>{
        context.commit("changeData",payload)
        resolve(payload)
      })
    }
  }
})
