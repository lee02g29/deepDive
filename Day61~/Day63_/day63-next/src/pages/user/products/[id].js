import ReviewForm from "@/components/user/ReviewForm";
import products from "@/data/products";
import { useRouter } from "next/router";

export default function ProductDetailPage() {
  const router = useRouter();

  /* url에 id가 오기 때문에 id를 꺼내는 query
    ex) localhost:3000/?id=2
  */
  const { id } = router.query;

  // id 값을 기준으로 물건의 상세 내용을 가져오기
  const product = products.find((one) => one.id === id);

  return (
    <div>
      <div className="mt-10">
        <h2 className="text-lg font-semibold mb-2">리뷰</h2>
        {reviews.length === 0 && (
          <p className="text-sm text-gray-500">등록된 리뷰가 없습니다.</p>
        )}
        <ul className="space-y-2 mb-4">
          {reviews.map((r) => (
            <li key={r.id} className="bg-gray-100 p-2 rounded text-sm">
              {r.text}
            </li>
          ))}
        </ul>
        <ReviewForm onAdd={handleAddReview} />
      </div>
    </div>
  );
}
