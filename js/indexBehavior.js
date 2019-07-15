// 閱讀更多效果
$('.post').each(function () {
  if ($(this).css('height') < $(this).css('max-height'))
  {
    $(this).children('.more').remove();
  }
});

function readMore() {
  $(event.target).parents('.post').css('max-height', '99999px');
  $(event.target).parent().remove();
}

// 程式碼複製
$('.highlight tr .code').each(function () {
  $(this).append('<td class="copy-button" onclick="copyCode()">Copy</td>');
});

function copyCode() {
  var code;
  $(event.target).parent().find('.line').each(function () {
    code += $(this)[0].innerText + "\n";
  });
  Copy(code);
}

function Copy(text) {
  var tmp = document.createElement('textarea');
  tmp.value = text;
  document.body.appendChild(tmp);
  tmp.select();
  document.execCommand("Copy");
  showMessage('複製成功');
  tmp.remove();
}

