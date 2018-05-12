import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/table/list',
    method: 'get',
    params
  })
}

export function getInfo(access_token) {
  return request({
    url: '/user',
    method: 'get',
    params: { access_token }
  })
}
