import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import DefaultContainer from "../components/DefaultContainer"
import Task from '../views/Task.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: "/home",
    name: "home",
    component: DefaultContainer,
    children: [
      {
        path: "/home/task",
        name: "task",
        component: Task
      },
      
    
    ]
    }
]

const router = new VueRouter({
  routes
})

export default router
