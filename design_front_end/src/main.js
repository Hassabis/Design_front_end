import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import Element from 'element-ui';
import $ from "jquery"
import 'element-ui/lib/theme-chalk/index.css'
Vue.prototype.$ = $
Vue.use(Element, { size: 'small', zIndex: 3000 });
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
