$(document).ready(function() {
  $('input').on('keyup', function(e) {
    if (e.which === 13) {
      var question = $(this).val();
      $(this).val('');
      $('#messages').append('<div><div class="message right">' + question + '</div></div>');
      var answer = 42;
      setTimeout(function() {
        $('#messages').append('<div class="text-right"><div class="message left">I dunno... like... ' + answer + '?</div></div>');
      }, 500);
    }
  });
});
