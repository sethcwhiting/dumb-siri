$('input').on('keyup', function(keyNumber) {

  var question = $('input').val();

  if (keyNumber.which == 13) {
    alert(question);
  }

});
