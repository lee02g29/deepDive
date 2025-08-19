import ProductDetail from "@/components/ProductDetail";
import clientPromise from "@/lib/mongodb";

export async function getStaticPaths() {
  const client = await clientPromise;
  const db = client.db("shopping");

  const products = await db.collection("products").find().toArray();

  const paths = products.map((product) => ({
    params: { id: product.productId.toString() },
  }));
  
  console.log("실제 동적 페이지 경로", paths);

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  console.log("파라미터", params);

  const client = await clientPromise;
  const db = client.db("shopping");

  const product = await db
    .collection("products")
    .findOne({ productId: Number(params.id) });

  return {
    props: { product: JSON.parse(JSON.stringify(product)) },
  };
}

export default function BlogDetail({ product }) {
  return (
    <div>
      <ProductDetail product={product} />
    </div>
  );
}
