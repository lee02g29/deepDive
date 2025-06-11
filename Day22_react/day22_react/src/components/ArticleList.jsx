import React from 'react'
import ArticleCard from './ArticleCard'

export default function ArticleList() {
  const articles = [{
    id: 1,
    profile: '우유',
    time: '1시간 전',
    title: "백패킹",
    content: "사진보단 영상",
    img :'',
    likes: 14,
    comments: 0
  }]

  return (
    <div className='article-list'>
      {/* {...articles[0]} ...스프레드
      안에 내용을 펼쳐서 복사하거나, 전달해주는 연산자 
       */}
      <ArticleCard key ={articles[0].id} {...articles[0]} />
      {
        // map을 사용할때는 key를 적어야함. 여기서는 articles.id를 씀
      }
    </div>
  )
}
