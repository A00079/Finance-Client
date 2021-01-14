import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import standardAPI from "@/utils/StandardAPI";
window.standardAPI = Vue.$standardAPI = Vue.prototype.$standardAPI = standardAPI({ baseurl: ""});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
