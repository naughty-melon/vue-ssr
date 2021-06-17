import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _49283084 = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _67c08e8e = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _8fe0b262 = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _683000e2 = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _425802fd = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _3d5956c7 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _9a9b7a48 = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _49283084,
    children: [{
      path: "",
      component: _67c08e8e,
      name: "home"
    }, {
      path: "/login",
      component: _8fe0b262,
      name: "login"
    }, {
      path: "/register",
      component: _8fe0b262,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _683000e2,
      name: "profile"
    }, {
      path: "/settings",
      component: _425802fd,
      name: "settings"
    }, {
      path: "/editor",
      component: _3d5956c7,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _9a9b7a48,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
