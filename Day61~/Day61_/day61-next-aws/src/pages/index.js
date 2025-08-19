import InputFile from "@/components/InputFile";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [imageUrl, setImageUrl] = useState(null);

  // env 파일에서 이미지 url 가져오기
  const presignedUrl = process.env.NEXT_PUBLIC_PRESIGNED_URL || "";

  if (presignedUrl == "") {
    // !presignedUrl
    alert("url이 없습니다.");
    return;
  }

  // s3에 넣어둔 이미지를 요청해서 가져옴
  useEffect(() => {
    const fetchImage = async () => {
      try {
        /* 
          get 요청을 하게 되면 axios 내부에서 파싱을 텍스트 혹은 json 형태로 반환
          이미지, pdf 같은 이진파일(바이너리)를 그대로 가져오면 데이터가 깨짐
          그래서 대용량 객체인 바이너리 타입으로 응답을 받아야함
          blob
        */
        const res = await axios.get(presignedUrl, {
          responseType: "blob",
        });
        // 대용량 데이터인 blob타입이 문자로 변경됨
        const objectURL = URL.createObjectURL(res.data);
        setImageUrl(objectURL);
      } catch (error) {
        console.error("이미지 로드 실패", error);
      }
    };

    fetchImage();
  }, []);

  return (
    <div>
      <h3>S3 이미지 보기</h3>
      {imageUrl ? (
        <img src={imageUrl} alt="presigned Image" width="400" />
      ) : (
        <p>이미지 불러오는 중</p>
      )}

      <h3>입력해서 데이터 S3로 보내기</h3>
      <InputFile />
    </div>
  );
}

