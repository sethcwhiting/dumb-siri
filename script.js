$('input').on('keyup', function(key) {
  if (key.which === 13) {
    var question = $(this).val();
    askQuestion(question);
  }
});

function askQuestion(question) {
  $('input').attr('disabled', true);
  $('input').val('');

  $('#messages-inner').append('<div class="text-right"><div class="message right">' + question + '</div></div>');

  handleOverflow();
  generateAnswer(question);
};

function generateAnswer(question) {
  var answer = 'Wait... what';
  var unsure = true;

  var words = question.split(' ');
  var firstWord = words[0];
  var secondWord = words[1];

  if (firstWord.toLowerCase() === 'what') {
    answer = '42';
  }
  if (firstWord.toLowerCase() === 'why') {
    answer = 'magnets';
  }
  if (firstWord.toLowerCase() === 'i' && secondWord.toLowerCase() === 'said') {
    answer = 'Oh okay cool';
    unsure = false;
  }

  answerQuestion(answer, unsure);
};

function answerQuestion(answer, unsure) {
  var punctuation = '.';

  if (unsure) {
    stammer()
    punctuation = '?';
  }

  setTimeout(function() {
    $('#messages-inner').append('<div><div class="message left">' + answer + punctuation + '</div></div>');
    $('input').attr('disabled', false);
    $('input').focus();
    handleOverflow();
  }, 500);
};

function stammer() {
  var gibberish = 'Umm... I dunno... like... ';

  $('#messages-inner').append('<div><div class="message left">' + gibberish + '</div></div>');

  handleOverflow();
}

function handleOverflow() {
  var innerHeight = $('#messages-inner').height();
  var outerHeight = $('#messages').height();
  var diff = innerHeight - outerHeight;

  if (innerHeight > outerHeight) {
    $('#messages').scrollTop(diff);
  }
};

$('input').focus();
