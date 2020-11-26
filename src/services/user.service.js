import axios from 'axios'
import authHeader from './auth-header'

const API_URL = `http://smartevent-api.tk/api/`

class UserService {

  // Methods Get corresponding to the items of the user.

  getPublicContent() {
    return axios.get(API_URL + `all`)
  }

  getUserHome() {
    return axios.get(API_URL + `user`, { headers: authHeader() })
  }

  // User events as organizer.
  getUserEvents() {
    return axios.get(API_URL + `event`, { headers: authHeader() })
  }

  getUserEvent(id) {
    return axios.get(API_URL + `event/${id}`, { headers: authHeader() })
  }

  getUserFriends() {
    return axios.get(API_URL + `friends`, { headers: authHeader() })
  }
}
export default new UserService()
