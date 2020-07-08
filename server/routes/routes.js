const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.getTasks()
    .then(tasks => {
      res
        .status(200)
        .json(tasks)
    })
    .catch(err => {
      res
        .status(500)
        .send(err.message)
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getTask(id)
    .then(task => {
      res
        .status(200)
        .json(task[0])
    })
    .catch(err => {
      res
        .status(500)
        .send(err.message)
    })
})

router.post('/', (req, res) => {
  const task = req.body

  db.addTask(task)
    .then(id => {
      res
        .status(201)
        .json(id[0])
    })
    .catch(err => {
      res
        .status(500)
        .send(err.message)
    })
})

router.patch('/:id', (req, res) => {
  const id = req.params.id
  const task = req.body

  db.updateTask(id, task)
    .then(() => {
      db.getTasks()
        .then(tasks => {
          res
            .status(200)
            .json(tasks)
        })
    })
    .catch(err => {
      res
        .status(500)
        .send(err.message)
  })
})

router.delete('/:id', (req, res) => {
  const id = req.params.id

  db.deleteTask(id)
    .then(() => {
      res
        .status(200)
        .send(id)
    })
    .catch(err => {
      res
        .status(500)
        .send(err.message)
    })
})

module.exports = router