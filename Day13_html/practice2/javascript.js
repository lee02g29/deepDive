
function addBtnClick() {
  let addPara = document.createElement("p");
  let pBox = document.getElementById("prac1");
  addPara.innerText = "새로 추가된 내용입니다.";

  console.log(addPara)
  pBox.appendChild(addPara);
}

function addInputClick() {
  let value = document.getElementById("inputText").value
  let addContent = document.createElement("div");
  let addBody = document.getElementById("prac3");

  addContent.innerText = value;
  addContent.classList.add("tag");
  document.getElementById("inputText").value = "";
  addBody.appendChild(addContent);
}

let colorList = ["빨강", "노랑", "파랑"];

for(let color of colorList) {
  let li = document.createElement("li");
  li.innerText = color;

  let boxOl = document.getElementById("box_ol");
  // 반복문 밖으로 빼보기
  boxOl.appendChild(li);
}