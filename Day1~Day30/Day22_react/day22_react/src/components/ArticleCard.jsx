import React from 'react'

export default function ArticleCard({
  profile, time, title, content, img, likes, comments
}) {
  return (
    <div className='card'>
      <span>{profile}.{time}</span>
      <h3>{title}</h3>
      <p>{content}</p>
      <img src={img} alt='썸네일'></img>
      <div>
        공감 {likes} . 댓글 {comments}
      </div>
    </div>
  )
}

/*
  분리 예시

  ProfileHeader 유저 이름 + 시간
  ArticleImage 썸네일 이미지
  ArticleMeta 좋아요 수, 댓글 수

  -> 유지보수가 편함 + UI가 변경되더라도 부분 수정이 가능 + 확장성이 좋음
*/