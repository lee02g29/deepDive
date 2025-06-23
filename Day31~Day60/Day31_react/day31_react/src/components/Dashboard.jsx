import { useAppContext } from '../contexts/AppProvider'


export default function Dashboard() {
  // 3개의 context 값을 각각 꺼내서 출력
  const {user, theme, lang} = useAppContext();

  return (
    <div>Dashboard

      <h1>Context 값들을 꺼내기 </h1>
      <h5>유저 : {user} </h5>
      <h5>테마 : {theme} </h5>
      <h5>언어 : {lang} </h5>
    </div>
  )
}
