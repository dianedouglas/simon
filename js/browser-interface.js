var Journal = require('./../js/journal.js').Journal;
$(document).ready(function(){
  $('#journal').submit(function(event){
    event.preventDefault();
    var bodyText = $('#body').val();
    var newJournal = new Journal(bodyText);
    console.log(newJournal.read());
  });
});
