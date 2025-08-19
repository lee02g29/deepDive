// 로그인 : 쿠키 설정
import { getCookie, setCookie } from "cookies-next";

export default function handler(req, res) {
  
  // 발급 토큰
  const token = "demo-token"
  setCookie("adminToken", token, {req,res}) // 기본 설정
  
  return res.status(200).json({ok: true})
}