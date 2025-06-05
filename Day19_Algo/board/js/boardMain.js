/*
  스택을 이용해서 게시판을 구현
  추가는 항상 위에 있는 push()
  삭제는 항항 위에 pop()

  게시판에 들어갈 id, title, content, timestamp(시간)


  1. 스택을 관리할 배열

  2. HTML 요소 찾기
  
  3. 글 올리기 함수 만들기
    - 버튼을 클릭하면 input에 있는 제목과 내용을 가지고 오기
    - Date() 함수 써서 timestamp 찍기
    id는 글을 추가할 때마다 1씩 증가 title과 나머지 값들하고 같이 객체 형태로 저장

  4. 글 올리고 나서 html 화면에 그리기

  id 사용 줄이기
  한 번 찾아놓은 요소들 -> 변하지 않는거면 함수 밖에 전역변수로 두기
*/
const APP_PREFIX = "myBoard"; // localStorage 키값 구분을 위한 접두어
let boardList = [];
let id = 1;

function addPost() {
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  if (!title) {
    alert("제목을 입력해주세요.");

    return;
  }

  if (!content) {
    alert("내용을 입력해주세요.");

    return;
  }

  let cur = {
    id: id++,
    title: title,
    content: content,
    createDate:
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
  };

  boardList.push(cur);
  localStorage.setItem(APP_PREFIX + cur.id, JSON.stringify(cur));

  uploadPost();

  const noPostsMessage = document.getElementById("noPosts");
  noPostsMessage.style.display = "none";

  document.getElementById("title").value = "";
  document.getElementById("content").value = "";
}

function uploadPost() {
  const postView = document.getElementById("postList");

  postView.innerHTML = "";
  /* 이거 안쓰면 게시물 중복 표시됨

    근데 이거 쓰면 loadPostList 함수로 인해 
    <p id="noPosts"> 태그가 영원히 사라지고,
    개수에 따라 p태그 보이는 여부를 조절을 할 수 없음.

    해결법 : html 구조를 수정해서, 
    noPosts와 postList가 형제노드이도록 했음
  */

  [...boardList].reverse().forEach((item) => {
    const div = document.createElement("div");
    const title = document.createElement("p");
    const content = document.createElement("p");
    const createDate = document.createElement("p");

    div.className = "post";
    title.className = "post-title";
    content.className = "post-content";
    createDate.className = "post-date";

    title.textContent = item.id + " : " + item.title;
    content.textContent = item.content;
    createDate.textContent = item.createDate;

    div.appendChild(title);
    div.appendChild(content);
    div.appendChild(createDate);

    postView.appendChild(div);
  });
}

function removePost() {
  if (boardList.length === 0) {
    alert("삭제할 게시글이 없습니다");
    return;
  }

  let curId = boardList.pop().id;
  localStorage.removeItem(APP_PREFIX + curId);

  if (boardList.length === 0) {
    const noPostsMessage = document.getElementById("noPosts");
    noPostsMessage.style.display = "block";
  }
  uploadPost();
}

// ------------------

function loadPostList() {
  let loadedPost = [];

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);

    if (key && key.startsWith(APP_PREFIX)) {
      const item = localStorage.getItem(key);

      const posts = JSON.parse(item);
      loadedPost.push(posts);
    }
  }

  loadedPost.sort((a, b) => a.id - b.id);
  // 최신순 정리
  boardList = loadedPost;

  if (boardList.length > 0) {
    id = Math.max(...boardList.map((item) => item.id)) + 1;
  } else {
    id = 1; // 게시물이 없으면 1부터 시작
  }

  const noPostsMessage = document.getElementById("noPosts");

  if (boardList.length === 0) {
    noPostsMessage.style.display = "block";
  } else {
    noPostsMessage.style.display = "none";
  }

  uploadPost();
}

document.addEventListener("DOMContentLoaded", loadPostList);
