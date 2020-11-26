import axios from 'axios'

const API_URL = `https://reqres.in/api/`

class AuthService {
  async login(user) {
    return axios
      .post(API_URL + `login`, {
        email: user.email,
        password: user.password
      })
      .then(response => {
        console.log(response)
        if (response.data.token) {
          localStorage.setItem(`user`, JSON.stringify(response.data))
        }

        return response.data
      })
  }

  logout() {
    localStorage.removeItem(`user`)
  }

  register(user) {
    console.log(user)
    return axios.post(API_URL + `register`, {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      password: user.password
    })
  }
}

export default new AuthService()
