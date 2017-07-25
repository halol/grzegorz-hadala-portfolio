import Vue from 'vue'
import Router from 'vue-router'
// Components
import Hello from '@/components/Hello'
import NotFound from '@/components/NotFound'
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
      name: 'MyWay',
      component: MyWay
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
