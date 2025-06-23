function btnClicked() {
  let title = document.getElementById("title").value;
  let content = document.getElementById("content").value;

  let container = document.createElement("div");
  let post_title = document.createElement("h4");
  let post_content = document.createElement("p");
  let delete_button = document.createElement("button");

  let post = document.getElementById("post");

  post_title.innerText = title;
  post_content.innerText = content;
  delete_button.innerText = "삭제";

  post_title.classList.add("post__title");
  post_content.classList.add("post__content");
  delete_button.classList.add("delete-button");

  delete_button.addEventListener("click", function () {
    container.remove();
  });

  container.appendChild(post_title);
  container.appendChild(post_content);
  container.appendChild(delete_button);

  container.classList.add("post__container");

  post.appendChild(container);

  document.getElementById("title").value = "";
  document.getElementById("content").value = "";
}

/*
  onClick
  - html에 직접 이벤트를 지정하는 방식
  - 버튼 딱 1개의 반응만 연결
  
  그 외에
  버튼에 여러 가지 반응을 자유롭게 추가하고 싶을 때,
  클릭만 하는게 아니라 키보드로 눌렀을 때 실행
*/

/* 
  addEventListener 
  - 하나의 요소에 여러가지 반응을 연결 할 수 있음

  요소.addEventListener("반응", 실행할 함수(){});
  반응 -> click, mouseover, key
*/

let btn = document.getElementById("addBtn");

// 적절한 함수명이 떠오르지 않을 때, 이름 없이 작성할 수 있음

// 클릭시
btn.addEventListener("click", function () {
  alert("클릭됨");
});

// 마우스가 버튼 위로 올라갔을 때 실행
btn.addEventListener("mouseover", function () {
  btn.style.backgroundColor = "pink";
});

/*
  addEventListener
  - 이벤트 중복을 깔끔하게 처리하고 싶을 때
  - 여러 가지 이벤트를 하나의 요소(복합 동작) 구현할 때

*/
