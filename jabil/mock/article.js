import Mock from 'mockjs'

const List = []
const count = 100

const baseContent = '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>'
const image_uri = 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3'

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment(1091)',
    timestamp: +Mock.Random.date('T'),
    workcellID: '@string("number", 1)',
    workcell: 'JW0@string("number", 1)',
    familyID: '@string("number", 2)',
    family: 'JABIL @string("upper", 2)',
    code: 'EF@string("number", 4)',
    'name|1': ['MOD 波导防旋转夹具', 'MOD 盖板螺丝夹具', 'MOD 3XM2 保护夹具', 'MOD 3XM2 防旋转夹具', 'MOD 3XM2 最终组装夹具', 'MOD 3XM2 耦合防旋转夹具1', 'MOD 3XM2 交叉耦合防旋转夹具', 'MOD 3XM2 RX耦合防旋转夹具2', 'MOD 刷锡膏夹具'],
    'model|1': ['MOD 3XM2', 'FU'],
    partNo: '@string("upper", 3)@string("number", 6)/@string("number", 1)',
    'usedFor|1': ['打调谐盖板', '陶瓷安装', '波导防旋转', 'AIB盖板螺丝', 'MOD 底座', 'MOD 打盖板螺丝', 'MOD 3XM2 防旋转', 'MOD 3XM2 最终组装', 'MOD 3XM2 交叉耦合防旋转', 'MOD 3XM2 RX耦合防旋转', 'MOD 刷锡膏'],
    UPL: '@string("number", 1)',
    owner: '@string("number", 7)',
    ownerName: '@cname()',
    remark: '无',
    pmPeriod: '@string("number", 2)',
    recOn: '@datetime',
    recBy: '@string("number", 7)',
    recByName: '@cname()',
    editOn: '@datetime()',
    editBy: '@string("number", 7)',
    editByName: '@cname()',
  }))
}

export default [
  {
    url: '/vue-admin-template/article/list',
    type: 'get',
    response: config => {
      const { importance, type, title, page = 1, limit = 20, sort } = config.query

      let mockList = List.filter(item => {
        if (importance && item.importance !== +importance) return false
        if (type && item.type !== type) return false
        if (title && item.title.indexOf(title) < 0) return false
        return true
      })

      if (sort === '-id') {
        mockList = mockList.reverse()
      }

      const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

      return {
        code: 20000,
        data: {
          total: mockList.length,
          items: pageList
        }
      }
    }
  },

  {
    url: '/vue-admin-template/article/detail',
    type: 'get',
    response: config => {
      const { id } = config.query
      for (const article of List) {
        if (article.id === +id) {
          return {
            code: 20000,
            data: article
          }
        }
      }
    }
  },

  {
    url: '/vue-admin-template/article/pv',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: {
          pvData: [
            { key: 'PC', pv: 1024 },
            { key: 'mobile', pv: 1024 },
            { key: 'ios', pv: 1024 },
            { key: 'android', pv: 1024 }
          ]
        }
      }
    }
  },

  {
    url: '/vue-admin-template/article/create',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },

  {
    url: '/vue-admin-template/article/update',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]

