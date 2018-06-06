import Vue from 'vue'
import Router from 'vue-router'
import DreamHome from '@/views/DreamHome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DreamHome',
      component: DreamHome
    }
  ]
})
