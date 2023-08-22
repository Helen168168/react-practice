/**
 * @description axios请求封装
 * @author pxm
*/

import axios from 'axios';

let tokenLose = true;

const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '',
  timeout: 10 * 1000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
});

// request interceptor
instance.interceptors.request.use(
  (configItem) => {
    return Promise.resolve(configItem);
  },
  (error) => {
    Promise.reject(error)
  }
);

// response interceptor
instance.interceptors.response.use(
  (response) => {
    const res = response.data;
    // 请求出错处理
    // -1 超时、token过期或者没有获得授权
    if (res.code === -1 && tokenLose) {
      tokenLose = false;
      // 根据自己业务需求调整代码
    }

    if ([200, 0].indexOf(res.code) === -1) {
      console.error(res.msg);
      return Promise.reject(res);
    }
    return res;
  },
  (error) => {
    console.error('请求出错啦！');
    return Promise.reject(error);
  }
);

export default instance;