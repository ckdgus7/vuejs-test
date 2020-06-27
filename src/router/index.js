import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LifeCycleHook',
    // route level code-splitting
    // this generates a separate chunk (LifeCycleHook.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "LifeCycleHook" */ '../views/LifeCycleHook.vue'
      ),
  },
  {
    path: '/dom-render',
    name: 'DomRender',
    // route level code-splitting
    // this generates a separate chunk (DomRender.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "DomRender" */ '../views/DomRender.vue'),
  },
  {
    path: '/vshow-vif-keepalive',
    name: 'VshowVif',
    // route level code-splitting
    // this generates a separate chunk (VshowVif.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "VshowVif" */ '../views/VshowVif.vue'),
  },
  {
    path: '/vuex',
    name: 'vuex',
    // route level code-splitting
    // this generates a separate chunk (Vuex.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Vuex" */ '../views/Vuex.vue'),
  },
  {
    path: '/froala-editor',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "About" */ '../views/About.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
