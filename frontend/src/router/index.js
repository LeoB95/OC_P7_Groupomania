import Vue from 'vue'
import VueRouter from 'vue-router'
import Signup from '../views/sign-up.vue'
import Posts from "../views/posts-list.vue";
import Account from "../views/account-user.vue";
import Home from '../views/home-page.vue'
import Administrateur from '../views/admin-user.vue'


Vue.use(VueRouter)

const routes = [{
    name: 'Signup',
    path: '/sign-up',
    component: Signup,
  },
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
    name: 'Posts',
    path: '/posts-list',
    component: Posts,
  },
  {
    name: 'Account',
    path: '/account-user',
    component: Account,
    props: true
  },
  {
    name: 'Administrateur',
    path: '/admin-user',
    component: Administrateur,
  },
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router