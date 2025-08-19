import React from "react";
import OrderItem from "./OrderItem";

type Status = "배송 중" | "배송 완료" | "결제 완료" | "취소 완료";

export type order = {
  orderId: number;
  productName: string;
  stock: number;
  price: number;
  status: Status;
};

export default function Index() {
  const order1: order = {
    orderId: 102345678,
    productName: "샤오미 미밴드7",
    stock: 1,
    price: 59000,
    status: "배송 완료",
  };

  const order2: order = {
    orderId: 102345677,
    productName: "USB 충전 케이블 1m",
    stock: 2,
    price: 5000,
    status: "배송 중",
  };

  const order3: order = {
    orderId: 102345676,
    productName: "블루투스 이어폰",
    stock: 1,
    price: 89000,
    status: "결제 완료",
  };

  const order4: order = {
    orderId: 102345675,
    productName: "무선 마우스",
    stock: 1,
    price: 15900,
    status: "취소 완료",
  };

  const orderList: order[] = [order1, order2, order3, order4];

  return (
    <div>
      <h3>주문 내역</h3>
      <table>
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 w-12 text-center"></th>
            <th className="border border-gray-300 px-4 py-2">주문 번호</th>
            <th className="border border-gray-300 px-4 py-2">상품명</th>
            <th className="border border-gray-300 px-4 py-2">수량</th>
            <th className="border border-gray-300 px-4 py-2">가격</th>
            <th className="border border-gray-300 px-4 py-2">배송상태</th>
          </tr>
        </thead>
        <tbody>
          {orderList.map((order) => (
            <OrderItem key={order.orderId} order={order} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
