function btnClicked() {
  let title = $("#title").val();
  let content = $("#content").val();

  // createElement는 $("생성할 태그명")
  let container = $("<div></div>");
  let post_title = $("<h4></h4>");
  let post_content = $("<p></p>");
  let delete_button = $("<button></button>");

  let post = $("#post");

  // innerText는 text로
  // = 을 쓰지 않고 괄호에 값을 넣음
  post_title.text(title);
  post_content.text(content); 
  delete_button.text("삭제");

  // classList.add는 addClass로
  post_title.addClass("post__title");
  post_content.addClass("post__content");
  delete_button.addClass("delete-button");

  // addEventListener는 on으로,
  delete_button.on("click", function () {
    container.remove();
  });

  // appendChild는 append로
  container.append(post_title);
  container.append(post_content);
  container.append(delete_button);

  container.addClass("post__container");

  post.append(container);

  $("#title").val("");
  $("#content").val("");
}

let btn = $("#addBtn");

btn.on("click", function () {
  alert("클릭됨");
});

btn.on("mouseover", function () {
  btn.css("backgroundColor", "pink");
});

btn.on("mouseout", function () {
  btn.css("backgroundColor", "#4caf50");
});


// eq = equal
// for each -> each
