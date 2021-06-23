/**
 * createStore是Redux中的核心，它将所有其他的功能连接在一起且暴露操作的API供开发者调用
 * 
 * 
*/
import { createStore } from 'redux'
import reducer from './redecer'

const store = createStore(reducer)

store.dispatch({
    type: 'ADD_TODO',
    payload: 'Learn Redux'
})

export default store