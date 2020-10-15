import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/vue-admin-template/admin/list',
    method: 'get',
    params: query
  })
}

export function fetchArticle(id) {
  return request({
    url: '/vue-admin-template/admin/detail',
    method: 'get',
    params: { id }
  })
}

export function createArticle(data) {
  return request({
    url: '/vue-admin-template/admin/create',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/vue-admin-template/admin/update',
    method: 'post',
    data
  })
}
