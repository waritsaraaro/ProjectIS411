import { products } from '$lib/Product.js'

export async function load({ params }) {
  const product = products[params.productid]  // ใช้ index เป็น id
  return { product }
}