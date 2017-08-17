import Vue from 'vue'
import Router from 'vue-router'
import VueAnalytics from 'vue-analytics'
// Components
import Hello from '@/components/Hello'
import NotFound from '@/components/NotFound'
import HireMe from '@/components/HireMe'
// Projects
import MyWay from '@/projects/MyWay'

Vue.use(Router)
Vue.use(VueAnalytics, {
  id: 'UA-6874650-30'
})

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/myway',
      name: 'myway',
      component: MyWay
    },
    {
      path: '/hireme',
      name: 'hireme',
      component: HireMe

    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
