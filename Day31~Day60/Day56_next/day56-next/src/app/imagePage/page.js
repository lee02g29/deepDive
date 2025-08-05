import Image from "next/image";

import cinnamoroll from '@/asset/cinnamoroll.webp';

export default function page() {
  return (
    <div>
      <h1>이미지 테스트</h1>
      <h3>일반 html 이미지 &lt; img&gt;</h3>
      <img src={cinnamoroll.src} alt="시나모롤" />
      {/* img로 부를 때는 별칭.src로 부르기. 경로는 @로 시작하기 */}
      <img src='/cinnamoroll.webp' width={150} height={100}
      style={{border: '2px solid black', marginBottom: '50px'}}></img>
    
      <h3>next &lt; Image&gt;</h3>
      <Image src="/cinnamoroll.webp" alt="시나모롤"  width={150} height={100}
      style={{border: '2px solid pink', marginBottom: '50px'}}/>
    </div>
  )
}

/*
  page.js:12 Image is missing required "alt" property. Please add Alternative Text to describe the image for screen readers and search engines.
  Image에 alt 추가

  alt : 이미지가 보이지 않을 때 보여줄 설명
  접근성(스크린 리더), SEO 최적화, UX 향상 중요

  alt는 Image를 사용할 때, 일부 설정이나 일부 버전에서 ""로 작성해야 감지가 가능

  next를 이용할 때는 문자열은 되도록 ""로 작성하는 것을 권장
*/