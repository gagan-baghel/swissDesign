import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react"
import MainNav from "../../../components/main-nav"
import SiteFooter from "../../../components/site-footer"
import NewsletterSignup from "../../../components/newsletter-signup"
import { getPostsByCategory } from "@/lib/blog-data"

export default function DesignTheoryPage() {
  const posts = getPostsByCategory("Design Theory")

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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Design Theory</h1>
          <p className="text-xl md:text-2xl">
            Exploring the principles, concepts, and methods that form the foundation of clear and effective visual
            communication.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 container mx-auto">
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-2xl font-bold mb-4">No articles found</h3>
            <p className="text-neutral-600">Please check back soon.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="border border-black group">
                <div className="aspect-video bg-neutral-100 relative overflow-hidden">
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
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/blog/tag/${tag}`}
                        className="text-xs uppercase tracking-widest bg-black text-white px-3 py-1 hover:bg-red-600 transition-colors duration-300"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                  <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                  <p className="mb-6">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-sm uppercase tracking-widest hover:text-red-600 transition-colors duration-300"
                  >
                    Read Article <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <section className="py-16 px-4 md:px-8 bg-neutral-100">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold tracking-tighter mb-8">RELATED CATEGORIES</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link
              href="/blog/category/grid-systems"
              className="flex items-center justify-between p-4 border border-black bg-white hover:bg-neutral-50 transition-colors"
            >
              <span className="text-lg font-bold">Grid Systems</span>
              <div className="w-8 h-8 bg-black"></div>
            </Link>
            <Link
              href="/blog/category/typography"
              className="flex items-center justify-between p-4 border border-black bg-white hover:bg-neutral-50 transition-colors"
            >
              <span className="text-lg font-bold">Typography</span>
              <div className="w-8 h-8 bg-red-600"></div>
            </Link>
            <Link
              href="/blog/category/case-studies"
              className="flex items-center justify-between p-4 border border-black bg-white hover:bg-neutral-50 transition-colors"
            >
              <span className="text-lg font-bold">Case Studies</span>
              <div className="w-8 h-8 border-2 border-black"></div>
            </Link>
          </div>
        </div>
      </section>

      <NewsletterSignup />
      <SiteFooter />
    </main>
  )
}
