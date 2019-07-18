
$(function () {
  // 動態嵌入程式碼複製按鈕
  $('.highlight').find('.code').append('<td class="copy-button" onclick="copyCode()">Copy</td>');
  // 分類頁籤首尾項特效
  $('.category-bar .category-list').each(function () {
    const $linkList = $(this).find('.category-list-link');
    $linkList.first().addClass('first-link');
    $linkList.last().addClass('last-link');
  });
});

// 閱讀更多效果
function readMore() {
  $(event.target).parents('.article').find('.hidden-content').css('display', 'block');
  $(event.target).parent().remove();
}



// 程式碼複製效果
function copyCode() {
  var code = "";
  $(event.target).parent().find('.line').each(function () {
    code += $(this)[0].innerText + "\n";
  });
  Copy(code);
}

// 複製到剪貼簿
function Copy(text) {
  var tmp = document.createElement('textarea');
  tmp.value = text;
  document.body.appendChild(tmp);
  tmp.select();
  document.execCommand("Copy");
  tmp.remove();
  showMessage('複製成功');
}