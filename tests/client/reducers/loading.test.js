import loadingReducer from '../../../client/reducers/loading'

test('SET_LOADING reducer can set loading state to false', () => {
    // Arrange
    const initialState = { loading: true }
    const action = {
        type: 'SET_LOADING',
        loading: false
    }
    const expected = false

    // Act
    const actual = loadingReducer(initialState, action)

    // Assert
    expect(actual).toEqual(expected)
})


test('SET_LOADING reducer can set loading state to true', () => {
    // Arrange
    const initialState = { loading: false }
    const action = {
        type: 'SET_LOADING',
        loading: true
    }
    const expected = true

    // Act
    const actual = loadingReducer(initialState, action)

    // Assert
    expect(actual).toEqual(expected)
})