import axios from "axios";
// import { response } from "express";
import React, { useEffect } from "react";

export default function NaverCrawling() {
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/naver")
      .then((res) => {
        console.log(res);
        res.json(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return <div>NaverCrawling</div>;
}
