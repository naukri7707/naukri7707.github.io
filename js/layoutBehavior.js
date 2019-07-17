$(function () {
  $('#messageField').css('display', 'none');
  $('#messageField>p').fadeOut(0);
});

function showMessage(msg) {
  const $msgField = $('#messageField');
  const $msg = $msgField.children('p');
  $msgField.css('display', 'flex');
  $msg.text(msg).fadeIn('fast').delay(300).fadeOut('swing', () => {
    $msgField.css('display', 'none');
  });
}