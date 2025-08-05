// 더미데이터 가져오기

import { blogBoards } from "./data";

/*
  Next.js에서 정적인 동적페이지를 만들때 반드시 필요한 함수

  어떤 동적 경로 /board/[id]를 미리 만들어야할지 next.js에게 알려줌
  paths 배열 board.id마다, {params: {id: 1}}, {parmas: {id :'2'}}
  next.js가 미리 페이지를 만듦(빌드 타임)
*/
export function getStaticPaths() {
  const paths = blogBoards.map(board => ({
    params: { id: board.id },
  }));
  console.log("실제 동적 페이지 경로", paths);

  /*
    fallback
    - 이 페이지는 오직 getStaticPaths에 미리 만들어놓은 경로만 페이지를 만듦
    - 나머지는 404 처리
    - 모든 url이 Not Found 처리
  */
  return { paths, fallback: false };
}


/*
  각 경로별로 페이지에 필요한 데이터를 빌드 시점에 미리 불러와 props에 넣어줌
  params: url 동적값(/board/[id])를 객체로 전달함
  - ({id: '1'})
*/

export function getStaticProps({params}) {
  const board = blogBoards.find(b => b.id === params.id);

  return {
    props: {board}
  }
}

export default function BlogDetail({board}) {
  return(
    <div>
      <h1>{board.title}</h1>
      <h1>{board.content}</h1>
    </div>
  )
}