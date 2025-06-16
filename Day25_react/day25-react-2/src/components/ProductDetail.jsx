import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();

  const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch(
  //     "https://raw.githubusercontent.com/LeeSeohee2/github-page/refs/heads/main/products_with_images.json"
  //   )
  //     .then((response) => {
  //       response.json();
  //       console.log(response.json());
  //       // console.log(typeof id);
  //     })
  //     .then((json) => {
  //       setData(json.slice(Number(id), Number(id) + 1));
  //       // setData(json);
  //       console.log(json.slice(Number(id), Number(id) + 1));
  //       // console.log(json);
  //     });
  // }, [id]);

  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      fetch(
        "https://raw.githubusercontent.com/LeeSeohee2/github-page/refs/heads/main/products_with_images.json"
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("네트워크 응답에 문제가 있습니다.");
          }
          return response.json(); // JSON으로 파싱
        })
        .then((data) => {
          resolve(data); // 여기서 배열을 resolve
        })
        .catch((error) => {
          reject("💥 실패! " + error.message);
        });
    });

    // 사용 예시
    promise
      .then((array) => {
        setData(array.slice(Number(id), Number(id) + 1));
        console.log(array.slice(Number(id), Number(id) + 1));
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <h1>제품 {(Number)(id) + 1}번 상세 페이지</h1>
      <h2>{data[0]?.name}</h2>
      <h2>{data[0]?.description}</h2>
      <h3>
        {data[0]?.original_price}({data[0]?.discount})
      </h3>
      <h3>{data[0]?.price}</h3>
    </>
  );
}

/*
  Promise

  const promise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("🎉 성공!");
  } else {
    reject("💥 실패!");
  }
});


  <Link state={...}>
 */
