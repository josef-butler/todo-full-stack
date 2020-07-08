import reducer from '../../../client/reducers/tasks'

test('ADD_TASK can add a task', () => {
    // Arrange
    const task1 = {
        id: 1,
        date_added: '2020-01-01',
        task: 'aefaef',
        details: 'aeifaef',
        priority: 'High',
        due_date: '2020-01-02',
        completed: 1
    }
    const task2 = {
        id: 2,
        date_added: '2020-01-05',
        task: 'aefaeaeff',
        details: 'sargsrgrsg',
        priority: 'Medium',
        due_date: '2020-01-09',
        completed: 0
    }
    const initialState = [task1]
    const action = {
        type: 'ADD_TASK',
        task: task2
    }
    const expected = [task1, task2]

    // Act
    const actual = reducer(initialState, action)

    // Assert
    expect(actual).toEqual(expected)
})