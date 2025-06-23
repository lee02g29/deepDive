const products = {
  item1: {
    img: "cinnamon.png",
    title: "10k 팔찌",
    price: "145,520",
  },
  item2: {
    img: "cinnamon.png",
    title: "18k 골드 반지",
    price: "145,520",
  },
  item3: {
    img: "cinnamon.png",
    title: "14/18k 체인 팔찌",
    price: "498,900",
  },
  item4: {
    img: "cinnamon.png",
    title: "14k 골드 팔찌",
    price: "209,880",
  },
  item5: {
    img: "cinnamon.png",
    title: "14k 핸드메이드 팔찌",
    price: "669,480",
  }
};


// 대괄호 -> 중괄호
// 객체만 뽑고 싶을 때

let cardList = document.getElementById("card-list");

for (let prod in products) {
  const div = document.createElement("div");

  console.log(prod, products[prod]);
  div.className = "card";
  div.innerHTML = `
  <img src="../imgs/${products[prod].img}">
  <p>${products[prod].title}</p>
  <h4>${products[prod].price}원</h4>
  `;
  // img의 경우 src가 달라질 수 있을 경우 백틱 말고 다른 방법을 쓸 수도 있음

  cardList.appendChild(div);
}
