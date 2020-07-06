import { RECEIVE_TASKS } from '../actions'

// update state with whatever you get from db
const reducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_TASKS:
      return action.tasks
    default:
      return state
  }
}

export default reducer