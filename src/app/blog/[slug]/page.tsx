import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { CtaButtonGroup } from "@/components/CtaButtons";
import { articleSchema } from "@/lib/schema";
import { getAllPostSlugs, getPost } from "@/lib/posts";
import { business } from "@/lib/business";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd data={articleSchema(post)} />

      <Section className="border-b border-line bg-mist pb-10 pt-10">
        <Breadcrumbs
          items={[
            { name: "Blog", href: "/blog" },
            { name: post.title, href: `/blog/${post.slug}` },
          ]}
        />
        <h1 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl">
          {post.title}
        </h1>
        {post.date && (
          <p className="mt-3 text-sm text-slate">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        )}
      </Section>

      <Section>
        <article
          className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-ink prose-p:text-slate prose-li:text-slate prose-a:text-brand-blue prose-a:no-underline hover:prose-a:underline prose-strong:text-ink prose-th:text-ink prose-td:text-slate prose-table:text-sm"
          // Content is sanitized server-side in src/lib/posts.ts before
          // it ever reaches this page — see SANITIZE_OPTIONS there.
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </Section>

      <Section className="border-t border-line bg-ink text-center">
        <h2 className="font-display text-3xl font-bold text-white">
          Ready to get your glass fixed?
        </h2>
        <p className="mt-3 text-white/70">
          Call or text {business.phone} for a free quote, Monday through Friday.
        </p>
        <div className="mt-8 flex justify-center">
          <CtaButtonGroup light />
        </div>
      </Section>
    </>
  );
}
