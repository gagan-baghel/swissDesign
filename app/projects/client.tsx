"use client"

import { useEffect, useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Filter } from "lucide-react"
import { projects } from "@/lib/project-data"

export default function ProjectsClient() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")
  const [sortOrder, setSortOrder] = useState("Newest")
  const [visibleProjects, setVisibleProjects] = useState(6)
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const allCategories = useMemo(
    () => ["All", ...Array.from(new Set(projects.flatMap((project) => project.categories)))],
    [],
  )

  const filteredProjects = projects.filter((project) => {
    const lowerSearch = searchTerm.toLowerCase()
    const matchesSearch =
      project.title.toLowerCase().includes(lowerSearch) ||
      project.excerpt.toLowerCase().includes(lowerSearch) ||
      project.tags.some((tag) => tag.toLowerCase().includes(lowerSearch))

    const matchesCategory = activeCategory === "All" || project.categories.includes(activeCategory)

    return matchesSearch && matchesCategory
  })

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortOrder === "Newest") return Number.parseInt(b.year) - Number.parseInt(a.year)
    if (sortOrder === "Oldest") return Number.parseInt(a.year) - Number.parseInt(b.year)
    if (sortOrder === "A-Z") return a.title.localeCompare(b.title)
    return 0
  })

  const featuredProject = projects.find((project) => project.featured)

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, sortedProjects.length))
  }

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    setVisibleProjects(6)
    window.scrollTo(0, 0)
  }

  const renderProjectImage = (imageUrl: string, title: string) => {
    return (
      <div className="relative w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>
    )
  }

  return (
    <>
      <section className="py-8 px-4 md:px-8 container mx-auto border-b border-black">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center">
            <Filter className="mr-2" size={20} />
            <span className="text-sm uppercase tracking-widest mr-6">Filter:</span>
            <div className="flex flex-wrap gap-4">
              {allCategories.map((category) => (
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
          <div className="flex items-center">
            <span className="text-sm uppercase tracking-widest mr-4">Sort:</span>
            <select
              className="text-sm uppercase tracking-widest border-none bg-transparent focus:outline-none"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option>Newest</option>
              <option>Oldest</option>
              <option>A-Z</option>
            </select>
          </div>
        </div>
      </section>

      <section className="py-8 px-4 md:px-8 container mx-auto border-b border-black">
        <div className="relative max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search projects..."
            className="w-full border border-black py-3 px-4 pr-12 focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2" aria-label="Search projects">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>
      </section>

      {featuredProject && (
        <section className="py-16 px-4 md:px-8 container mx-auto border-b border-black">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Featured Project</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="aspect-square bg-neutral-100 flex items-center justify-center group border border-black">
              {renderProjectImage(featuredProject.image, featuredProject.title)}
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{featuredProject.title}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {featuredProject.categories.map((category) => (
                  <span key={category} className="text-xs uppercase tracking-widest bg-black text-white px-3 py-1">
                    {category}
                  </span>
                ))}
              </div>
              <p className="text-lg mb-6">{featuredProject.excerpt}</p>
              <div className="mb-8">
                <h4 className="text-sm uppercase tracking-widest mb-2">Services</h4>
                <div className="flex flex-wrap gap-2">
                  {featuredProject.services?.map((service) => (
                    <span key={service} className="text-xs uppercase tracking-widest border border-black px-3 py-1">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                href={`/projects/${featuredProject.slug}`}
                className="inline-block bg-black text-white px-6 py-3 text-sm uppercase tracking-widest hover:bg-red-600 transition-colors duration-300"
              >
                View Project
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="py-16 px-4 md:px-8 container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">All Projects</h2>
        {sortedProjects.length === 0 ? (
          <div className="text-center py-12 border border-black">
            <h3 className="text-2xl font-bold mb-4">No projects found</h3>
            <p className="text-neutral-600">Try changing your search or filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProjects.slice(0, visibleProjects).map((project) => (
              <div key={project.id} className="border border-black group">
                <div className="aspect-square bg-neutral-100 flex items-center justify-center">{renderProjectImage(project.image, project.title)}</div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.categories.map((category) => (
                      <span key={category} className="text-xs uppercase tracking-widest bg-black text-white px-3 py-1">
                        {category}
                      </span>
                    ))}
                  </div>
                  <p className="mb-6">{project.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">{project.year}</span>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors duration-300"
                    >
                      View Project →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {visibleProjects < sortedProjects.length && (
          <div className="mt-12 text-center">
            <button
              className="border border-black px-6 py-3 text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-colors duration-300"
              onClick={loadMoreProjects}
            >
              Load More
            </button>
          </div>
        )}
      </section>
    </>
  )
}
