import Vue from 'vue'
import App from './App.vue'
import VueFullPage from "vue-fullpage.js/dist/vue-fullpage"
import router from './router/router'
import store from './store/store'
import Element from 'element-ui';
import $ from "jquery"
import 'element-ui/lib/theme-chalk/index.css'
import "fullpage.js/vendors/scrolloverflow"
import ApiUtils from "./common/ApiUtils";
import vueMiniPlayer from 'vue-mini-player'
import 'vue-mini-player/lib/vue-mini-player.css'
Vue.use(vueMiniPlayer)
Vue.use(VueFullPage)
Vue.prototype.$ = $
Vue.use(Element, { size: 'small', zIndex: 3000 });
Vue.config.productionTip = false
Vue.prototype.API = ApiUtils

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
