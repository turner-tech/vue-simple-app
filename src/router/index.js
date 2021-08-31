import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import TaskView from '../views/TaskView.vue'
import UsersView from '../views/UsersView.vue'
import About from '../views/About'

const routes = [
  {
    path: '/',
    alias: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/task',
    alias: '/tasks',
    name: 'TaskView',
    component: TaskView
  },
  {
    path: '/users',
    alias: '/user',
    name: 'UsersView',
    component: UsersView
  },
  {
    path: '/about',
    name: 'About',
    component: About
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue"),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
