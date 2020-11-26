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
            console.log(authHeader())
            const myInit = {
                method: 'GET',
                headers:{
                    'X-AUTH-TOKEN': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoyfQ._cvwUBno-wgRAC1t3il0Pf3zqRt4LCOfIX9mBZjt4lM'
                },  
            };
                fetch(API_URL + "event", myInit)
                    .then((result) => result.json())
                    .then((json) => {
                        context.commit("setEvents", json);
                    })
                    .catch((error) => {
                        console.error("Une erreur s'est produite");
                        console.log(error);
                    });
        }

    },
}

