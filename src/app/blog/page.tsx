import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export const metadata = { title: 'Blog', description: 'Articles and guides.' };

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <ul className="space-y-8">
        {posts.map((post) => (
          <li key={post.slug} className="border-b pb-8">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-xl font-semibold hover:text-blue-600">{post.title}</h2>
            </Link>
            <p className="text-sm text-gray-400 mt-1">{post.date}</p>
            <p className="text-gray-600 mt-2">{post.description}</p>
            <Link href={`/blog/${post.slug}`} className="text-blue-500 text-sm mt-3 inline-block hover:underline">Read more →</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}