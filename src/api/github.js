import request from '@/utils/githubrequest'

const githubID = process.env.GITHUB_ID
const githubSecret = process.env.GITHUB_SECRET

export function getTokenByCode(code, state) {
  return request({
    url: 'login/oauth/access_token',
    method: 'post',
    data: {
      code,
      githubID,
      githubSecret,
      state
    }
  })
}

export function getInfo(token) {
  return request({
    url: '/user',
    method: 'get',
    params: { token }
  })
}
