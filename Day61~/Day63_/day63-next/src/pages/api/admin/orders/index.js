// 08.13
// 주문 조회: get post, 주문 상태 변경 patch

const mockOrders = [
  {
    id: 101,
    user: "홍길동",
    product: "티셔츠",
    quantity: 2,
    status: "배송 준비",
  },
  {
    id: 102,
    user: "김영희",
    product: "청바지",
    quantity: 1,
    status: "배송 중",
  },
];

export default function hanlder(req, res) {

  // 0814
  // 관리자 인증(Authorization)과 주문 데이터 관리를 동시에 처리하기 위해 사용
  const token = req.cookies?.authToken;

  if(token != "admin_token") {
    // 관리자가 아니면 에러를 유발. 관리자만 들어올 수 있도록 설정
    return res.status(401).json({ message: "Unthorized" })
  }

  if(req.method === "GET") {
    return res.status(200).json(mockOrders);
  }

  if(req.method === "PATCH") {
    const {id, status} = req.body;
    console.log("id : ", id);
    console.log("status", status);

    const order = mockOrders.find((order) => order.id === id);

    if(!order) {
      return res.status(404).json({message: "Order Not Found"})
    }
  
    order.status = status;

    return res.status(200).json({message: "Order update", order: order})
  }

  return res.status(405).end();
}