import { getAllBlogs } from "@/lib/blog";
import matter from "gray-matter";

export default async function Home() {

const fileText = `---
title:"내 글"
date:"2025-08-05"
---
여기는 본문입니다.`;

  /*
    비동기 처리를 호출하는 함수를 같이 기다릴 필요가 있음
    비동기 처리하는 await가 파일을 읽고 작업이 끝날때까지 같이 기다려야함
  
    await은 async 함수 안에서만 쓸 수 있음 -> 없으면 에러가 발생함
  */
  const { title, date, content } = await getAllBlogs();

  /* 메타에서 제공하는 기본적인 변수명
  변수명을 변경하고 싶을 경우 ':'를 이용해서 변경할 수 있음
  */
  const { data: meta, content: body } = matter(fileText);

  // const {data, content} = matter(fileText)
  // console.log(data);
  // console.log(content)

  console.log("meta:", meta);
  console.log("body:", body);

  console.log(title);
  console.log(date);
  console.log(content);

  return (
    <div>
      <h1>gray-matter</h1>
      <p>{meta}</p>
      <p>{body}</p>

      <h3>test</h3>
      <p>{title}</p>
      <p>{date}</p>
      <p>{content}</p>
    </div>
  );
}

/*
end of the stream or a document separator is expected at line 3, column 5:
date: "2025-08-05"

문자열 안에 공백이 있을 수 있음
그래서 공백을 모두 제거할 필요가 있음
*/
