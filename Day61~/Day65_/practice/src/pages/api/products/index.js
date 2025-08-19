// lib/api.js

const products = [
  { id: '101', name: '스마트폰', price: 900000, description: '최신 스마트폰입니다.' },
  { id: '102', name: '노트북', price: 1500000, description: '고성능 노트북입니다.' },
  { id: '103', name: '무선 이어폰', price: 200000, description: '잡음 제거 기능이 있는 이어폰입니다.' },
];

export function getProductById(id) {
  // 실제로는 데이터베이스나 외부 API를 호출하는 로직이 들어갑니다.
  return products.find(product => product.id === id) || null;
}