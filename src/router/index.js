import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Pinyinka from '@/components/pinyinka'
import Shizishang from '@/components/shizi1'
import Shizixia from '@/components/shizi2'
import pyList from '@/components/pyList'
import pyDetail from '@/components/pyDetail'
import sz1List from '@/components/sz1List'
import sz1Detail from '@/components/sz1Detail'
import sz2List from '@/components/sz2List'
import sz2Detail from '@/components/sz2Detail'
import introduce from '@/components/introduce'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/fx',
      name: 'fx',
      component: Pinyinka
    },
    {
      path: '/fx1',
      name: 'fx1',
      component: Shizishang
    },
    {
      path: '/fx2',
      name: 'fx2',
      component: Shizixia
    },
    {
      path: '/pyList/:cid',
      name: 'pyList',
      component: pyList
    },
    {
      path: '/pyDetail/:id/:cid',
      name: 'pyDetail',
      component: pyDetail
    },
    {
      path: '/sz1List/:cid',
      name: 'sz1List',
      component: sz1List
    },
    {
      path: '/sz1Detail/:id/:cid',
      name: 'sz1Detail',
      component: sz1Detail
    },
    {
      path: '/sz2List/:cid',
      name: 'sz2List',
      component: sz2List
    },
    {
      path: '/sz2Detail/:id/:cid',
      name: 'sz2Detail',
      component: sz2Detail
    },
    {
      path: '/introduce/:vid',
      name: 'introduce',
      component: introduce
    }
  ]
})
