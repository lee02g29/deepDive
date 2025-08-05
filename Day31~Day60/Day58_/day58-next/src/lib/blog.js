
import { act } from 'react';
import path from 'path';
import { readFile } from 'fs/promises';
import matter from 'gray-matter';

/* 
  모든 blog1.md 파일 및 blogs 안에 여러 가지 md 파일 불러오기
  파일은 객체로 돌려줌(자바스크립트)

  손쉽게 메타데이터를 분리, 파싱해주는 자바스크립트 라이브러리

  사용 이유
  - 블로그, 문서, 정적 사이트 제너레이터에서 마크다운 기반으로 콘텐츠를 다룰 때
  - 각 글의 title, date, tags 등을 코드로 꺼내써야하는데, graymatter를 사용하지 않으면
  직접 파싱 로직을 만들어서 사용해야함

  실제로는 다른 라이브러리도 사용
  next.js의 getStaticProps 나 Gatsby gatsby-source-filesystem과 함께 사용
*/

export async function getAllBlogs() {

  // 1. 마크다운 파일 읽기 : 절대 경로를 만드는 코드
  /*
    path : 경로를 가지고 올 때 사용하는 라이브러리
    내장되어있으므로, import 구문을 작성하여 사용할 수 있음

    join() : 여러 경로 조각들을 운영체제에 맞게 경로로 합쳐줌

    process.cwd() : 현재 프로젝트 루트 경로를 기준으로 함
  */
  const filePath = path.join(process.cwd(),'src','blog','blog1.md');
  console.log(filePath)

  /*
    readFile(경로, 인코딩)
    인코딩 
    - 파일을 텍스트(한글 포함)로 읽겠다는 의미

    await
    - 파일을 전부 읽을 때까지 대기(비동기 처리)

    fileContents
    - 변수에는 읽은 마크 다운 파일의 텍스트 전체가 저장됨
  */
  const fileContents = await readFile(filePath, 'utf-8')
  // readFileSync(경로, 'utf-8')

  const {data, content} = matter(fileContents);

  return {
    title: data.title,
    date: data.date,
    content,
  }
}

/*
  md 파일을 읽고 파싱하는 유틸함수

  md 파일의 앞 부분 메타 데이터(front matter)와 본문 내용(content)

*/