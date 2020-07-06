const connection = require('./connection')

module.exports = {
  getTasks
}

function getTasks(db = connection) {
  return db('todos').select()
}