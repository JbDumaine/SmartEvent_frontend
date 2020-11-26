import axios from 'axios'
import authHeader from '../services/auth-header'

const API_URL = `http://smartevent-api.tk/api/`

export const user = {
    namespaced: true,
    state: {
        events: []
    },
    mutations: {
        setEventsList(state, term) {
            state.events = term;
        },
    },
    actions: {

        getEvents({ context }) {
            axios.get(API_URL + "event", {headers: authHeader()})
            .then((events) => {
                context.commit("setEventsList", events.data)
            })
            .catch(function (error) {
              // handle error
              console.log(error);
    
            });
        },
    }
}
