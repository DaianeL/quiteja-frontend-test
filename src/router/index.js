import Vue from 'vue'
import VueRouter from 'vue-router'
import ListaDeUsuariosView from '../views/ListaDeUsuariosView.vue'
import EditarView from '../views/EditarView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: ListaDeUsuariosView
  },
  {
    path: '/:id?',
    name: 'edit',
    component: EditarView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
