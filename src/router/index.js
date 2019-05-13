import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import category from '@/components/category'
import login from '@/components/user/login'
import registered from '@/components/user/registered'
import item from '@/components/item'
import user from '@/components/user/user'
import Boarding from '@/components/user/Boarding'
import baylist from '@/components/user/buyList'
import Nav from '@/store/components/nav'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'is_show',
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        nav: Nav,
        default: home
      },
      meta: {
        id: 0,
        keepAlive: true
      }
    },
    {
      path: '/category',
      name: 'category',
      components: {
        nav: Nav,
        default: category
      },
      meta: {
        id: 1,
        keepAlive: true
      }
    },
    {
      path: '/login',
      name: 'login',
      components: {
        nav: Nav,
        default: login
      },
      meta: {
        id: 2
      }
    },
    {
      path: '/item/:id?',
      name: 'item',
      component: item,
      meta: {
        id: 100
      }
    },
    {
      path: '/registered',
      name: 'registered',
      component: registered,
      meta: {
        id: 100
      }
    },
    {
      path: '/user',
      name: 'user',
      components: {
        nav: Nav,
        default: user
      },
      meta: {
        id: 3
      }
    },
    {
      path: '/Boarding',
      name: 'Boarding',
      component: Boarding,
      meta: {
        id: 100
      }
    },
    {
      path: '/baylist',
      name: 'baylist',
      component: baylist,
      meta: {
        id: 101
      }
    }
  ]
})
