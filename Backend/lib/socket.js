const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)

module.exports = {
  app: app,
  http: http,
  io: io
}
