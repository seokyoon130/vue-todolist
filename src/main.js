import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueLocalStorage from 'vue-localstorage'
import VueRouter from 'vue-router'
import Routes from './route.js'
import {store} from './store/store'

Vue.use(VueLocalStorage);
Vue.use(VueRouter);
Vue.use(VueResource);

// Vue.config.productionTip = false


const route = new VueRouter({ //registry for router
  routes : Routes,
  mode: "history" //by default mode is hash(#)
})

export const bus = new Vue();
new Vue({
  el: '#app',
  store: store,
  render: h => h(App),
  router : route
})