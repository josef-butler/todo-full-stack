import React from 'react'
import { TaskTable } from '../../../client/components/TaskTable'
import { shallow } from 'enzyme'

test('TaskTable renders table after db data is retrieved', () => {    
    // Arrange
    const tasks=[{
        id: 1,
        date_added: '2020-01-01',
        task: 'ejaif',
        details: 'jaeifjef',
        priority: 'High',
        due_date: '2020-01-02',
        completed: 1
    }]

    const loading = false

    const wrapper = shallow(<TaskTable dispatch={() => {}} loading={loading} tasks={tasks} />)

    // Act
    const actual = wrapper.find('table')

    // Assert
    expect(actual).toHaveLength(1)
})

test('TaskTable tries to render loading component when data is being retrieved from db', () => {
    // Arrange
    const loading = true

    const wrapper = shallow(<TaskTable dispatch={() => {}} loading={loading} />)

    // Act
    const actual = wrapper.find('LoadingSpinner')

    // Assert
    expect(actual).toHaveLength(1)
})