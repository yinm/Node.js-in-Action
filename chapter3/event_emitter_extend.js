function Watcher(watchDir, processedDir) {
  this.watchDir = watchDir;
  this.processedDir = processedDir;
}

const events = require('events');
const util = require('util');

util.inherits(Watcher, events.EventEmitter);