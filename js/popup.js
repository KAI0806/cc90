//下から表示させる要素を指定
let $pagetop = $('.window');

$(window).on( 'scroll', function () {
  //スクロール位置を取得
  if ( $(this).scrollTop() < 800 ) {
    $pagetop.removeClass('isActive');
  } else {
    $pagetop.addClass('isActive');
  }
});