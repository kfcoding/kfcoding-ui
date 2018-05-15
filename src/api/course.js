import request from '@/utils/request'

export function create(courseName, userId) {
  return request({
    url: '/course/create',
    method: 'post',
    data: {
      courseName,
      userId
    }
  })
}
