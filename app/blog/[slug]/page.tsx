import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import MainNav from "../../components/main-nav"
import NewsletterSignup from "../../components/newsletter-signup"
import SiteFooter from "../../components/site-footer"
import { getBlogPostBySlug, getRelatedPosts } from "@/lib/blog-data"

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post, 2)

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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 mb-8 text-sm">
            <span className="inline-flex items-center">
              <Calendar size={14} className="mr-2" />
              {post.date}
            </span>
            <span className="inline-flex items-center">
              <Clock size={14} className="mr-2" />
              {post.readTime}
            </span>
            <span>By {post.author}</span>
            <Link
              href={`/blog/category/${post.category.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-xs uppercase tracking-widest bg-black text-white px-3 py-1 hover:bg-red-600 transition-colors duration-300"
            >
              {post.category}
            </Link>
          </div>
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog/tag/${tag}`}
                className="text-xs uppercase tracking-widest border border-black px-3 py-1 hover:bg-black hover:text-white transition-colors duration-300"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 px-4 md:px-8 container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video bg-neutral-100 relative mb-8 border border-black">
            <Image src={post.image} alt={post.title} fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="py-8 px-4 md:px-8 container mx-auto">
        <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed">
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="py-8 px-4 md:px-8 container mx-auto border-t border-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm uppercase tracking-widest mb-4">Tags</h2>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog/tag/${tag}`}
                className="text-xs uppercase tracking-widest border border-black px-3 py-1 hover:bg-black hover:text-white transition-colors duration-300"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 container mx-auto border-t border-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map((relatedPost) => (
              <article key={relatedPost.id} className="border border-black group">
                <div className="aspect-video bg-neutral-100 relative">
                  <Image
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{relatedPost.title}</h3>
                  <p className="mb-6">{relatedPost.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">{relatedPost.date}</span>
                    <Link
                      href={`/blog/${relatedPost.slug}`}
                      className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors duration-300"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSignup />
      <SiteFooter />
    </main>
  )
}
