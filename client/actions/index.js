import request from 'superagent'

export const REQUEST_TASKS = 'REQUEST_TASKS'
export const RECEIVE_TASKS = 'RECEIVE_TASKS'

export const requestTasks = () => {
  return {
    type: REQUEST_TASKS
  }
}

export const receiveTasks = (tasks) => {
  return {
    type: RECEIVE_TASKS,
    tasks: tasks
  }
}

export const fetchTasks = () => {
  return (dispatch) => {
    dispatch(requestTasks())
    return request
      .get('/')
      .then(res => {
        dispatch(receiveTasks(res.body))
      })
      .catch(err => {
        console.log(err)
      })
  }
}