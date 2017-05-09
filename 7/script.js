$('input').on('keyup', function(keyNumber) {

  var question = $('input').val();

  if (keyNumber.which == 13) {
    ask(question);
  }

});

function ask(question) {

  alert('Asking a question: ' + question);

};
