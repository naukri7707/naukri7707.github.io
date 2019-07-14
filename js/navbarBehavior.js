const HIDDEN = 60;
const POW = 3;
const $navbar = $('.navbar');
const $window = $(window);
//asddddd
if ($window.scrollTop() <= (HIDDEN << POW))
{
  $navbar.css('position', $window.scrollTop() === 0 ? 'relative' : 'fixed')
  $navbar.css('top', -($window.scrollTop() >> POW) + 'px');
}
else
{
  $navbar.css('position', 'fixed').css('top', -HIDDEN + 'px');
}

$window.scroll(function () {
  if ($window.scrollTop() <= (HIDDEN << POW))
  {
    $navbar.css('position', $window.scrollTop() === 0 ? 'relative' : 'fixed')
    $navbar.css('top', -($window.scrollTop() >> POW) + 'px');
  }
  else
  {
    $navbar.css('position', 'fixed').css('top', -HIDDEN + 'px');
  }
});

$navbar.hover(
  function () {
    if ($navbar.css('top') < '0px')
    {
      $navbar.animate({ top: '0px' }, 500, 'swing');
    }
  },
  function () {
    if ($navbar.css('top') > -HIDDEN + 'px')
    {
      $navbar.animate({ top: $window.scrollTop() <= HIDDEN << 3 ? -$window.scrollTop() >> 3 : -HIDDEN + 'px' }, 500, 'swing');
    }
  }
);

function scrolling($navbar, $window, HIDDEN) {
  if ($window.scrollTop() <= (HIDDEN << 4))
  {
    $navbar.css('position', $window.scrollTop() === 0 ? 'relative' : 'fixed')
    $navbar.css('top', -($window.scrollTop() >> 4) + 'px');
  }
  else
  {
    $navbar.css('position', 'fixed').css('top', -HIDDEN + 'px');
  }
}