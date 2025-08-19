import ProductList from '@/components/ProductList';
import WriteForm from './../components/WriteForm';

export default function Home() {
  return (
    <div>
      <h3> POST 요청 </h3>
      <WriteForm />
      <ProductList />
    </div>
  );
}

/*
  URL는 개발자가 원하는대로 작성가능함(회사의 프레임워크를 따라야 함)
  method GET,POST,PUT,DELETE 4개 중 원하는대로 선택해도 됨
  보통 데이터를 출력할 때 GET
  입력할 때 POST
  수정 PUT
  삭제 DELETE

  API - 서버 만들어놓는 기능

  next에서 서버를 만드는 방법
  - pages/폴더 안에 만들면 폴더와 파일은 자동으로 서버기능 URL이 됨

 */
