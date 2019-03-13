import Vue from "vue";
import App from "./App.vue";
import Jeremy from "./components/jeremy/Jeremy.vue";

import VueRouter from "vue-router";
import MyHeader from "./components/MyHeader";
import GeoffsComponent from "./components/Geoff/GeoffsComponent";
import Home from "./components/Home.vue"


Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home},
  { path: "/geoffscomponent", component: GeoffsComponent },
  { path: "/jeremy", component: Jeremy }
];


const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
