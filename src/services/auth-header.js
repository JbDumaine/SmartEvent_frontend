export default function authHeader() {
  const userToken = localStorage.getItem(`userToken`)
  console.log(userToken);
  if (userToken) {
    return { 'X-AUTH-TOKEN': userToken }
  } else {
    return {}
  }
}
