$('input').on('keyup', function(keyNumber) {

  var question = $('input').val();

  if (keyNumber.which == 13) {
    ask(question);
  }

});

function ask(question) {

  var htmlOpen = '<div class="text-right"><div class="message right">';
  var htmlClose = '</div></div>';
  $('#messages').append(htmlOpen + question + htmlClose);
  $('input').val('');

  answer();

};

function answer() {

  var htmlOpen = '<div><div class="message left">';
  var htmlClose = '</div></div>';
  var answer = 'No.'
  $('#messages').append(htmlOpen + answer + htmlClose);

};
