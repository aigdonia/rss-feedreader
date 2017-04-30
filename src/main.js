import Vue from 'vue'
import Lazyload from 'vue-lazyload'
import App from './App'
import { store } from './store'
import { router } from './routes'

Vue.use(Lazyload, {
  preLoad: 1.3,
  attempt: 1
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: store,
  router: router,
  template: '<App/>',
  components: { App }
})
