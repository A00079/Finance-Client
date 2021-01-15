import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";
import standardAPI from "@/utils/StandardAPI";
import VueStripeMenu from "vue-stripe-menu";

Vue.use(VueStripeMenu);

// Import build styles
import "vue-stripe-menu/dist/vue-stripe-menu.css";

window.standardAPI = Vue.$standardAPI = Vue.prototype.$standardAPI = standardAPI(
  { baseurl: "" }
);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
