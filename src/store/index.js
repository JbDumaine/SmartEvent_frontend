import Vue from 'vue'
import Vuex from 'vuex'
import { auth } from './auth.module'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // Data : 
    events: null,

    friends : null
  },
  mutations: {
    setEvents(state, term) {
      state.events = term;
    },

    setFriends(state, term) {
      state.friends = term;
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

      context.commit("setEvents", event);

    }
  },

  modules: {
    auth
  }
})
