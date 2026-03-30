import { error } from '@sveltejs/kit';
import { posts } from '../data.js';

export function load({ params }) {
  const id = Number(params.postdetailid);

  const post = posts.find(p => p.id === id);

  if (!post) throw error(404, 'Post not found');

  return { post };
}