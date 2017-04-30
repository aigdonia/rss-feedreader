import Vue from 'vue'
import VueRouter from 'vue-router'
import FeedPane from './components/FeedPane'
import HomePane from './components/HomePane'

Vue.use(VueRouter)

// App routes should be added here
var routes = [
  { path: '/', component: HomePane },
  { path: '/feed/:feedId', component: FeedPane }
]

export const router = new VueRouter({
  routes,
  mode: 'history'
})
