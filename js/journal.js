var moment = require('moment');

exports.Journal = function(body){
  this.body = body;
  this.timeCreated = moment().format();
}

exports.Journal.prototype.read = function() {
  return "Here is your journal entry: " + this.body;
}
