import React from "react";

export default function ObjectParsing() {
  const str = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  };

  const testObj = {
    name: "A",
    job: ["Frontend Developer", "student"],
  };

  // const testJob = testObj.job;
  // let testJob;

  // 구조 분해 할당으로 간단하게 변수 꺼내기
  // const {city, geo} = testObj.address;
  // const {lat, lng} = geo;

  // 한줄로 작성
  // const {address : {city ,geo:{lat, lng}}} = testObj

  return (
    <div>
      <h1>자바스크립트 Json 중첩</h1>
      <h5>이름 : {testObj.name} </h5>
      <h5>직업 : {testObj.job[0]} </h5>
      <h5>도시 : {str.address.city} </h5>
      <h5>도시 : {str.address.geo.lat}, 
        {str.address.geo.lng} </h5>

      {/* {testJob.map((item, index) => console.log(item))} */}
      <
    </div>
  );
}
