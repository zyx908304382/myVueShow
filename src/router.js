import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      meta: {
        title: '首页'
      },
      component: () => import('./views/index.vue')
    },
    {
      path: '*',
      name: 'Error',
      meta: {
        title: '404页面不存在'
      },
      component: () => import('./views/404.vue')
    }
  ]
})

export default router
