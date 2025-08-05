import Layout from "@/components/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

/*
  세미콜론은 마침표 개념. 따라서, 문장의 끝을 알려주기 위해 세미 콜론이 필수인 문법들은 에러를 발생시킴
  세미콜론을 안써도 되는 문법들은 한줄

  return 
    <Layout>
      <Component {...pageProps} />
    </Layout>;

  위의 코드를 아래처럼 해석

  return;
  여기서 끝난 걸로 인식함

  자바스크립트에서는 줄바꿈만 해도 의미가 바뀌는 경우가 있음
  -> jsx문법에서는 리턴할 때 괄호를 붙이는 것이 좋음


  --- 

  url 경로를 작성할 때, pages/안에 자바스크립트 파일을 작성하면 자동으로 페이지 연결이 됨
  
*/