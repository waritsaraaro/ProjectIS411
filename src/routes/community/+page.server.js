export async function load() {
  try {
    // ดึงโพสทั้งหมดจาก API
    const response = await fetch('http://127.0.0.1:8000/posts/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ page: 1 })
    })

    if (!response.ok) throw new Error(`Response status: ${response.status}`)

    const posts = await response.json()
    return { posts }

  } catch (error) {
    console.error(error.message)
    return { posts: [] }
  }
}