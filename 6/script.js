$('input').on('keyup', function(keyNumber) {

  // var question = $('input').val();

  if (keyNumber.which == 13) {
    ask();
  }

});

function ask() {

  alert('Asking a question!');

};
