import Vue from 'vue'
import Router from 'vue-router'
import VueAnalytics from 'vue-analytics'
import VueScrollTo from 'vue-scrollto'
import Vue2Filters from 'vue2-filters'
import vueSmoothScroll from 'vue-smooth-scroll'
Vue.use(vueSmoothScroll)
Vue.use(Vue2Filters)
// Components
import Hello from '@/components/Hello'
import NotFound from '@/components/NotFound'
import HireMe from '@/components/HireMe'
// Projects
Vue.use(Router)
Vue.use(VueScrollTo)
Vue.use(VueAnalytics, {
  id: 'UA-6874650-30'
})

export default new Router({
  mode: 'history',
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) {
      var options = {
        easing: 'ease-in',
        offset: -60,
        cancelable: true,
        onDone: function () {
          // scrolling is done
        },
        onCancel: function () {
          // scrolling has been interrupted
        }
      }
      VueScrollTo.scrollTo(to.hash, options)
    }
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  },
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
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
