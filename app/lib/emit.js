import socket from './socket';

export default function sendMessage(message) {
  socket.emit('directMessage', message)
}
