export const SET_LOADING = 'SET_LOADING'
export const SET_TASKS = 'SET_TASKS'

export const ADD_TASK = 'ADD_TASK'
export const UPDATE_TASK = 'UPDATE_TASK'
export const DEL_TASK = 'DEL_TASK'

import {
  getTasks as apiGetTasks,
  addTask as apiAddTask,
  updateTask as apiUpdateTask,
  delTask as apiDelTask
} from '../apis/api'

function setLoading(loading) {
  return {
    type: SET_LOADING,
    loading: loading
  }
}

function setTasks(tasks) {
  return {
    type: SET_TASKS,
    tasks: tasks,
  }
}

function addTask(task) {
  return {
    type: ADD_TASK,
    task: task,
  }
}

// export function updateTask(task) {
//   return {
//     type: UPDATE_TASK,
//     task: task,
//   }
// }

function delTask(id) {
  return {
    type: DEL_TASK,
    task: id,
  }
}

export function saveTask(task) {
  return (dispatch) => {
    apiAddTask(task)
      .then(() => {
        dispatch(fetchTasks(false))
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export function deleteTask(id) {
  return (dispatch) => {
    apiDelTask(id)
      .then(taskId => {
        dispatch(delTask(taskId))
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export function fetchTasks(showLoading = true) {
  return (dispatch) => {
    if (showLoading) dispatch(setLoading(true))
    apiGetTasks()
      .then(tasks => {
        dispatch(setTasks(tasks))
        if (showLoading) dispatch(setLoading(false))
      })
      .catch(err => {
        if (showLoading) dispatch(setLoading(false))
        console.log(err)
      })
  }
}