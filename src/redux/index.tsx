// applyMiddleware(中间件1,中间件2)使用中间件
import { createStore, applyMiddleware } from 'redux'
// thunk中间件 dispath()能够传入函数执行异步请求\
import thunk from 'redux-thunk'
// composeWithDevTools() redux调试工具
import { composeWithDevTools } from 'redux-devtools-extension'
// 合并后的reducer
import rootReducer from './reducers/index'
// 创建store 传入合并后的reducer
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
export default store
