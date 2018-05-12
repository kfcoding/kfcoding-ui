import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: '/user/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function getTokenByCode(code) {
  return request({
    url: '/github/getTokenByCode',
    method: 'get',
    params: {
      code
    }
  })
}

export function githubCallBack(code) {
  return request({
    url: '/github/callback',
    method: 'get',
    params: {
      code
    }
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
