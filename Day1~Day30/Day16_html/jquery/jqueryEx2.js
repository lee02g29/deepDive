console.log($('img').width('200').height('300'))

let img = $('img')

/*
  애니메이션을 자동으로 만들어주는 함수
  fadeOut(ms)
  800ms -> 0.8초

  jquery에서 다른 값들은 문자 타입으로 들어감
  이벤트를 하는 함수들은 숫자로 줘야함

  fadeIn
  slideUp
  slideDown
  toggle
  */
img.fadeOut('800')

/*
  on() 함수
  addEventListener 하나의 요소에 여러가지 이벤트를 설정 가능

  on(여러 가지 이벤트를 작성 가능)
  */

// 버튼에 이미지 작성
// $('button').on('click', function() {
//   alert("클릭됨")
// })

$('button').on({
  click: function() {
    $('#text').append('마우스 클릭됨')
  },
  mouseenter : function() {
    $('#text').append('마우스 버튼 위로 올라옴')
  }
})

/*
  off()
  - 이벤트 연결 제거
*/
$('button').off('mouseenter', function() {
  alert("제거됨")
})
