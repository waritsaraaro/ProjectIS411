export async function load({ params }) {
  const res = await fetch (`http://localhost:8000/products/${params.productid}`)

  if (!res.ok) {
    return { product: null }
  }

  const raw = await res.json()

   const product = {
    name: raw.pname,
    shop: raw.brand,
    detail: raw.description,
    price: raw.price,
    img: raw.image_url ?? 'https://placehold.co/400x400',
    product_id: raw.product_id,
    product_status: raw.product_status
  }
  
  return { product}
}