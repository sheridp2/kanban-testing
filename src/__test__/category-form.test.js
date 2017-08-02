import React from 'react'
import {mount} from 'enzyme'

import CategoryForm from '../component/category-form'

describe('testing CategoryForm', () =>{
  test('onComplete should be invoked with the state onSubmit', () =>{
    let mockHandlenOnComplete = jest.fn()

    let wrapper = mount(
      <CategoryForm onComplete={mockHandlenOnComplete} buttonText='submit' />
    )

    let mockState ={title :'cool beans'}
    wrapper.setState(mockState)

    wrapper.find('form').simulate('submit')

    let {calls} = mockHandlenOnComplete.mock
    expect(calls.length).toBe(1)
    expect(calls[0][0]).toEqual(mockState)
  })

  test('test onChange should update the title on the state', () => {
    let wrapper = mount(
        <CategoryForm onComplete ={() => {}} buttonText='submit' />
      )
      wrapper.find('input').simulate('change', {
        target: { name :'title', value: 'cool'}
      })
      expect(wrapper.state('title')).toEqual('cool')
  })
})
