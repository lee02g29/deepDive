import React from "react";
import { order } from "./page";

type Props = { order: order };

export default function OrderItem({ order }: Props) {
  return (
    <tr key={order.orderId}>
      <td className=" border-gray-300 px-4 py-2 w-12 text-center"><input type='checkbox'></input></td>
      <td className="text-center px-4 py-2">{order.orderId}</td>
      <td className="text-center px-4 py-2">{order.productName}</td>
      <td className="text-center px-4 py-2">{order.stock}</td>
      <td className="text-center px-4 py-2">{order.price.toLocaleString("ko-KR")}원</td>
      <td className="text-center px-4 py-2">{order.status}</td>
    </tr>
  );
}
