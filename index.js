var through2 = require('through2');

module.exports = function(flushIncomplete){
  var buffer = '';
  return through2(function(chunk, enc, cb){
    buffer += chunk.toString();

    var lines = buffer.split('\n');
    buffer = lines.pop();

    var self = this;
    lines.forEach(function(line){
      self.push(line);
    });

    cb();
  }, function(cb){
    if (flushIncomplete) {
      this.push(buffer);
    }
    cb();
  });
};