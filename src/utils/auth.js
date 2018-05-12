import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'
const RandomKey = 'randomKey'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getRandomKey() {
  return Cookies.get(RandomKey)
}

export function setRandomKey(randomKey) {
  return Cookies.set(RandomKey, randomKey)
}

export function removeRandomKey() {
  return Cookies.remove(RandomKey)
}
