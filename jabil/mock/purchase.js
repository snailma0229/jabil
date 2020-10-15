import Mock from 'mockjs'

const data = Mock.mock({
  'items|30': [{
    time: '@datetime("yyyy-MM-dd")',
    people: '@name()',
    title: '@string("upper", 3) @string("upper", 2) @string("number", 4) @string("upper", 1)@string("number", 2) 螺丝紧固夹具',
    code: '@string("upper", 2)@string("number", 4)-@string("number", 1)',
    receiveTime: '@datetime("yyyy-MM-dd")',
    pmPeriod: '@string("number", 2)',
    pmType: '@string("number", 2)',
    'usedFor|1': ['打调谐盖板', '陶瓷安装', '波导防旋转', 'AIB盖板螺丝', 'MOD 底座', 'MOD 打盖板螺丝', 'MOD 3XM2 防旋转', 'MOD 3XM2 最终组装', 'MOD 3XM2 交叉耦合防旋转', 'MOD 3XM2 RX耦合防旋转', 'MOD 刷锡膏'],
    remark: '无',
    location: '@string("number", 2)-@string("upper", 1)@string("number", 1)-@string("number", 1)',
  }]
})

export default [
  {
    url: '/vue-admin-template/purchase/list',
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
