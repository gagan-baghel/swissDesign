"use client"

import { useEffect, useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowRight, Calendar, Clock, Search, Tag } from "lucide-react"
import { blogPosts } from "@/lib/blog-data"

export default function BlogClient() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")
  const [visiblePosts, setVisiblePosts] = useState(7)
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(blogPosts.map((post) => post.category)))],
    [],
  )

  const filteredPosts = blogPosts.filter((post) => {
    const lowerSearch = searchTerm.toLowerCase()
    const matchesSearch =
      post.title.toLowerCase().includes(lowerSearch) ||
      post.excerpt.toLowerCase().includes(lowerSearch) ||
      post.tags.some((tag) => tag.toLowerCase().includes(lowerSearch))

    const matchesCategory = activeCategory === "All" || post.category === activeCategory
    return matchesSearch && matchesCategory
  })

  const featuredPost = blogPosts.find((post) => post.featured)

  const loadMorePosts = () => {
    setVisiblePosts((prev) => Math.min(prev + 4, filteredPosts.length))
  }

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    setVisiblePosts(7)
    window.scrollTo(0, 0)
  }

  const renderPostImage = (imageUrl: string, alt: string) => {
    return (
      <div className="relative w-full h-full">
        <Image src={imageUrl} alt={alt} fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
      </div>
    )
  }

  return (
    <>
      <section className="py-8 px-4 md:px-8 container mx-auto border-b border-black">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full border border-black py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-red-600"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-500" size={18} />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`text-sm uppercase tracking-widest ${activeCategory === category ? "bg-black text-white" : "hover:bg-neutral-100"} px-4 py-2`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {featuredPost && activeCategory === "All" && !searchTerm && (
        <section className="py-16 px-4 md:px-8 container mx-auto border-b border-black">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[16/9] bg-neutral-100 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                {renderPostImage(featuredPost.image, featuredPost.title)}
              </div>
            </div>
            <div>
              <span className="text-sm uppercase tracking-widest text-red-600 mb-2 block">Featured</span>
              <h2 className="text-4xl font-bold tracking-tighter mb-4">{featuredPost.title}</h2>
              <div className="flex items-center text-sm text-neutral-600 mb-4">
                <div className="flex items-center mr-4">
                  <Calendar size={16} className="mr-1" />
                  <span>{featuredPost.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-1" />
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>
              <p className="mb-6">{featuredPost.excerpt}</p>
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="inline-flex items-center text-sm uppercase tracking-widest hover:text-red-600 transition-colors"
              >
                Read Article <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="py-16 px-4 md:px-8 container mx-auto">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-2xl font-bold mb-4">No articles found</h3>
            <p className="text-neutral-600">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <>
            <h2 className="text-4xl font-bold tracking-tighter mb-12">
              {activeCategory === "All" ? "RECENT ARTICLES" : activeCategory.toUpperCase()}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {filteredPosts.slice(0, 3).map((post) => (
                <div key={post.id}>
                  <div className="aspect-[16/9] bg-neutral-100 mb-4 relative">
                    <div className="absolute inset-0 flex items-center justify-center">{renderPostImage(post.image, post.title)}</div>
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
                </div>
              ))}
            </div>

            {filteredPosts.length > 3 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.slice(3, visiblePosts).map((post) => (
                  <div key={post.id} className="flex gap-6 mb-8">
                    <div className="w-1/3 aspect-square bg-neutral-100 relative flex-shrink-0">
                      <div className="absolute inset-0 flex items-center justify-center">{renderPostImage(post.image, post.title)}</div>
                    </div>
                    <div className="w-2/3">
                      <div className="flex items-center text-sm text-neutral-600 mb-2">
                        <div className="flex items-center mr-4">
                          <Calendar size={16} className="mr-1" />
                          <span>{post.date}</span>
                        </div>
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
                  </div>
                ))}
              </div>
            )}

            {visiblePosts < filteredPosts.length && (
              <div className="text-center mt-12">
                <button
                  className="px-8 py-4 bg-black text-white text-sm uppercase tracking-widest hover:bg-red-600 transition-colors"
                  onClick={loadMorePosts}
                >
                  Load More Articles
                </button>
              </div>
            )}
          </>
        )}
      </section>

      <section className="py-16 px-4 md:px-8 bg-neutral-100">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold tracking-tighter mb-8">CATEGORIES</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              href="/blog/category/typography"
              className="flex items-center justify-between p-4 border border-black bg-white hover:bg-neutral-50 transition-colors"
            >
              <span className="text-lg font-bold">Typography</span>
              <Tag size={20} />
            </Link>
            <Link
              href="/blog/category/grid-systems"
              className="flex items-center justify-between p-4 border border-black bg-white hover:bg-neutral-50 transition-colors"
            >
              <span className="text-lg font-bold">Grid Systems</span>
              <Tag size={20} />
            </Link>
            <Link
              href="/blog/category/case-studies"
              className="flex items-center justify-between p-4 border border-black bg-white hover:bg-neutral-50 transition-colors"
            >
              <span className="text-lg font-bold">Case Studies</span>
              <Tag size={20} />
            </Link>
            <Link
              href="/blog/category/design-theory"
              className="flex items-center justify-between p-4 border border-black bg-white hover:bg-neutral-50 transition-colors"
            >
              <span className="text-lg font-bold">Design Theory</span>
              <Tag size={20} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
