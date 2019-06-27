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
      component: () => import('./views/index.vue'),
      children: [
        {
          path: '/tableList',
          name: 'tableList',
          meta: {
            title: '列表'
          },
          component: () => import('./views/table/tableList.vue')
        },
        {
          path: '/formTimeList',
          name: 'formTimeList',
          meta: {
            title: '表单时间线'
          },
          component: () => import('./views/form/formTimeList.vue')
        }
      ]
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
