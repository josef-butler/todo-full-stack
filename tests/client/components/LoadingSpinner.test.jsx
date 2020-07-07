import React from 'react'
import { LoadingSpinner } from '../../../client/components/LoadingSpinner'
import { shallow } from 'enzyme'

test('LoadingSpinner shows gif when rendered', () => {
    // Act
    const wrapper = shallow(<LoadingSpinner />)
    
    // Assert
    expect(wrapper.find('img')).toHaveLength(1)
})