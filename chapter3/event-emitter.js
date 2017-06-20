const EventEmitter = require('events').EventEmitter;
const channel = new EventEmitter();
channel.on('join', function() {
  console.log('Welcome!');
});

channel.emit('join');