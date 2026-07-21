import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const POSTS_DIR = path.join(process.cwd(), 'content/posts');
const DIRECTORIES_DIR = path.join(process.cwd(), 'content/directories');

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  keyword: string;
  wordCount: number;
}

export interface Post extends PostMeta {
  content: string;
}

function getSlugsIn(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''));
}

function getEntryIn(dir: string, slug: string): Post | null {
  const filePath = path.join(dir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? '',
    description: data.description ?? '',
    keyword: data.keyword ?? '',
    wordCount: data.wordCount ?? 0,
    content,
  };
}

export function getAllPostSlugs(): string[] {
  return getSlugsIn(POSTS_DIR);
}

export function getAllPosts(): PostMeta[] {
  return getAllPostSlugs()
    .map((slug) => getPost(slug))
    .filter((p): p is Post => p !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post | null {
  return getEntryIn(POSTS_DIR, slug);
}

export function getAllDirectorySlugs(): string[] {
  return getSlugsIn(DIRECTORIES_DIR);
}

export function getAllDirectories(): PostMeta[] {
  return getAllDirectorySlugs()
    .map((slug) => getDirectory(slug))
    .filter((p): p is Post => p !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getDirectory(slug: string): Post | null {
  return getEntryIn(DIRECTORIES_DIR, slug);
}
