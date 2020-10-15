import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/select',
    component: () => import('@/views/select/index'),
    hidden: false
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: '首页',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },

  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/page',
    name: '权限说明',
    meta: {
      title: '权限说明',
      icon: 'user',
      roles: ['admin'] // you can set roles in root nav
    },
    children: [

      {
        path: 'directive',
        component: () => import('@/views/permission/directive'),
        name: '权限说明',
        meta: {
          title: '权限说明',
          // if do not set roles, means: this page does not require permission
          roles: ['admin']
        }
      }

    ]
  }

]

export const asyncRoutes = [
  {
    path: '/permission',
    component: Layout,
    children: [
      {
        path: 'role',
        component: () => import('@/views/permission/role'),
        name: '权限设置',
        meta: {
          title: '权限设置',
          icon: 'repair',
          roles: ['admin']
        }
      }
    ]
  },
  {
    path: '/purchase',
    component: Layout,
    children: [
      {
        path: 'index',
        name: '夹具采购',
        component: () => import('@/views/purchase/index'),
        meta: { title: '夹具采购', icon: 'shopping', roles: ['manager', 'Operator2', 'admin', 'supervisor'] }
      }
    ]
  },

  {
    path: '/lend',
    component: Layout,
    children: [
      {
        path: 'index',
        name: '夹具出库',
        component: () => import('@/views/lend/index'),
        meta: { title: '夹具出库', icon: 'lend', roles: ['manager', 'Operator1', 'Operator2', 'admin', 'supervisor'] }
      }
    ]
  },

  {
    path: '/scrap',
    component: Layout,
    children: [
      {
        path: 'index',
        name: '夹具报废',
        component: () => import('@/views/scrap/index'),
        meta: { title: '夹具报废', icon: 'scrap', roles: ['manager', 'Operator2', 'admin', 'supervisor'] }
      }
    ]
  },

  {
    path: '/repair',
    component: Layout,
    children: [
      {
        path: 'index',
        name: '夹具报修',
        component: () => import('@/views/repair/index'),
        meta: { title: '夹具报修', icon: 'repair', roles: ['manager', 'Operator1', 'Operator2', 'admin', 'supervisor'] }
      }
    ]
  },

  {
    path: '/redefinition',
    component: Layout,
    children: [
      {
        path: 'index',
        name: '夹具信息修改',
        component: () => import('@/views/redefinition/index'),
        meta: { title: '夹具信息修改', icon: 'redefinition', roles: ['manager', 'Operator2', 'admin', 'supervisor'] }
      }
    ]
  },

  {
    path: '/purchaseVerify',
    component: Layout,
    children: [
      {
        path: 'index',
        name: '夹具采购审核',
        component: () => import('@/views/purchaseVerify/index'),
        meta: { title: '夹具采购审核', icon: 'shopping', roles: ['manager', 'admin', 'supervisor'] }
      }
    ]
  },
  {
    path: '/lendVerify',
    component: Layout,
    children: [
      {
        path: 'index',
        name: '夹具出库审核',
        component: () => import('@/views/lendVerify/index'),
        meta: { title: '夹具出库审核', icon: 'lend', roles: ['manager', 'admin', 'supervisor'] }
      }
    ]
  },

  {
    path: '/scrapVerify',
    component: Layout,
    children: [
      {
        path: 'index',
        name: '夹具报废',
        component: () => import('@/views/scrapVerify/index'),
        meta: { title: '夹具报废', icon: 'scrap', roles: ['manager', 'Operator2', 'admin', 'supervisor'] }
      }
    ]
  },

  {
    path: '/repairVerify',
    component: Layout,
    children: [
      {
        path: 'index',
        name: '夹具报修审核',
        component: () => import('@/views/repairVerify/index'),
        meta: { title: '夹具报修审核', icon: 'repair', roles: ['manager', 'Operator2', 'admin', 'supervisor'] }
      }
    ]
  },

  {
    path: '/admin',
    component: Layout,
    children: [
      {
        path: 'index',
        name: '人员管理',
        component: () => import('@/views/admin/index'),
        meta: { title: '人员管理', icon: 'user', roles: ['admin'] }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
