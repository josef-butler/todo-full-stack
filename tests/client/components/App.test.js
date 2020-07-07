import React from 'react'
import { App } from '../../../client/components/App'
import { shallow } from 'enzyme'

test('App renders page h1 header correctly', () => {
    // Act
    const wrapper = shallow(<App />)
    
    // Assert
    expect(wrapper.find('h1')).toHaveLength(1)
})