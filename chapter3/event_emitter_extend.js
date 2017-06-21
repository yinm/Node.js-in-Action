function Watcher(watchDir, processedDir) {
  this.watchDir = watchDir;
  this.processedDir = processedDir;
}

const events = require('events');
const util = require('util');

util.inherits(Watcher, events.EventEmitter);

const fs = require('fs');
const watchDir = './watch';
const processeDir = './done';

Watcher.prototype.watch = function() {
  const watcher = this;
  fs.readDir(this.watchDir, function(err, files) {
    if (err) throw err;

    for (index in files) {
      watcher.emit('process', files[index]);
    }
  })
};

Watcher.prototype.start = function() {
  const watcher = this;
  fs.watchFile(watchDir, function() {
    watcher.watch();
  });
};

const watcher = new Watcher(watchDir, processedDir);

watcher.on('process', function process(file) {
  const watchFile = this.watchDir + '/' + file;
  const processedFile = this.processedDir + '/' + file.toLowerCase();

  fs.rename(watchFile, processedFile, function(err) {
    if (err) throw err;
  });
});