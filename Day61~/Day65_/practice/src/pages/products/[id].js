import { getProductById } from "../api/products";

export async function getServerSideProps(context) {
  const { id } = context.params;

  try {
    const data = getProductById(id);
    console.log(id);
    console.log(data);

    if (!data) {
      return { notFound: true };
    }

    return { props: { initialData: data } };
  } catch (error) {
    console.log(error);

    return { notFound: true };
  }
}

export default function ProductDetailPage({ initialData }) {
  console.log(initialData);

  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <h3 className="text-lg font-semibold">{initialData.name}</h3>
      <p className="text-sm text-gray-600">{initialData.description}</p>
      <p className="mt-2 font-bold text-blue-600">
        {initialData.price.toLocaleString()}원
      </p>
    </div>
  );
}
