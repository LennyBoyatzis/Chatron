import socket from './socket';

module.exports.sendMessage = (message) => {
  console.log("Is this guy firing?", message)
  socket.emit('directMessage', message)
}

module.exports.addUser = (user) => {
  socket.emit('addUser', user)
}
