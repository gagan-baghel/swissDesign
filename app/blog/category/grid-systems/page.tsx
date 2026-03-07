import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react"
import MainNav from "../../../components/main-nav"
import SiteFooter from "../../../components/site-footer"
import NewsletterSignup from "../../../components/newsletter-signup"
import { getPostsByCategory } from "@/lib/blog-data"

export const metadata: Metadata = {
  title: "Grid Systems | Blog",
  description: "Exploring the structural foundations of Swiss design and how they apply to modern digital and print interfaces.",
}

export default function GridSystemsCategoryPage() {
  const posts = getPostsByCategory("Grid Systems")

  return (
    <main className="min-h-screen bg-white pt-24">
      <MainNav currentPath="/blog" />

      <section className="py-20 px-4 md:px-8 container mx-auto border-b border-black">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm uppercase tracking-widest mb-8 hover:text-red-600 transition-colors"
          >
            <ArrowLeft className="mr-2" size={16} />
            Back to Blog
          </Link>
          <h1 className="text-7xl md:text-8xl font-bold tracking-tighter leading-none mb-6">GRID SYSTEMS</h1>
          <p className="text-xl max-w-2xl">
            Explore our articles on grid systems, from foundational principles in Swiss Design to practical responsive
            implementation.
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
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {posts.slice(0, 3).map((post) => (
                <article key={post.id} className="group">
                  <div className="aspect-[16/9] bg-neutral-100 mb-4 relative overflow-hidden border border-black">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <div className="flex items-center text-sm text-neutral-600 mb-2">
                    <div className="flex items-center mr-4">
                      <Calendar size={16} className="mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
                  <p className="mb-4">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-sm uppercase tracking-widest hover:text-red-600 transition-colors"
                  >
                    Read Article <ArrowRight size={16} className="ml-2" />
                  </Link>
                </article>
              ))}
            </div>

            {posts.length > 3 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {posts.slice(3).map((post) => (
                  <article key={post.id} className="flex gap-6 mb-8 group">
                    <div className="w-1/3 aspect-square bg-neutral-100 relative flex-shrink-0 border border-black overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <div className="w-2/3">
                      <div className="flex items-center text-sm text-neutral-600 mb-2">
                        <Calendar size={16} className="mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                      <p className="mb-4 line-clamp-2">{post.excerpt}</p>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-sm uppercase tracking-widest hover:text-red-600 transition-colors"
                      >
                        Read Article <ArrowRight size={16} className="ml-2" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </>
        )}
      </section>

      <section className="py-16 px-4 md:px-8 bg-neutral-100">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold tracking-tighter mb-8">RELATED CATEGORIES</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link
              href="/blog/category/typography"
              className="flex items-center justify-between p-4 border border-black bg-white hover:bg-neutral-50 transition-colors"
            >
              <span className="text-lg font-bold">Typography</span>
              <div className="w-8 h-8 bg-black"></div>
            </Link>
            <Link
              href="/blog/category/design-theory"
              className="flex items-center justify-between p-4 border border-black bg-white hover:bg-neutral-50 transition-colors"
            >
              <span className="text-lg font-bold">Design Theory</span>
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
