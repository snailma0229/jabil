import Mock from 'mockjs'

const data = Mock.mock({
  'items|30': [{
    time: '@datetime("yyyy-MM-dd")',
    author: '@cname()',
    code: '@string("upper", 2)@string("number", 4)-@string("number", 1)',
    life: '@string("number", 4)',
    'reason|1': ['打调谐夹具在生产时破裂', '夹具螺丝脱落', '夹具核心部位磨损严重', '生产时意外损坏', '夹具部分螺丝脱落'],
    people: '@name()',
  }]
})

export default [
  {
    url: '/vue-admin-template/scrap/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }
]
