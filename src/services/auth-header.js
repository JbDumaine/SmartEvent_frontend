export default function authHeader() {
  const userToken = JSON.parse(localStorage.getItem(`userToken`))

  if (userToken) {
    return { 'X-AUTH-TOKEN': user.accessToken }
  } else {
    return {}
  }
}
