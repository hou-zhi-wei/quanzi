import Vue from 'vue'
import VueRouter from 'vue-router'
import Nprogress from 'nprogress';
import 'nprogress/nprogress.css';

//我的
import my from "../views/my.vue"
import quanzi from "../views/quanzi.vue"
import home from "../views/home.vue"
// 登录
import login from "../views/login.vue"
//注册 
import register from "../views/register.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:"/home/quanzi"
  },
  {
    path:"/register",
    component:register
  },
  {
    path:"/login",
    component:login
  },
  {
    path:"/home",
    component:home,
    children:[
      {
        path:"/home/my",
        component:my
      },
      {
        path:"/home/quanzi",
        component:quanzi
      }
    ]
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const whiteList = ['/login', '/register']
router.beforeEach((to, from, next)=>{
  Nprogress.start();
  let isLogin = window.sessionStorage.getItem('isLogin');

  if (!isLogin){
    if (whiteList.indexOf(to.path) === -1){
      Nprogress.done();
      next('/login');
    }else{
      next();
    }
  }else{
    next();
  }
})

router.afterEach((to, from)=>{
  Nprogress.done();
})
export default router

