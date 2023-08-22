// channel和newList组件的reducer
import demoReducer from './demoReducer'

// combineReducers 合并各个reducer
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  demoReducer
})
export default rootReducer
