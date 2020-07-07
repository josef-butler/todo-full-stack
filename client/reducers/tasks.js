import { SET_TASKS, ADD_TASK, UPDATE_TASK, DEL_TASK } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASKS:
      return action.tasks
    // case ADD_TASK:
    //   return [...state, action.task]
    // // just check the return for update task might not work
    // case UPDATE_TASK:
    //   return [...state, action.task]
    case DEL_TASK:
      return state.filter(task => task.id != action.task)
    default:
      return state
  }
}

export default reducer