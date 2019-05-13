// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible'
import 'swiper/dist/css/swiper.css'
import store from './store'
import axios from 'axios'
import Qs from 'qs'
import './assets/css/app.css'
import plugins from './assets/plugins/components'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
Vue.prototype.axios = axios
Vue.prototype.qs = Qs
Vue.use(plugins)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
