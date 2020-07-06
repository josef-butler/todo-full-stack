import { SET_LOADING } from '../actions'

const initialState = false

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return action.loading
        default:
            return state
    }
}

export default reducer