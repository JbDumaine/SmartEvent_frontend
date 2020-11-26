import UserService from '../services/user.service'

const user = JSON.parse(localStorage.getItem(`user`))
const initialState = user
    ? { status: { loggedIn: true }, user }
    : { status: { loggedIn: false }, user: null }

export const auth = {
    namespaced: true,
    state: initialState,
    actions: {

        getEvents(context) {
            console.log('aa');
            return UserService.getUserEvents().then(response => {
                context.commit("setEvents", response.data);
            })
        },
    }
}
