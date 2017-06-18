const
  socketio = require('socket.io'),
  guestNumber = 1;

let
  io,
  nickNames = {},
  namesUsed = [],
  currentRoom = {};

