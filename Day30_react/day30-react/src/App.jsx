import KakaoMap1 from "./kakakoMap/KakaoMap1"
import KakaoLogin from "./pages/KakaoLogin"
import NaverLogin from "./pages/NaverLogin"

function App() {


  return (
    <>
      <h1>Home Page</h1>
      {/* <Link to='/comments'>링크 이동</Link> */}

      <h4>카카오 로그인</h4>
      <KakaoLogin />
      <KakaoMap1 />
      <NaverLogin />
    </>
  )
}

export default App
