let validateCategory = (payload) =>{
  if(!payload || !payload.title || !payload.timestamp)
    throw new Error('VALIDATION ERROR: category must have id, title, and timestamp')
}

let initalState = []

export default(state=initalState, action) => {
  let {type, payload} = action
  switch(type){
    case 'CATEGORY_CREATE':
      validateCategory(payload)
      return [...state, payload]
    case 'CATEGORY_UPDATE':
      validateCategory(payload)
      return state.map(category => category.id == payload.id ? payload : category)
    case 'CATEGORY_DELETE':
      validateCategory(payload)
      return state.filter(category => category.id !== payload.id)
    case 'CATEGORY_RESET' :
      return initalState
    default:
      return state
  }
}
