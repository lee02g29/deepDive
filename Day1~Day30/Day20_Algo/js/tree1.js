/*
  프론트엔드에서 웹을 다루는 구조 DOM(Document Object Model)이 트리구조0


  트리(tree)
  - 루트(시작점) 중심으로 하나 이상의 꼭지점들이 비선형이면서,
  비 순환적 경로로 연결되어있는 그래프

  비순환 -> 위로 올라가지 않음
  시작점을 기준으로 (루트) 위에서 아래로 내려가는 구조

  자료 구조의 가장 기본적인 단위
  노드(Node)
    - 데이터와 다른 노드의 연결 정보를 포함(주소)
    - 정보를 담은 박스
  */

/*
  자바 스크립트의 객체는 1회성

  클래스는 객체를 생성하기 위한 템플릿
  - 변수와 함수를 묶어서 표현함
  ex) 사람으로 클래스를 만든다면
    - 사람의 나이, 이름, 혈액형 (속성) 값
    - 말하기, 먹기, 자기 (행동) 움직임
  
  ** 기본값을 설정할 수 있음
  - 생성자에 기본값을 설정할 수 있음
  constructor(변수1 = 기본값1, 변수2 = 기본값2...)
*/
class TreeNode {
  // 값을 받기 위해서, 생성할 때 값을 초기화
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  /*
    constructor()
    - 객체를 처음 만을 때 실행되는 함수
    - 객체를 처음 만들 때, 자동으로 constructor가 실행되어 처음(초기값)을
      설정함
    
  */
}

// 실제 틀을 사용하여 메모리 생성
const node1 = new TreeNode(50);

/*
  클래스 생성
  
  사람에 대한 정보를 생성하는 객체
*/
class User {
  constructor(name, age) {
    // 생성되는 객체의 이름과 나이를 저장
    this.name = name;
    this.age = age;
  }
}

const user1 = new User("이름1", 20);
console.log(user1.name, user1.age);

const user2 = new User("이름2", "20");
console.log(user2.name, user2.age);

/*
  동물 클래스
  - 이름, 품종
*/

class Animal {
  constructor(name = "", breed = "") {
    if (name === "" || breed === "") {
      alert("초기값을 입력해주세요.");
    }

    this.name = name;
    this.breed = breed;
  }
}

const dog = new Animal("강아지", "믹스");
const cat = new Animal("고양이", "랙돌");

const cat1 = new Animal();
console.log(cat1);

/*
  트리의 종류 6가지

  1. 일반 트리
  - 자식 노드를 제한없이 가질 수 있음
  - ex) 조직도, 메뉴 트리

  2. 이진 트리
  - 자식 노드를 최대 2개까지 가질 수 있음
  - ex) 토너먼트

  3. 포화 이진트리
  - 모든 레벨의 부모 노드에 자식 노드가 2개이거나, 아예 없는(0개)인 구조
  
  4. 완전 이진트리
  - 왼쪽부터 채워진 이진트리

  5. 이진 탐색 트리 / 6. 균형 이진 트리

  이진트리를 많이 사용하는 이유
  - 최대 자식이 2
  - 정렬된 데이터를 빠르게 탐색, 삽입, 삭제를 할 수 있음
  - 반씩 나누어 빠르게 검색
*/