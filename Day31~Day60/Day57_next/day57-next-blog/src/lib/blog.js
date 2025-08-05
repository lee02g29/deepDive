
/* 
  모든 blog1.md 파일 및 blogs 안에 여러 가지 md 파일 불러오기
  파일은 객체로 돌려줌(자바스크립트)

  손쉽게 메타데이터를 분리, 파싱해주는 자바스크립트 라이브러리

  사용 이유
  - 블로그, 문서, 정적 사이트 제너레이터에서 마크다운 기반으로 콘텐츠를 다룰 때
  - 각 글의 title, date, tags 등을 코드로 꺼내써야하는데, graymatter를 사용하지 않으면
  직접 파싱 로직을 만들어사 사용해야함

  실제로는 다른 라이브러리도 사용
  next.js의 getStaticProps 나 Gatsby gatsby-source-filesystem과 함께 사용
*/

export function getAllBlogs() {

  // 1. 마크다운 파일 읽기
  const filePath = '경로 작성'

  // readFileSync(경로, 'utf-8')
}