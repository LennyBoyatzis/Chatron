'use strict'

// const app = require('express')()
// const http = require('http').Server(app)
// const io = require('socket.io')(http)
const app = require('./lib/socket').app
const http = require('./lib/socket').http
const io = require('./lib/socket').io
const randomkey = require('randomkey')
const bodyParser = require('body-parser')
const PORT = 3001
const generatePregistrationId = require('./lib/utils')
const mongoose = require('mongoose')
const UserSchema = require('./models/User')
const User = mongoose.model('User', UserSchema)
const MessageSchema = require('./models/Message')
const Message = mongoose.model('Message', MessageSchema)


const db = mongoose.connection;
mongoose.connect('mongodb://localhost:27017/chatron')

db.on('connected', () => {
  console.log("Database is connected")
  start()
})

function start () {

  app.use(bodyParser.urlencoded())
  app.use(bodyParser.json())
  app.post('/api/signup', require('./api/signup'));
  app.post('/api/sessions/create', require('./api/session/create'));
  app.post('/api/sessions/close', require('./api/session/close'));
  app.get('/api/users/get', require('./api/user/get'));
  app.use((req, res) => res.status(404).json({ error: '404 Not Found' }))

  io.on('connection', (socket) => {
    socket.on('directMessage', (msg) => {
      console.log('directMessage: ' + JSON.stringify(msg))
      io.emit('directMessage', msg)
    })
  })

  http.listen(PORT, () => {
    console.log(`====> Listening on port ${PORT}...🌎`)
  })

}
