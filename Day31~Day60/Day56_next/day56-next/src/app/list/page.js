import Image from "next/image";
import "../globals.css"


export default function page() {

  let arrays = [2,3,4];

  arrays.map((arr) => {
    console.log(arr, "Hi")
  })

  let product = ["의류", "전자제품", "생활용품"];

  arrays.map((arr) => {
    console.log(arr, "Hi")
  })

  return (
    <div>
      <h3>상품 페이지</h3>
      {
        product.map((pro, index) => (
          <div key={index}>
            {/* <img src="/cinnamoroll.webp" alt="시나모롤" /> */}
            <Image src="/cinnamoroll.webp" alt="시나모롤" width={150} height={100}/>
            <h4>{pro}</h4>
          </div>
        ))
      }
    </div>
  );
}

/*
  이미지를 저장하는 가장 기본적인 방법 : public 폴더에 저장
  public 폴더에 있는 것들은 사이트 실행시 자동으로 사이트 최상위 root 경로로 이동함

  실무에서는 웹 최적화를 진행하는데,
  next에서 이미지 컴포넌트 제공을 함
  <Image />

  일반 img태그는 로딩이 느리고, 콘텐츠 밀림이 생길 수 있음

  Image 컴포넌트 
  
  Lazy Loading
  - 화면에 보이기 전까지는 이미지를 로드하지 않음
  - 초기속도가 빠름

  사이즈 최적화
  - 다양한 해상도에 맞춰 이미지 크기를 자동으로 조절함
  - LayoutShift 방지
    - 이미지 공간을 미리 확보 -> 콘텐츠 밀림 방지
*/