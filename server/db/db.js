const connection = require('./connection')

module.exports = {
  getTasks,
  addTask,
  updateTask,
  deleteTask
}

function getTasks(db = connection) {
  return db('todos')
    .select()
}

function addTask(task, db = connection) {
  return db('todos')
    .insert({
      date_added: task.date_added,
      task: task.task,
      details: task.details,
      priority: task.priority,
      due_date: task.due_date,
      completed: task.completed
    })
}

function updateTask(id, task, db = connection) {
  return db('todos')
    .where('id', id)
    .update({
      date_added: task.date_added,
      task: task.task,
      details: task.details,
      priority: task.priority,
      due_date: task.due_date,
      completed: task.completed
    })
}

function deleteTask(id, db = connection) {
  return db('todos')
    .where('id', id)
    .del()
}