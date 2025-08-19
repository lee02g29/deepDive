import axios from "axios";
import React, { useState } from "react";

export default function InputFile() {
  const [file, setFile] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();

    await axios.post("/api/upload", {
      filename: file.name,
      filetype: file.type
    });
  };

  // image/* : 모든 이미지를 선택. 이미지파일만 선택할 수 있도록 선택창에 필터
  return (
    <div>
      <form onSubmit={handleUpload}>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button type="submit">업로드</button>
      </form>
    </div>
  );
}
