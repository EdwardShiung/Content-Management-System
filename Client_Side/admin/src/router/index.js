import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardLayout from '../views/DashboardLayout'
import Dashboard from '../views/Dashboard'
import NotFound from '../views/404'
import LoginAndRegister from '../views/LoginAndRegister'
import TodoList from '../views/Todolist.vue'
import WritingAssistant from '../views/WritingAssistant.vue'



Vue.use(VueRouter)

const routes = [

  {
    path: '/login',
    name: 'login',
    component: LoginAndRegister,
  },
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/dashboard',
    children:[
      {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard,
      },
      {
        path: "todolist",
        name: "todolist",
        component: TodoList,
      },
      {
        path: "writingassistant",
        name: "writingassistant",
        component: WritingAssistant,
      },
    ],
  },
  {
    path:'*',
    name:'404',
    component: NotFound,
  },
]

const router = new VueRouter({
  routes
})

//Navigation Gard
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.eleToken ? true : false;
   if (to.path == "/login" || to.path == "/register") {
     next();
   } else {
     isLogin ? next() : next("/login");
   }
 })

export default router
