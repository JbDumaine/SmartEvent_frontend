import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Welcome from '../views/Welcome.vue'
import Invitation from '../views/Invitation.vue'
import Guests from '../views/Guests.vue'
import Events from '../views/Events.vue'
import EventDetail from '../views/EventDetail.vue'
import LegalNotice from '../views/LegalNotice.vue'

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
    path: `/guests`,
    name: `Guests`,
    component: Guests
  },
  {
    path: `/events`,
    name: `Events`,
    component: Events
  },

  {
    path: `/eventDetail/:eventId`,
    name: `EventDetail`,
    component: EventDetail
  },
  {
    path: `/legal-notice`,
    name: `LegalNotice`,
    component: LegalNotice
  }
]

const router = new VueRouter({
  routes
})

export default router
