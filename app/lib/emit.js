import socket from './socket';

module.exports.sendMessage = (message) => {
  socket.emit('directMessage', message)
}

module.exports.addUser = (user) => {
  socket.emit('addUser', user)
}

module.exports.removeUser = (user) => {
  socket.emit('removeUser', user)
}
