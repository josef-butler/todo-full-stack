import request from 'superagent'

const apiUrl = '/api/v1/tasks/'

export function getTasks() {
  return request
    .get(apiUrl)
    .then(res => res.body)
    .catch(err => console.log(err))
}

export function addTask(task) {
  return request
    .post(apiUrl)
    .send(task)
    .then(res => res.body)
    .catch(err => console.log(err))
}

export function updateTask(id, task) {
  return request
    .patch(`apiUrl${id}`)
    .send(task)
    .then(res => res.body)
    .catch(err => console.log(err))
}

export function delTask(task) {
  return request
    .delete(`${apiUrl}${task.id}`)
    .then(res => res.body)
    .catch(err => console.log(err))
}