// 노드 클래스
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    // 처음 노드 생성시, 자식노드 없음
  }
}

// 시작점 root
let root = null;

function insert() {
  // 노드 추가

  const value = document.getElementById("inputValue").value;
  const tree = document.getElementById("tree");

  // 예외처리
  if (value === "") {
    alert("값을 입력하세요");
    return;
  }

  /*
    무조건 루트에 추가할 수 없음
    - 루트가 null이면 생성된 노드 루트에 저장
    - 루트에 객체가 있음
      -> 루트와 비교해서 작으면 left에 저장할 수 있도록 설정      
  */

  if (root === null) {
    // 노드 생성
    root = new Node(value);
    console.log(root);

    const nodeEl = document.createElement("div");
    nodeEl.className = "node";
    nodeEl.innerText = root.value;

    tree.append(nodeEl);

    return alert("루트를 추가했습니다.");
  }

  // 이미 추가된 자식 노드가 있는지 확인
  let childrenBox = document.querySelector(".children");

  if (!childrenBox) {
    // 자식 노드가 없을 때 children 추가
    childrenBox = document.createElement("div");
    childrenBox.className = "children";
    tree.appendChild(childrenBox);
    // children은 여기에서 추가
  }

  //  루트보다 작으면 왼쪽 자식 추가
  if (value < root.value) {
    root.left = new Node(value);

    const nodeEl = document.createElement("div");
    nodeEl.className = "node";
    nodeEl.innerText = value;

    childrenBox.prepend(nodeEl);
    // 앞에 추가하기 위해 prepend
    /*
      잘못 썼던 코드
      childrenBox.appendChild(nodeEl);
      // 이건 왼쪽에서는 prepend 써야함
      tree.prepend(childrenBox);
      // 이건 이미 위에 있음 + prepend도 아님

      ->  다시 삽입하려고 하면, 
      해당 요소는 기존 위치에서 제거된 후 새로운 위치로 이동
      -> 결과 : 루트노드가 자식 노드 아래에 놓임
    */
  }

  // 루트보다 크면 오른쪽으로 객체 생성 후 붙이기
  if (value > root.value) {
    root.right = new Node(value);

    const nodeEl = document.createElement("div");
    nodeEl.className = "node";
    nodeEl.innerText = value;

    childrenBox.appendChild(nodeEl);
  }
}

// 루트를 기준으로 데이터가 있다면, 다음 데이터를 입력받기
// 루트의 값보다 작으면 left, 크면 right로 노드를 연결
