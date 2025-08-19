import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function AdminAddProduct() {

  const route = useRouter();

  const [form, setForm] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    image: "",
    stock: "",
  });
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    // 가격과 재고는 숫자만
    const name = e.target.name;
    const value = e.target.value;
    // console.log("name", name, "value", value);

    // 숫자가 들어갈 수도, 재고가 있으면 "재고 없음"이라고 들어갈 수도 있음
    if (name === "price" || name === "stock") {
      if (value === "" || /^\d+$/.test(value)) {
        setForm((f) => ({ ...f, [name]: value }));
      }
    } else if (name === "image") {
      const file = e.target.files[0];

      if (!file) {
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setForm((f) => ({ ...f, [name]: reader.result }));
      };
      reader.readAsDataURL(file);
      setFile(e.target.files[0])
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) return alert("파일을 선택하세요");

    const formData = new FormData();

    formData.append("image", file);

    console.log(formData);

    const res = await axios.post("/api/admin/addProduct", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    route.replace("/admin/products")
  };

  const handleReset = () => {
    setForm({
      id: "",
      name: "",
      description: "",
      price: "",
      image: "",
      stock: "",
    });
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">상품 추가</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* 기본 정보 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">상품 ID</label>
            <input
              name="id"
              placeholder="예: p1"
              value={form.id}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">상품명</label>
            <input
              name="name"
              placeholder="예: 어피치 인형"
              value={form.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">가격(원)</label>
            <input
              name="price"
              inputMode="numeric"
              placeholder="예: 45000"
              value={form.price}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">재고</label>
            <input
              name="stock"
              inputMode="numeric"
              placeholder="예: 12"
              value={form.stock}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        {/* 설명 */}
        <div>
          <label className="block text-sm font-medium mb-1">설명</label>
          <textarea
            name="description"
            placeholder="예: 귀엽고 부드러운 어피치 캐릭터 인형"
            value={form.description}
            onChange={handleChange}
            className="w-full p-2 border rounded min-h-[100px]"
          />
        </div>

        {/* 이미지 URL + 미리보기 */}
        <div>
          <label className="block text-sm font-medium mb-1">이미지 URL</label>
          <input
            type="file"
            name="image"
            placeholder="예: /Apeach.jpeg 또는 https://..."
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {form.image && (
            <div className="mt-3">
              <p className="text-sm text-gray-500 mb-1">미리보기</p>
              {/* 외부 도메인은 next.config 이미지 도메인 허용 필요 */}
              <img
                src={form.image}
                alt="미리보기"
                className="max-h-48 rounded border"
              />
            </div>
          )}
        </div>

        {error && <p className="text-red-500">{error}</p>}

        {/* 액션 버튼 */}
        <div className="flex gap-3">
          <button
            type="submit"
            className="flex-1 bg-black text-white p-2 rounded"
          >
            저장
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="flex-1 border p-2 rounded"
          >
            초기화
          </button>
        </div>
      </form>
    </div>
  );
}

/*
  Failed to set the 'value' property on 'HTMLInputElement': This input element accepts a filename, which may only be programmatically set to the empty string.
  <input type="file">는 보안상 직접 파일 경로를 코드로 설정할 수 없고, 오직 빈 문자열("")만 넣을 수 있음
  - 따라서 input에서 value 속성 제거
 */