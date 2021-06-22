/**
 * 配置顺序： 找到axios库并创建实例->设置实例的defaults配置->请求config参数
 * 
*/
import Axios from 'axios'
import { serverUrl } from '../config/urlConfig'

//通过axios库创建实例
let objAxiosInstance = Axios.create();
//设置超时默认值
objAxiosInstance.defaults.timeout = 3000;

//跨域请求，允许保存cookie
objAxiosInstance.defaults.withCredentials = true;

//请求拦截
objAxiosInstance.interceptors.request.use((config) => {
    config.url = serverUrl + config.url;
    config.headers['Authorization'] = 'eyJhbGciOiJIUzUxMiIsInppcCI6IkRFRiJ9.eNpky0sKhDAMANC7ZG2hSZtYvU1qW-ggUvyAIN5dYWY32wfvgrbWZapNZxgBWYK1gXph6GA74p_ls8GIQl6cJaQOqu5fcD_47PVdJOqiSjYxpWI8I5pApZiSJs8RB9Ge4X4AAAD__w.jEAc2Q-qRRlfXocG-r6y8LRZ7uWWs4DTe0Tt1pn78qYtLD9FE8vurWNdY2pgDOLIpo4DPIulZldWDe-PrbG6-g'; //token
    return config;
}, (error) => {
    return Promise.reject(error);
})

//响应拦截
objAxiosInstance.interceptors.response.use((response) => {
    return response.data;
}, (error) => {
    return Promise.reject(error);
})

export default objAxiosInstance