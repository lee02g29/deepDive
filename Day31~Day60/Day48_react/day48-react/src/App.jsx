import { useForm } from "react-hook-form";
import UseWatchTest from "./components/UseWatchTest";
import WatchTest from "./components/WatchEx";
import UseWatchTest2 from "./components/UseWatchTest2";
import SwiperTest1 from './components/swiperTest/SwiperTest1';
import SwiperTest2 from "./components/swiperTest/SwiperTest2";
import SwiperTest3 from "./components/swiperTest/SwiperTest3";
import SwiperTest4 from "./components/swiperTest/SwiperTest4";
import SwiperTest5 from "./components/swiperTest/SwiperTest5";

function App() {
  return (
    <>
      {/* <UseWatchTest />
      <WatchTest />
      <UseWatchTest2 /> */}
      <SwiperTest1 />
      <SwiperTest2 />
      <SwiperTest3 />
      <SwiperTest4 />
      <SwiperTest5 />
    </>
  );
}

export default App;
/*
  watch()
  - 모든 값이나 특정 필드 값을 실시간으로 감시하는 함수
  - 지금 사용자가 쓰고 있는게 무엇인지 바로 알 수 있음

  const name = watch('name')
  name이라는 입력창에 들어간 내용을 계속 추적함

  watch()를 사용하지 않으면 폼 제출을 (handleSubmit)을 누르기 전까지는
  입력한 값들을 React hook form에서 내부적으로 기억하지만,
  코드로 즉시 확인이 불가능함
*/
