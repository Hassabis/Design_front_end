import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
  },
  actions: {

  }
})
