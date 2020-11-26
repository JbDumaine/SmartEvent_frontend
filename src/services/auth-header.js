export default function authHeader() {
  const userToken = localStorage.getItem(`userToken`)
  if (userToken) {
    return { 'X-AUTH-TOKEN': userToken }
  } else {
    return {}
  }
}
