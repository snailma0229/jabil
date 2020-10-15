
import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/vue-admin-template/lend/list',
    method: 'get',
    params
  })
}

export function getFixture(params) {
  return request({
    url: '/vue-admin-template/lend/fixture',
    method: 'get',
    params
  })
}

export function getPairs(params) {
  return request({
    url: '/vue-admin-template/lend/pairs',
    method: 'get',
    params
  })
}

export function getPairsDetail(params) {
  return request({
    url: '/vue-admin-template/lend/detail',
    method: 'get',
    params
  })
}
