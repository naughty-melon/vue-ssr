import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a3e0e4dc = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _39b70147 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _053d1ffe = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _03ec4441 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _0adc548b = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _bb7e9856 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _2a92f0e4 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

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
    component: _a3e0e4dc,
    children: [{
      path: "",
      component: _39b70147,
      name: "home"
    }, {
      path: "/login",
      component: _053d1ffe,
      name: "login"
    }, {
      path: "/register",
      component: _053d1ffe,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _03ec4441,
      name: "profile"
    }, {
      path: "/settings",
      component: _0adc548b,
      name: "settings"
    }, {
      path: "/editor",
      component: _bb7e9856,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _2a92f0e4,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
