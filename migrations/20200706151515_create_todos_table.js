
exports.up = function(knex) {
  return knex.schema
    .createTable('todos', table => {
      table.increments('id').primary()
      table.date('date_added')
      table.string('task')
      table.string('details')
      table.string('priority')
      table.date('due_date')
      table.boolean('completed')
    })
}

exports.down = function(knex) {
  return knex.schema
    .dropTable('todos')
}