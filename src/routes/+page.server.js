// src/routes/+page.server.js
const API = 'http://localhost:8000';

export async function load({ fetch }) {
    const [productsRes, categoriesRes] = await Promise.all([
        fetch(`${API}/products/`),
        fetch(`${API}/categories/`)
    ]);

    const products = await productsRes.json();
    const categoriesRaw = await categoriesRes.json();

    const categoryMap = Object.fromEntries(
        categoriesRaw.map(c => [c.category_id, c.category_name])
    );

    const categories = [...new Set(products.map(p => categoryMap[p.categoryID]))].filter(Boolean);

    return { products, categories, categoryMap };
}