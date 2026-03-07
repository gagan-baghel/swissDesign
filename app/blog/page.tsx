import MainNav from "../components/main-nav"
import SiteFooter from "../components/site-footer"
import BlogClient from "./blog-client"

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Navigation */}
      <MainNav currentPath="/blog" />

      {/* Page Header */}
      <section className="py-20 px-4 md:px-8 container mx-auto border-b border-black">
        <h1 className="text-7xl md:text-8xl font-bold tracking-tighter leading-none mb-6">BLOG</h1>
        <p className="text-xl max-w-2xl">
          Insights, perspectives, and case studies on Swiss Design, typography, grid systems, and modern design
          practices.
        </p>
      </section>

      {/* Client-side blog functionality */}
      <BlogClient />

      {/* Newsletter */}
      <section className="py-20 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold tracking-tighter mb-6">SUBSCRIBE TO OUR NEWSLETTER</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Stay updated with our latest articles, case studies, and insights on Swiss Design and modern visual
            communication.
          </p>
          <form className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow py-3 px-4 bg-transparent border-2 border-white focus:outline-none focus:border-red-600 text-white placeholder-white/50"
            />
            <button
              type="button"
              className="px-6 py-3 bg-red-600 text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />
    </main>
  )
}
