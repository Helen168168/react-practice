const demoReducer = (state = {}, action: { type: string, id: string, text: string }) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        id: action.id,
        text: action.text,
        completed: false
      }


    default:
      return state
  }
}

export default demoReducer