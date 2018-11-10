import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Yaro from '@/components/Yaro'
import Login from '@/components/auth/Login'
import Register from '@/components/auth/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/yaro',
      name: 'Yaro',
      component: Yaro
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }

  ],
  mode:'history'
})
