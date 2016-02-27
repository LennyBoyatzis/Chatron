import socket from './socket';

export default function sendMessage(message) {
  socket.emit('directMessage', message)
}

export default function addUser(user) {
  socket.emit('addUser', user)
}
