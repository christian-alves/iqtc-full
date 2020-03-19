import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _8e063bda = () => interopDefault(import('..\\pages\\course\\index.vue' /* webpackChunkName: "pages_course_index" */))
const _6f4694ea = () => interopDefault(import('..\\pages\\register\\index.vue' /* webpackChunkName: "pages_register_index" */))
const _064dafa8 = () => interopDefault(import('..\\pages\\signin\\index.vue' /* webpackChunkName: "pages_signin_index" */))
const _60e82d4e = () => interopDefault(import('..\\pages\\user\\courses\\index.vue' /* webpackChunkName: "pages_user_courses_index" */))
const _471b658a = () => interopDefault(import('..\\pages\\course\\_id.vue' /* webpackChunkName: "pages_course__id" */))
const _5c38e0ab = () => interopDefault(import('..\\pages\\course\\_name.vue' /* webpackChunkName: "pages_course__name" */))
const _0668d08e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/course",
    component: _8e063bda,
    name: "course"
  }, {
    path: "/register",
    component: _6f4694ea,
    name: "register"
  }, {
    path: "/signin",
    component: _064dafa8,
    name: "signin"
  }, {
    path: "/user/courses",
    component: _60e82d4e,
    name: "user-courses"
  }, {
    path: "/course/:id",
    component: _471b658a,
    name: "course-id"
  }, {
    path: "/course/:name",
    component: _5c38e0ab,
    name: "course-name"
  }, {
    path: "/",
    component: _0668d08e,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
