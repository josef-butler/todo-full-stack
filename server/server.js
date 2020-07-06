const express = require('express')
const routes = require('./routes/routes')

const server = express()

server.use(express.json())
server.use(express.static('public'))

server.use('/api/v1/tasks', routes)

module.exports = server