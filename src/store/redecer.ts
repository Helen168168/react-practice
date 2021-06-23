/**
 * reducer是一个函数，接受action和state作为参数,然后使用action去修改state的值
 * 
 *  
*/
const defaultState: Number = 0

const reducer = (state = defaultState, action: any) => {
    switch(action.type) {
        case 'ADD':
        return state + action.payload;
        default:
            return state;
    }
}

reducer(1, {
    type: 'ADD',
    paylosd: 2
})

export default reducer