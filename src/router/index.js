import Vue from 'vue'
import Router from 'vue-router'
// Components
import Hello from '@/components/Hello'
import NotFound from '@/components/NotFound'
import HireMe from '@/components/HireMe'
// Projects
import MyWay from '@/projects/MyWay'

Vue.use(Router)

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
