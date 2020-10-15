import Mock from 'mockjs'

const data = Mock.mock({
  'items|30': [{
    display_time: '@datetime("yyyy-MM-dd")',
    recorder: '@name()',
    author: '@cname()',
    status: '@boolean',
    id: '@id',
    title: '@string("upper", 3) @string("upper", 2) @string("number", 4) @string("upper", 1)@string("number", 2) 螺丝紧固夹具',
    production_line: '@string("upper", 4)@string("number", 2)_@string("upper", 1)@string("number", 1)',
    code: '@string("upper", 2)@string("number", 4)-@string("number", 1)',
    location: '@string("number", 2)-@string("upper", 1)@string("number", 1)-@string("number", 1)',
    PartNo: '@string("upper", 3)@string("number", 6)/@string("number", 1)',
  }]
})

export default [
  {
    url: '/vue-admin-template/table/list',
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
