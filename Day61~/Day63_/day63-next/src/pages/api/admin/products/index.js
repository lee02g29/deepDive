import products from "@/data/products";

export default function hanlder(req, res) {
  if(req.method === 'GET'){
    return res.status(200).json(products)
  }

  return res.status(405).end();
}