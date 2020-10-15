import Mock from 'mockjs'

const data = Mock.mock({
  'items|30': [{
    display_time: '@datetime("yyyy-MM-dd")',
    status: '@boolean',
    id: '@id',
    title: '@string("upper", 3) @string("upper", 2) @string("number", 4) @string("upper", 1)@string("number", 2) 螺丝紧固夹具',
    production_line: '@string("upper", 4)@string("number", 2)_@string("upper", 1)@string("number", 1)',
    code: '@string("upper", 2)@string("number", 4)-@string("number", 1)',
    location: '@string("number", 2)-@string("upper", 1)@string("number", 1)-@string("number", 1)',
    PartNo: '@string("upper", 3)@string("number", 6)/@string("number", 1)',
    'Health|1':['优秀', '良好', '中等', '较差', '极差'],
    color:{'优秀':"success", '良好':'', '中等':'warning', '较差':'danger', '极差':'info'},
    author: '@cname()',
  }]
})

const fixture = Mock.mock({
  'items|30': [{
    id: '@id',
    value: '@string("upper", 3) @string("upper", 2) @string("number", 4) @string("upper", 1)@string("number", 2) 螺丝紧固夹具',
    production_line: '@string("upper", 4)@string("number", 2)_@string("upper", 1)@string("number", 1)',
    code: '@string("upper", 2)@string("number", 4)-@string("number", 1)',
    location: '@string("number", 2)-@string("upper", 1)@string("number", 1)-@string("number", 1)',
    PartNo: '@string("upper", 3)@string("number", 6)/@string("number", 1)',
  }]
})

const pairs = Mock.mock({
  'items|10': [{
    'value|+1': ['打调谐盖板', '陶瓷安装', '陶瓷组装', '波导防旋转', 'AIB盖板螺丝', 'MOD 底座', 'MOD 波导防旋转', 'MOD 3XM2 RX耦合防旋转', 'MOD 盖板螺丝', 'MOD 刷锡膏'],
  }]
})

const pairsDetail = Mock.mock({
  'items|1-10': [
    '@string("upper", 3) @string("upper", 2) @string("number", 4) @string("upper", 1)@string("number", 2) 螺丝紧固夹具'
  ]
})



export default [
  {
    url: '/vue-admin-template/lend/list',
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
  },

  {
    url: '/vue-admin-template/lend/fixture',
    type: 'get',
    response: config => {
      const items = fixture.items
      return {
        code: 20000,
        data: {
          items: items
        }
      }
    }
  },

  {
    url: '/vue-admin-template/lend/pairs',
    type: 'get',
    response: config => {
      const items = pairs.items
      return {
        code: 20000,
        data: {
          items: items
        }
      }
    }
  },

  {
    url: '/vue-admin-template/lend/detail',
    type: 'get',
    response: config => {
      const items = pairsDetail.items
      return {
        code: 20000,
        data: {
          items: items
        }
      }
    }
  },
]
