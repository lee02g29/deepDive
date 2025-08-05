
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
// 이거 react도 붙여주기

export const postsApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com'
  }),
  endpoints : (builder) => ({
    getPost: builder.query({
      query: (userId) => `/posts?userId=${userId}`
    }),
    // Post 요청 : 게시글 생성
    createPost: builder.mutation({
      query: (newPost) => ({
        url : "/posts",
        method: 'POST',
        body: newPost
      })
    })
  })
});

// postApi에 서버에서 posts 목록을 get요청하는 훅을 만듦
export const {useGetPostQuery,
  useCreatePostMutation // 자동으로 createPost key를 자동으로 만듦
} = postsApi;

/*
  RTX Query 기본 구조 흐름
  1. API 서비스 파일을 만듦
  2. 컴포넌트 안에서 자동 생성된 훅을 사용해서 데이터를 가져옴
    createApi() 서버한테 요청을 쉽게 관리할 수 있도록 해줌
    fetctBaseQuery() 기본적인 서버 요청(fetch)를 설정할 수 있는 함수
    - fetch 기반으로 만든 기본 http 클라이언트로 axios가 없어도 간단한 통신이 가능

  query() : 실제 요청에 필요한 정보를 반환하는 함수
  newPost는 사용자가 게시글을 추가할 때 전달한 객체
*/

/*
  reducerPath : store에 등록할 때 사용하는 이름
  - (xxx)Api 처럼 작성하는 것이 추천됨

  baseQuery : 서버와 통신할 때 사용할 기본 설정(fetch 설정)
  - baseUrl : 기본 API 주소

  endpoints : api 요청들을 모아놓은 곳(정의)
  - builder : RTK Query에서 제공하는 도우미 객체
  - query() : get 요청
  - mutation() : post/put/delete 요청(쓰기)
  - getPost : 사용자가 정한 endpoints 이름
  - 괄호 안에 query -> 추가 주소
    - baseUrl + query 주소로 호출함

  - concat() : 요청을 자동으로 관리(start, success, error 등)

*/

/*
  실무 팁
  post를 하면 내가 보낸 게시글을 포함해 목록이 최신 상태로 유지되어야함
  캐싱된 게시글 목록을 자동으로 갱신하려면 필요한 내용이 있음
  invalidatesTags: ['posts'] 목록 자동으로 리패치
*/