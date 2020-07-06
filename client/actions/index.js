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

export function setTasks(tasks) {
  return {
    type: SET_TASKS,
    tasks: tasks
  }
}

export function addTask(task) {
  return {
    type: ADD_TASK,
    task: task
  }
}

export function updateTask(task) {
  return {
    type: UPDATE_TASK,
    task: task
  }
}

export function deleteTask(task) {
  return {
    type: DEL_TASK,
    task: task
  }
}

export function fetchTasks() {
  return dispatch => {
    apiGetTasks()
      .then(tasks => {
        dispatch(setTasks(tasks))
      })
      .catch(err => console.log(err))
  }
}