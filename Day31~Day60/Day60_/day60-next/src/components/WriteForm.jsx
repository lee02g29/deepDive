import React from "react";

export default function WriteForm() {
  return (
    <div>
      <form action="/api/hello" method="POST">
        <input type="text" placeholder="상품명" name="title"/>
        <input type="text" placeholder="가격" name="price"/>
        <button type="submit">상품 추가</button>
      </form>
    </div>
  );
}
