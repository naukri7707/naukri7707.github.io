var pervScrollTop = $(window).scrollTop();

$(function () {
  const $navbar = $('#navbar');
  $(window).scroll(function () {
    if ($(window).scrollTop() <= pervScrollTop) {
      $navbar.css('transform', 'translateY(0)');
    }
    else {
      $navbar.css('transform', 'translateY(-' + $navbar.css('height') + ')');
    }
    pervScrollTop = $(window).scrollTop();
  });
});

function showMessage(msg) {
  const $msgField = $('#messageField');
  const $msg = $msgField.children('p');
  $msgField.css('display', 'flex');
  $msg.text(msg).fadeIn('fast').delay(300).fadeOut('swing', () => {
    $msgField.css('display', 'none');
  });
}