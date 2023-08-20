import Mock from 'mockjs'
//import data from './mock/index'


Mock.setup({
  timeout: '300-600'
})

Mock.mock('/api/test', /post|get/i, () => {
  return {
    code: 200,
    data: 'hello world'
  }
})