/*
  S3(Simple Storge Service)
  - 이미지, 동영상, PDF, 로그파일 등을 저장하고 공유하는 공간
  - 폴더를 만들어서 그 안에 데이터를 저장(버킷 - 객체를 담는 컨테이너)
  - 무제한 저장
  - 보안성 http로 접근할 수 없음. https을 이용해 url로 안전하게 접근해야함
  - 장애가 발생해도 자동으로 복구해줌

  언제 사용하는지
  - 웹 사이트 이미지 업로드
  - 사용자 파일 보관(이력서, 증명서)
  - 로그 저장
  - 백업 데이터 저장
  - 데이터 분석을 위한 대용량 데이터 저장

  이미지 - 미리 서명된 url을 이용하면 서버에 가지 않고 프론트에서도 업로드 가능
  https://myshop-lee02g29.s3.ap-northeast-2.amazonaws.com/lessy.png?response-content-disposition=inline&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaDmFwLW5vcnRoZWFzdC0yIkcwRQIhAM2iFZnse4QMSuGyv21ZHxf%2FfPeLs3U3OixMT7xieY9tAiBvmtblw2Cb4mRck5ZxHrYPF9P2b0y5nOnjNzu%2BEIm%2FliqCAwia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NTg2OTg5MTM4NiIMYOahruLrz0miqldAKtYCnK7%2FGeyW003hvUbcY4QF%2BqJcabqzYVzmeRSAtV1RYwDgKvgaZKbG1xYs%2BDbcLG4huhOo7GGMRVD%2FPdhFneKW2bnU6dnC%2BC%2F30a2t0IMCH%2BurGU6FCaeEp6RprbDqMWE8AONkZHSfEys96pGRtNZhgYbmpRXEjtgAiXzgvRGb7cCPRX7ju7OvfR%2FTmFk2myWHSIYmQxiqkFqFvUIUIDNefBNpqNZNfFvDPTlLFfCPqlCuoN91hk1nVA0MwL4uGpKVT%2Fvy1u6Q7rAagUdbi3nQn%2Bv4yMiSPVe7looG6eQhdoAhGamPuGO2IfflhWYHL6f2d2P2YAPeSRunJ7MpM0SZVz0EZZmioGm921nstNh2UriRh98vjePW9nOT6pUN9BTirQv1srNn1qNPHe0itiTGH2hDEfSh5n9pBBP15UIwtZr37c%2By4d0m8P%2F7MJ3Agd8A4oM6uXqEMImB1cQGOo8CxL88UkSY7lOB%2F%2Fcyk8zJuBPKF1UfuMdLHDXQ9uLsVE5MaK%2Bs4FuKAIdqvsvVu52xiFUU9F6BiDA83BIJ6bClzHtwfv9iDDz4iPPd1T8JDSgWo9td6yzdy%2FTHWTVNKVjUvjwMQg9lza3IjJnvZgUMBQIiMJMR%2B%2F%2B1C59NvQk6LywAX1zySHNWWqtKwf%2BdgGITPNWTJrJ9OSyMck%2Bgj9qJAQEOYX3HXeykhQ%2BHQqQCSgQfvZxpkCME0wvi57SmbJk2YVBaffnVTsBdZHqbXxpgHZhXerudopJ4OLgC%2Fy7pCo2TurIDT4S7nU9jCvQQRnuQ534uJXfTqh44dRg%2FT2GjHFrCd49IFJPE5w8%2FBYDAnQ%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIASWRVVO45DXC3F6EH%2F20250808%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T012048Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=da052a9773f8dbdb9ac9c244a2e42fb7ef6948d7f6f1e139e2ad1ed47f6ffb9e


  https://myshop-lee02g29.s3.ap-northeast-2.amazonaws.com/sky.png?response-content-disposition=inline&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaDmFwLW5vcnRoZWFzdC0yIkcwRQIgHnaWy4QI0HMDMBizSiz9RJwi%2FUAexJY7fVPtbI%2BO7eQCIQCS%2Bmw7GbUrrVpeRk0aIIO6%2BOqEmiOdfzAhuRgQrcA%2FqyqCAwib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NTg2OTg5MTM4NiIMEnNbPMWEjAqhcllqKtYCHEnP8Bf%2BxOt1SEwSUFsc0YDP8cRu6d65pLHDcC50DyYXlRQdh1x2clwxscy7Kt6zuNsTyScMiVj0LSqFyK5Bg28bOnQ3sLWngX9opVPLmKixSwJVSYUdUHAr%2F9tELIQ1RvOWe3ccY16DyplmJEqHibMjsaI9kv3BIujqQqVj3zKfMk6ECLFw%2FJGMQ0thqGJNGg1gflfdZaXajDLFvAt7aY4%2FiRjliXKEFNCDLl0LTxgEKNcN1a%2Fa1eo0JOybVDv0Q4AhFINn2MqYcCkpx5%2FUjGh%2B4xnNJIIqDprT%2BS2XtEwQvFQkuJ516S%2FRXYL%2Fc%2BFj01pdv%2F1Hu65P%2FQ%2F3q%2B%2FPQmFGCfPz04s%2FJ9aoUnsp2%2F2TIqkHI5KhwVRj7e9ml8BTvb7H3IdDz0JWpIcfc%2FZcpQHO1s1e7TkRxXGTwYu9tpGXaE5vr6nuuAYW7cbvQ0QiwK7u7mEPMImB1cQGOo8C3DxTnhNFGx6jNEB40exMfcmcicXMdx5AJyVFnpsZVQD3DtSkdnB4u20waK0w9NSLCa3QQ9PHOCN0atVtJBHOkttPSbbvHOj%2FAJo1MeJ5zu%2Bndn0rOoHfBpJMKdg6hS8BMOviE%2FtnyQekW45%2FxY3aab61K5WEK6Zc%2FOHPmuCVAMf%2BdL5n0%2BRYRDWxyB99iEtT7Pbv0wC5Qr2p63nAe14x4kzbRSZgRLApQBONhPV7HpyhqRkOPJLMDgpCJ7QxO%2BgwqnCwgs3ibYFohGwfgpWA2TwT9rESkoTVrtQttvOdG0HA5kmncrAiewhOaQyJKpTbtkpdQc1kinX2MI41iReiGtoIs7D5QslmHpecKr5%2BDA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIASWRVVO45C4T22PLV%2F20250808%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T021140Z&X-Amz-Expires=10800&X-Amz-SignedHeaders=host&X-Amz-Signature=e35c7fa173dcc6b976e0206d4a48d35300a4ec4de2622c49e3233bd6799d5fb7


  Cors 에러가 발생했을 때는 buckeck에 들어가서, cors 설정을 해주기
  [
    {
      "AllowedHeaders": ["*"],
      "AllowedMethods": ["GET", "HEAD"],
      "AllowedOrigins": ["http://localhost:3000"],
      "ExposeHeaders": []
    }
  ]

  Request failed with status code 403
  - 미리 서명된 url을 발급할 때, 지정한 시간이 만료되었음
*/
