import Link from "next/link";
import type { Metadata } from "next";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CtaButtonGroup } from "@/components/CtaButtons";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Guides and tips on windshield replacement, rock chip repair, and auto glass care from MW Glass Repair.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Section className="border-b border-line bg-mist pb-12 pt-10">
        <Breadcrumbs items={[{ name: "Blog", href: "/blog" }]} />
        <h1 className="mt-4 font-display text-4xl font-bold text-ink sm:text-5xl">
          Auto Glass Guides &amp; Tips
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate">
          Practical guides on windshield replacement, rock chip repair, and
          keeping your auto glass in good shape — written for drivers across
          Northeast Ohio.
        </p>
        <CtaButtonGroup className="mt-8" />
      </Section>

      <Section>
        {posts.length === 0 ? (
          <p className="text-slate">No posts yet — check back soon.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-lg border border-line bg-white p-6 transition hover:border-brand-blue hover:shadow-md"
              >
                {post.date && (
                  <p className="text-xs font-medium uppercase tracking-wide text-slate">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                )}
                <h2 className="mt-2 font-display text-xl font-semibold text-ink group-hover:text-brand-blue">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate">{post.description}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-brand-blue">
                  Read more &rarr;
                </span>
              </Link>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
