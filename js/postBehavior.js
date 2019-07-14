const $link = $('.post>.title>.link');
const $sep = $('.post>.title>.separator');
$link.hover(() => {
  $sep.stop().animate({ width: '0%' }, 500, 'swing');
}, () => {
  $sep.stop().animate({ width: '100%' }, 500, 'swing');
});


