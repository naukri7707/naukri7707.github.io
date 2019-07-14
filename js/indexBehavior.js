// 分隔線動畫
const $titles = $('.post>.title');

$titles.each(function () {
  const $link = $(this).children('.link');
  const $sep = $(this).children('.separator');
  $link.hover(() => {
    $sep.stop().animate({ width: '0%' }, 500, 'swing');
  }, () => {
    $sep.stop().animate({ width: '100%' }, 500, 'swing');
  });
})



// 閱讀更多效果
$('.post').each(function () {
  if ($(this).height() < 700)
  {
    $(this).children(".more").remove();
  }
});

function readMore() {
  $(event.target).parents('.post').css('max-height', '99999px');
  $(event.target).parent().remove();
}