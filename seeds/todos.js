
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, date_added: 2020-07-01, task: 'Homework', details: 'Do coding homework!', priority: 'High', due_date: 2020-07-07, completed: false},
        {id: 2, date_added: 2020-06-25, task: 'Celebrate', details: 'Have a party', priority: 'High', due_date: 2020-06-25, completed: true},
        {id: 3, date_added: 2020-07-02, task: 'Doctor appt', details: 'Go see the doctor', priority: 'Medium', due_date: 2020-07-10, completed: false},
        {id: 4, date_added: 2020-07-03, task: 'Cook dinner', details: 'Make burritos', priority: 'High', due_date: 2020-07-03, completed: true},
        {id: 5, date_added: 2020-05-23, task: 'Clean car', details: 'Vacuum, wash, etc.', priority: 'Low', due_date: 2020-09-10, completed: false},
        {id: 6, date_added: 2020-01-04, task: 'Go shopping', details: 'Buy some clothes', priority: 'Low', due_date: 2020-07-07, completed: false},
      ])
    })
}