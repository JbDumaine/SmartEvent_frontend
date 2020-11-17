import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Welcome from '../views/Welcome.vue'
import Invitation from '../views/Invitation.vue'
import CreateEvent from '../views/CreateEvent.vue'
import Guest from '../views/Guest.vue'
import EventDetail from '../views/EventDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: `/welcome`,
    name: `Welcome`,
    component: Welcome
  },
  {
    path: `/`,
    name: `Home`,
    component: Home
  },
  {
    path: `/login`,
    name: `Login`,
    component: Login
  },
  {
    path: `/register`,
    name: `Register`,
    component: Register
  },
  {
    path: `/invitation-request/:invitation_token`,
    name: `Invitation`,
    component: Invitation
  },
  {
    path: `/create/event`,
    name: `CreateEvent`,
    component: CreateEvent
  },
  {
    path: `/guest`,
    name: `Guests`,
    component: Guest
  },
  {
    path: `/eventDetail/:eventId`,
    name: `EventDetail`,
    component: EventDetail
  }
]

const router = new VueRouter({
  routes
})

export default router
