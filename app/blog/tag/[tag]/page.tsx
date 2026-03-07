import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import MainNav from "../../../components/main-nav"
import NewsletterSignup from "../../../components/newsletter-signup"
import SiteFooter from "../../../components/site-footer"
import { getPostsByTag } from "@/lib/blog-data"

export default async function BlogTagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag: rawTag } = await params
  const tag = decodeURIComponent(rawTag).toLowerCase()
  const posts = getPostsByTag(tag)

  return (
    <main className="min-h-screen bg-white pt-24">
      <MainNav currentPath="/blog" />

      <section className="py-16 px-4 md:px-8 container mx-auto border-b border-black">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm uppercase tracking-widest mb-8 hover:text-red-600 transition-colors duration-300"
          >
            <ArrowLeft className="mr-2" size={16} />
            Back to Blog
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Tag: {tag.replace(/-/g, " ")}</h1>
          <p className="text-xl md:text-2xl">
            {posts.length} article{posts.length === 1 ? "" : "s"} matching this topic.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 container mx-auto">
        {posts.length === 0 ? (
          <div className="max-w-4xl mx-auto text-center border border-black p-12">
            <h2 className="text-2xl font-bold mb-4">No posts found for this tag</h2>
            <p className="mb-6">Try browsing categories or return to the full blog list.</p>
            <Link
              href="/blog"
              className="inline-block px-6 py-3 bg-black text-white text-sm uppercase tracking-widest hover:bg-red-600 transition-colors"
            >
              View All Posts
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="border border-black group">
                <div className="aspect-[16/9] relative bg-neutral-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-xs uppercase tracking-widest text-neutral-600 mb-3 gap-4">
                    <span className="inline-flex items-center">
                      <Calendar size={12} className="mr-1" />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center">
                      <Clock size={12} className="mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold mb-3">{post.title}</h2>
                  <p className="mb-6">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors"
                  >
                    Read Article →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <NewsletterSignup />
      <SiteFooter />
    </main>
  )
}
