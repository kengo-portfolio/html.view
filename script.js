// アニメーションさせたいクラス
var container = $(".demoTxt");
// アニメーションスピード
var speed = 300;

// テキストの間にスペースを入れます
var content = container.html();
var text = $.trim(content);
var newHtml = "";

// スペースで区切ったテキストを、テキストの数だけspanで囲む
text.split("").forEach(function(v) {
 newHtml += '<span>' + v + '</span>';
});

// spanで囲んだテキスト群をHTMLに戻す
container.html(newHtml);

// 1文字ずつ表示
var txtNum = 0;
container.css({opacity: 1});
setInterval(function() {
  container.find('span').eq(txtNum).css({opacity: 1});
 txtNum++
}, speed);

/*ここからはスライドのコード*/ 


/*ここから回転するコード*/

$(window).on('scroll', function (){

  var elem = $('.elem');
  var isAnimate = 'isAnimate';
  
  elem.each(function () {
    var elemOffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();

    if(scrollPos > elemOffset - wh + (wh / 2) ){
      $(this).addClass(isAnimate);
    }
    
  });

});
/*ここまで回転するコード*/




