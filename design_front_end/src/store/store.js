import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    CarTypeId:"",
    CarData:"",
  },
  mutations: {
    changCarTypeId(state,pk){
      state.CarTypeId = pk;
    },
    changeCarTDate(state,context){
      state.CarData = context
    }
  },
  actions: {

  }
})
