
const studyList = [
  {
    title: 'GitHub',
    desc: '世界最大的开源代码共享社区',
    url: 'https://github.com/',
    logo: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/github.svg'
  },
  {
    title: 'Gitchat',
    desc: 'IT知识分享平台',
    url: 'https://gitbook.cn/',
    logo: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/gitchat.png'
  },
  {
    title: 'Gitee',
    desc: '中国最大的开源代码共享社区',
    url: 'https://gitee.com/',
    logo: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/gitee.png'
  },
  {
    title: '慕课网',
    desc: '程序员的梦工厂',
    url: 'https://www.imooc.com/',
    logo: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/imooc.png'
  },
  {
    title: '掘金',
    desc: '一个帮助开发者成长的社区',
    url: 'https://juejin.cn/',
    logo: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/juejin.png'
  },
  {
    title: 'CSDN',
    desc: '中文最大的技术社区',
    url: 'https://www.csdn.net/',
    logo: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/csdn.png'
  }
];

import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/get',
    method: 'get',
    response: () => {
      return {
        code: 0,
        data: studyList
      }
    },
  }
] as MockMethod[]
