import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Multiselect from 'vue-multiselect'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faHome,
  faUser,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt,
  faSadCry,
  faSmileBeam
} from '@fortawesome/free-solid-svg-icons'

library.add(faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt, faSadCry,faSmileBeam)

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.component(`font-awesome-icon`, FontAwesomeIcon)
Vue.component('multiselect', Multiselect)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount(`#app`)
