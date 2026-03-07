import MainNav from "../components/main-nav"
import SiteFooter from "../components/site-footer"
import NewsletterSignup from "../components/newsletter-signup"
import ProjectsClient from "./client"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Navigation */}
      <MainNav currentPath="/projects" />

      {/* Page Header */}
      <section className="py-20 px-4 md:px-8 container mx-auto border-b border-black">
        <h1 className="text-7xl md:text-8xl font-bold tracking-tighter leading-none mb-6">PROJECTS</h1>
        <p className="text-xl max-w-2xl">
          A curated selection of our work showcasing Swiss Design principles in action. Each project demonstrates our
          commitment to clarity, precision, and objectivity.
        </p>
      </section>

      {/* Client-side Projects Component */}
      <ProjectsClient />

      {/* Newsletter Signup */}
      <NewsletterSignup />

      {/* Footer */}
      <SiteFooter />
    </main>
  )
}
