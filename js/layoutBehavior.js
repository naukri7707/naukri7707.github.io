const $msg = $('#messageField>p');

$msg.fadeOut(0);

function showMessage(msg) {
  $msg.text(msg).fadeIn().delay(500).fadeOut('swing');
}
