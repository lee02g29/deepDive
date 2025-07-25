import React, { useEffect, useState } from "react";

/*
  화면 크기(브라우저 크기)를 실시간으로 감지하고 값을 컴포넌트에서 사용할 수 있게 해주는 커스텀 훅
  실무에서 자주사용하는 커스텀 훅
*/
export default function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () =>
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize)
  }, []);

  return size;
}
