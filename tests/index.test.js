import React from 'react'
import { shallow } from 'enzyme'

import Component from '../src'

describe('Component', () => {
  test('should render', () => {
    const wrapper = shallow(<Component>Hello World!</Component>)
    expect(wrapper.find('h1')).toHaveLength(1)
  })
})
