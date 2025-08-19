// lib/api.js

export function getVoteResults() {
  // 실제로는 데이터베이스에서 실시간 투표 결과를 가져오는 로직이 들어갑니다.
  const result1 = Math.floor(Math.random() * 50) + 50; // 50~99
  const result2 = Math.floor(Math.random() * 50) + 50; // 50~99
  
  return {
    optionA: result1,
    optionB: result2,
  };
}