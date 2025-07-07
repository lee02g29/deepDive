import React from "react";

export default function Test1() {
  const shirtsize = ["XS", "S", "L", "L", "XL", "S"];
  const sizeOrder = ["XS", "S", "M", "L", "XL", "XXL"];

  /*
    1. 직관적이고 이해하기 쉬움
      filter가 매 번 반복이 되기 때문에 성능면에서 조금 떨어짐
  */
  const countSizes = () => {
    const count = sizeOrder.map(
      (size) => shirtsize.filter((s) => s === size).length
    );

    return count;
  };

  const result = countSizes();

  /*
    2. forEach + 객체로 카운팅
    빠름 O(n), 읽기 좋음
    실무에서도 자주 씀
    객체로 정리되므로 확장성이 있음
    단점 : 초기값을 넣어줘야함
  */

  const counts = { XS: 0, S: 0, M: 0, L: 0, XL: 0, XXL: 0 };

  const countSize2 = () => {
    shirtsize.forEach((size) => {
      counts[size]++;
    });

    return ["XS", "S", "M", "L", "XL", "XXL"].map((size) => counts[size]);
  };

  const result2 = countSize2();

  /*
    3. reduce 사용
  */

  const sizeOrder2 = ["XS", "S", "M", "L", "XL", "XXL"];

  const countSize3 = () => {
    const countObj = shirtsize.reduce((acc, size) => {
      acc[size] = (acc[size] || 0) + 1;
      return acc;
    }, {});
    return sizeOrder.map((size) => countObj[size] || 0);
  };

  const result3 = countSize3();

  return (
    <div>
      <h3>단체 티셔츠 주문하기</h3>
      <p>입력 배열: {JSON.stringify(shirtsize)}</p>
      <p>결과: {JSON.stringify(result)}</p>
    </div>
  );
}

/*
  입력값
  - 문자열 배열, shirtsize

  출력값
  - 개수를 센 숫자 배열

  중요한 데이터 라벨
  - 티셔츠 사이즈 목록
*/
