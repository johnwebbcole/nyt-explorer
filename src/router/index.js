import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import List from '@/components/List'
import Config from '@/components/Config'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/home/:id?',
      name: 'Home',
      component: Home,
      props: true
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/config',
      name: 'Config',
      component: Config
    }
  ]
})
