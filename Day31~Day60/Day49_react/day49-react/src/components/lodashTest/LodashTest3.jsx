import { debounce } from "lodash";
import React, { useEffect, useState } from "react";

export default function LodashTest3() {
  /*
    window.innerWidth
    - 브라우저 창(viewport)의 가로 너비를 픽셀 전체로 반환
    - 읽기 전용
  */

  const [size, setSize] = useState(window.innerWidth);
  console.log(size);

  /*
    브라우저 창이 변경되면 0.5초 기다렸다가 실행
    너비 업데이트
  */
  useEffect(() => {
    const handleResize = debounce(() => {
      setSize(window.innerWidth);
    }, 500);

    // 브라우저 창이 변경될 때마다 이벤트를 실행
    window.addEventListener("resize", handleResize);

    
    /*
      컴포넌트가 사라질 때(unmount) 이벤트 리스터도 제거
      메모리 누수 방지
    */
    return () => window.removeEventListener('resize', handleResize)

  }, []);

  


  return (
    <div>
      <h3>창 크기 변경(resize)</h3>
      <p>너비 : {size}px</p>
    </div>
  );
}


/*
  언마운트 해서 컴포넌트가 사라질 때, 이벤트를 삭제하는 것으로 성능 최적화를 할 수 있어서 중요함
  - 창의 크기가 바뀔 때마다 실시간으로 업데이트 하려면 불필요한 렌더링이 많이 발생함
  - 따라서 디바운스 + 언마운트(삭제)를 같이 써서 유용하게 사용 가능
*/