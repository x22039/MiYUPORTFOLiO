// ヘッダーを常に固定するための設定
$(document).ready(function () {
    $('#header').addClass('fixed');
});

// ナビゲーションをクリックした際のスムーススクロール
$('#g-navi a').click(function () {
    var elmHash = $(this).attr('href'); // hrefの内容を取得
    var pos = Math.round($(elmHash).offset().top - $('#header').outerHeight(true)); // headerの高さを引く
    $('body,html').animate({ scrollTop: pos }, 500); // 取得した位置にスクロール※数値が大きいほどゆっくりスクロール
    return false; // リンクの無効化
});
