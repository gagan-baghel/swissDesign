import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Tag } from "lucide-react"
import MainNav from "../../components/main-nav"
import SiteFooter from "../../components/site-footer"
import NewsletterSignup from "../../components/newsletter-signup"
import { getProjectBySlug, getRelatedProjects } from "@/lib/project-data"

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const relatedProjects = getRelatedProjects(project)

  return (
    <main className="min-h-screen bg-white pt-24">
      <MainNav currentPath="/projects" />

      <section className="py-20 px-4 md:px-8 container mx-auto border-b border-black">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center text-sm uppercase tracking-widest hover:text-red-600 transition-colors mb-4 md:mb-0"
          >
            <ArrowLeft size={16} className="mr-2" /> Back to Projects
          </Link>
          <div className="flex items-center">
            <Calendar size={16} className="mr-2" />
            <span className="text-sm uppercase tracking-widest">{project.year}</span>
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-6">{project.title.toUpperCase()}</h1>
        <p className="text-xl max-w-2xl mb-8">{project.excerpt}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Link
              key={tag}
              href={`/projects?tag=${tag}`}
              className="flex items-center px-3 py-1 border border-black hover:bg-neutral-100 transition-colors"
            >
              <Tag size={14} className="mr-2" />
              <span className="text-sm uppercase tracking-widest">{tag}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 container mx-auto border-b border-black">
        <div className="aspect-[16/9] bg-neutral-100 relative border border-black overflow-hidden">
          <Image src={project.image} alt={project.title} fill className="object-cover" />
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <div className="mb-12">
              <h2 className="text-3xl font-bold tracking-tighter mb-6">OVERVIEW</h2>
              <p className="mb-6">{project.content.overview}</p>
            </div>
            <div className="mb-12">
              <h2 className="text-3xl font-bold tracking-tighter mb-6">CHALLENGE</h2>
              <p className="mb-6">{project.content.challenge}</p>
            </div>
            <div className="mb-12">
              <h2 className="text-3xl font-bold tracking-tighter mb-6">SOLUTION</h2>
              <p className="mb-6">{project.content.solution}</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-6">RESULTS</h2>
              <p>{project.content.results}</p>
            </div>
          </div>
          <div>
            <div className="bg-neutral-100 p-8 sticky top-24 border border-black">
              <h3 className="text-xl font-bold mb-6">PROJECT DETAILS</h3>
              <div className="mb-6">
                <h4 className="text-sm uppercase tracking-widest mb-2">Client</h4>
                <p>{project.title}</p>
              </div>
              <div className="mb-6">
                <h4 className="text-sm uppercase tracking-widest mb-2">Year</h4>
                <p>{project.year}</p>
              </div>
              <div className="mb-6">
                <h4 className="text-sm uppercase tracking-widest mb-2">Categories</h4>
                <p>{project.categories.join(", ")}</p>
              </div>
              {project.services && (
                <div>
                  <h4 className="text-sm uppercase tracking-widest mb-2">Services</h4>
                  <ul className="list-disc pl-5">
                    {project.services.map((service) => (
                      <li key={service}>{service}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 bg-neutral-100">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold tracking-tighter mb-12 text-center">RELATED PROJECTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProjects.map((relatedProject) => (
              <article key={relatedProject.id} className="group">
                <div className="aspect-square bg-white mb-4 overflow-hidden relative border border-black">
                  <Image
                    src={relatedProject.image}
                    alt={relatedProject.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{relatedProject.title}</h3>
                <p className="text-neutral-600 mb-2">{relatedProject.categories.join(", ")}</p>
                <Link
                  href={`/projects/${relatedProject.slug}`}
                  className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors inline-flex items-center"
                >
                  View Project <ArrowLeft size={16} className="ml-2 rotate-180" />
                </Link>
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
