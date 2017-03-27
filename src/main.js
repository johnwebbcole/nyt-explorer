// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import axios from 'axios'
// import state from './services/state'

Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.prototype.$http = axios

Vue.material.registerTheme('default', {
  primary: 'blue-grey',
  accent: 'green',
  warn: 'red',
  background: 'white'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
