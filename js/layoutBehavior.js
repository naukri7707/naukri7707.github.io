$(function () {
  // 擴充給 addclass() 一個回調函數
  const oAddClass = $.fn.addClass;
  $.fn.addClass = function () {
    for (var i in arguments) {
      var arg = arguments[i];
      if (!!(arg && arg.constructor && arg.call && arg.apply)) {
        setTimeout(arg.bind(this));
        delete arguments[i];
      }
    }
    return oAddClass.apply(this, arguments);
  }

  const $navbar = $('#navbar');
  if ($(window).scrollTop() > 0) {
    $navbar.removeClass('banner-style').addClass('normal-style', function () {
      $navbar.css('transition', 'background-color 400ms');
    });
  }
  else {
    $navbar.css('transition', 'background-color 400ms');
  }

  $(window).scroll(function () {
    if ($(window).scrollTop() <= 20) {
      $navbar.removeClass('normal-style').addClass('banner-style');
    }
    else {
      $navbar.removeClass('banner-style').addClass('normal-style');
    }
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