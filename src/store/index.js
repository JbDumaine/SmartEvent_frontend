import Vue from 'vue'
import Vuex from 'vuex'
import { auth } from './auth.module'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    weightScreen: window.innerWidth,

    // Data : 
    events: null,

    event: null,
  },
  mutations: {
    setEvent(state, term) {
      state.event = term;
    },
  },

  actions: {
    getEvent(context, eventId) {
      const event = {
        id: 0,
        name: "Evenement test",
        address: "Chez Etienne",
        flyer: "Flyer moche",
        date: "13/11/2020",
        type: "Apéro",
        description: "On casse tout chez Etienne !"
      }

      context.commit("setEvent", event);

    }
  },

  modules: {
    auth
  }
})
