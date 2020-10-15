import request from '@/utils/request'

export function getRoutes() {
  return request({
    url: '/vue-element-template/routes',
    method: 'get'
  })
}

export function getRoles() {
  return request({
    url: '/vue-element-template/roles',
    method: 'get'
  })
}

export function addRole(data) {
  return request({
    url: '/vue-element-template/role',
    method: 'post',
    data
  })
}

export function updateRole(id, data) {
  return request({
    url: `/vue-element-template/role/${id}`,
    method: 'put',
    data
  })
}

export function deleteRole(id) {
  return request({
    url: `/vue-element-template/role/${id}`,
    method: 'delete'
  })
}
