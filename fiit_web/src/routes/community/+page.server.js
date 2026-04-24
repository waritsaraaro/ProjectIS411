export async function load() {
  const res = await fetch('http://localhost:8000/posts/');

  if (!res.ok) {
    return { posts: [] };
  }

  const raw = await res.json();

  // API ส่ง PostOut มา — map ให้ตรงกับที่ svelte ใช้
  const posts = raw.map(p => ({
    id: p.post_id,
    name: p.customer_name ?? 'Unknown',
    username: p.customer_username ?? '@unknown',
    avatar: p.customer_avatar ?? '',
    content: p.content,
    image: p.image_url ?? '',
    likes: 0,
    reposts: 0,
    shares: 0,
    comments: 0,
  }));

  return { posts };
}