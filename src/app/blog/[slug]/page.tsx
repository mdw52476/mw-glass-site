import { notFound } from 'next/navigation';
import { getAllPostSlugs, getPost } from '@/lib/posts';
import type { Metadata } from 'next';

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.description };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-400 mb-8">{post.date}</p>
      <article className="prose prose-gray max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
    </main>
  );
}