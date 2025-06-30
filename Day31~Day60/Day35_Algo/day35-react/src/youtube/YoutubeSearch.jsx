import React, { useEffect, useState } from 'react'

export default function YoutubeSearch() {

  const APIKEY = import.meta.env.VITE_YOUTUBE_KEY;
  const requestUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=쫀떡이&key=${APIKEY}`

  const [list, setList] = useState([]);

  useEffect(() => {
  fetch(requestUrl)
    .then((res) => res.json())
    .then((data) => {
      setList(data)
      console.log("실제 데이터 : ", data)
    })
    .catch((err) => console.error("에러"));
  }, [])

  return (
    <div>
      <h3>유튜브 동영상</h3>
      <ul>
        {
          list.items?.map((youtube) => (
            <li key={youtube?.id.videoId}
              style={{ display:'flex', alignItems:'center', marginBottom:"10px", gap:'10px'}}
            >
              <img src={youtube?.snippet.thumbnails.default.url}></img>
              <strong>{youtube?.snippet.channelTitle}</strong>
              {' '}{youtube?.snippet.title}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

/*
  유튜브 동영상 API 준비과정
  1. 구글 클라우드 플랫폼

  검색 결과 추출

  items
  id 
  - video.id

  snippet
  - channelId
  - channelTitle
  - thumbnails
    - default / high / medium
  - title

 */
