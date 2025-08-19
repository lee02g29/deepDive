import React from "react";
import { order } from "./page";

type Props = { order: order };

export default function OrderItem({ order }: Props) {
  return (
    <li key={order.orderId} className="grid grid-cols-5 gap-4 py-2 border-b">
      <span>{order.orderId}</span>
      <span>{order.productName}</span>
      <span>{order.stock}</span>
      <span>{order.price.toLocaleString("ko-KR")}원</span>
      <span>{order.status}</span>
    </li>
  );
}
