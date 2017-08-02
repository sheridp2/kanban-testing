import categoryReducer from '../reducer/category.js'

describe('testing category reducer', () => {
  test('initial state should be empty array',() =>{
    let result = categoryReducer(undefined, {type:null})
    expect(result).toEqual([])
  })

  test('is the action type isnt registered it will return the state', () =>{
    let mockState = [
      {id: 'abd', title: 'cool'},
      {id: '123', title: 'cool'},
    ]
    let results = categoryReducer(0, {type:null})
    expect(results).toEqual(0)
  })

  test('CATEGORY_CREATE should append to the array', () =>{
    let actionOne ={
      type:'CATEGORY_CREATE',
      payload: 'hello world',
    }

    let state = categoryReducer([], actionOne)
    expect(state.length).toBe(1)
    expect(state[0]).toBe(actionOne.payload)

    let actionTwo = {
      type: 'CATEGORY_CREATE',
      payload: 'goodbey world',
    }

    state = categoryReducer(state, actionTwo)
    expect(state.length).toBe(2)
    expect(state[0]).toBe(actionOne.payload)
    expect(state[1]).toBe(actionTwo.payload)
  })

  test('CATEGORY_DELETE should delete from array', () =>{
    let mockState = [
      {id: 'abd', title: 'cool'},
      {id: '123', title: 'cool'},
      {id: '456', title: 'cool'},
      {id: 'xyz', title: 'cool'},
    ]
    let actionOne = {
      type: 'CATEGORY_DELETE',
      payload: mockState[1],
    }

    let state = categoryReducer(mockState, actionOne)

    expect(state.length).toBe(3)
    expect(state).toEqual(mockState.filter(item => item.id !='123'))
  })

  test('CATEGORY_UPDATE should update', () =>{
    let mockState = [
      {id: 'abd', title: 'cool'},
      {id: '123', title: 'cool'},
      {id: '456', title: 'cool'},
      {id: 'xyz', title: 'cool'},
    ]
    let actionOne = {
      type: 'CATEGORY_UPDATE',
      payload: {id: 'xyz', title: 'hax'},
    }

    let state = categoryReducer(mockState, actionOne)

    expect(state.length).toBe(4)
    expect(state).toEqual(mockState.map(item =>
      item.id== 'xyz' ? actionOne.payload : item))
  })


})
