import { SET_TASKS, ADD_TASK, UPDATE_TASK, DEL_TASK } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASKS:
      return action.tasks
    case ADD_TASK:
      return [...state, action.task]
    case UPDATE_TASK:
      return state.map(task => {
        if (task.id == action.task.id) {
          return action.task
        } else {
          return task
        }
      })
    case DEL_TASK:
      return state.filter(task => task.id != action.task)
    default:
      return state
  }
}

export default reducer