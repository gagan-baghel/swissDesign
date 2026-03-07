import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Calendar, MapPin, Briefcase, Check } from "lucide-react"
import MainNav from "../../components/main-nav"
import SiteFooter from "../../components/site-footer"
import NewsletterSignup from "../../components/newsletter-signup"

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const job = jobs.find((j) => j.id === id)

  if (!job) {
    return {
      title: 'Job Not Found',
    }
  }

  return {
    title: `${job.title} | Careers`,
    description: job.description,
  }
}


// Job type definition
type Job = {
  id: string
  title: string
  department: string
  location: string
  type: string
  postedDate: string
  description: string
  responsibilities: string[]
  requirements: string[]
}

// Sample jobs data
const jobs: Job[] = [
  {
    id: "1",
    title: "Senior Graphic Designer",
    department: "Design",
    location: "Zürich, Switzerland",
    type: "Full-time",
    postedDate: "May 10, 2025",
    description:
      "We're looking for a Senior Graphic Designer with a strong foundation in Swiss Design principles to join our team. The ideal candidate will have experience in brand identity, print design, and digital design, with a portfolio that demonstrates a clear understanding of typography, grid systems, and visual hierarchy.",
    responsibilities: [
      "Lead design projects from concept to completion",
      "Develop brand identities and visual systems for clients",
      "Create print and digital design solutions",
      "Collaborate with the strategy team to develop design concepts",
      "Mentor junior designers and provide art direction",
      "Present design concepts to clients and stakeholders",
    ],
    requirements: [
      "5+ years of experience in graphic design",
      "Strong portfolio demonstrating Swiss Design principles",
      "Expert knowledge of typography and grid systems",
      "Proficiency in Adobe Creative Suite",
      "Experience with digital design tools like Figma",
      "Bachelor's degree in Graphic Design or related field",
      "Excellent communication and presentation skills",
      "Ability to work collaboratively in a team environment",
    ],
  },
  {
    id: "2",
    title: "UX/UI Designer",
    department: "Digital",
    location: "Zürich, Switzerland",
    type: "Full-time",
    postedDate: "May 8, 2025",
    description:
      "We're seeking a UX/UI Designer who can apply Swiss Design principles to digital experiences. The ideal candidate will have a strong understanding of user-centered design, information architecture, and interaction design, with experience creating clean, functional, and visually appealing digital interfaces.",
    responsibilities: [
      "Design user interfaces for websites, applications, and digital products",
      "Conduct user research and usability testing",
      "Create wireframes, prototypes, and user flows",
      "Collaborate with developers to ensure design implementation",
      "Stay current with UX/UI trends and best practices",
      "Present design concepts to clients and stakeholders",
    ],
    requirements: [
      "3+ years of experience in UX/UI design",
      "Strong portfolio demonstrating clean, functional digital design",
      "Experience with design systems and component libraries",
      "Proficiency in Figma, Sketch, or similar design tools",
      "Understanding of responsive design and accessibility",
      "Knowledge of HTML, CSS, and basic front-end development",
      "Bachelor's degree in Design, HCI, or related field",
      "Excellent communication and collaboration skills",
    ],
  },
  {
    id: "3",
    title: "Brand Strategist",
    department: "Strategy",
    location: "Zürich, Switzerland",
    type: "Full-time",
    postedDate: "May 5, 2025",
    description:
      "We're looking for a Brand Strategist to help our clients define their brand positioning, messaging, and visual direction. The ideal candidate will have experience in brand strategy, market research, and client management, with a strong understanding of how strategy informs design.",
    responsibilities: [
      "Develop brand strategies and positioning for clients",
      "Conduct market research and competitive analysis",
      "Create brand messaging and communication frameworks",
      "Collaborate with designers to translate strategy into visual solutions",
      "Present strategic recommendations to clients",
      "Manage client relationships and expectations",
    ],
    requirements: [
      "4+ years of experience in brand strategy or marketing",
      "Strong analytical and research skills",
      "Experience developing brand positioning and messaging",
      "Understanding of design principles and visual communication",
      "Excellent presentation and communication skills",
      "Bachelor's degree in Marketing, Business, or related field",
      "Ability to think both strategically and creatively",
      "Experience working with design teams",
    ],
  },
  {
    id: "4",
    title: "Junior Designer",
    department: "Design",
    location: "Zürich, Switzerland",
    type: "Full-time",
    postedDate: "May 3, 2025",
    description:
      "We're seeking a Junior Designer with a passion for Swiss Design principles to join our team. This is an opportunity to learn and grow under the mentorship of experienced designers while contributing to real client projects across print and digital media.",
    responsibilities: [
      "Assist senior designers with project execution",
      "Create design assets for print and digital projects",
      "Support the development of brand identities and visual systems",
      "Prepare files for production and implementation",
      "Research design trends and references",
      "Participate in brainstorming and concept development",
    ],
    requirements: [
      "0-2 years of professional design experience",
      "Strong portfolio demonstrating typography, layout, and visual design skills",
      "Understanding of Swiss Design principles",
      "Proficiency in Adobe Creative Suite",
      "Familiarity with digital design tools like Figma",
      "Bachelor's degree in Graphic Design or related field",
      "Eagerness to learn and grow as a designer",
      "Good communication and collaboration skills",
    ],
  },
  {
    id: "5",
    title: "Project Manager",
    department: "Operations",
    location: "Zürich, Switzerland",
    type: "Full-time",
    postedDate: "April 28, 2025",
    description:
      "We're looking for a Project Manager to oversee the planning, execution, and delivery of design projects. The ideal candidate will have experience managing creative projects, with strong organizational, communication, and leadership skills.",
    responsibilities: [
      "Manage project timelines, budgets, and resources",
      "Coordinate communication between clients and internal teams",
      "Create project plans and track progress",
      "Identify and mitigate project risks",
      "Ensure project deliverables meet quality standards",
      "Facilitate project meetings and presentations",
    ],
    requirements: [
      "3+ years of experience in project management, preferably in a design or creative agency",
      "Strong organizational and time management skills",
      "Experience with project management methodologies and tools",
      "Understanding of design processes and workflows",
      "Excellent communication and interpersonal skills",
      "Bachelor's degree in Business, Design, or related field",
      "Problem-solving mindset and attention to detail",
      "Ability to manage multiple projects simultaneously",
    ],
  },
]

export default async function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const job = jobs.find((j) => j.id === id)

  if (!job) {
    return (
      <main className="min-h-screen bg-white pt-24">
        <MainNav currentPath="/careers" />
        <div className="container mx-auto px-4 md:px-8 py-20 text-center">
          <h1 className="text-4xl font-bold mb-6">Job Not Found</h1>
          <p className="mb-8">The job position you're looking for doesn't exist or has been filled.</p>
          <Link
            href="/careers"
            className="inline-flex items-center text-sm uppercase tracking-widest hover:text-red-600 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" /> Back to Careers
          </Link>
        </div>
        <SiteFooter />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Navigation */}
      <MainNav currentPath="/careers" />

      {/* Job Header */}
      <section className="py-20 px-4 md:px-8 container mx-auto border-b border-black">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <Link
            href="/careers"
            className="inline-flex items-center text-sm uppercase tracking-widest hover:text-red-600 transition-colors mb-4 md:mb-0"
          >
            <ArrowLeft size={16} className="mr-2" /> Back to Careers
          </Link>
          <div className="flex items-center">
            <span className="text-sm uppercase tracking-widest bg-black text-white px-3 py-1">{job.department}</span>
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-6">{job.title.toUpperCase()}</h1>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-6 text-sm">
          <div className="flex items-center">
            <MapPin size={16} className="mr-2 text-neutral-600" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center">
            <Briefcase size={16} className="mr-2 text-neutral-600" />
            <span>{job.type}</span>
          </div>
          <div className="flex items-center">
            <Calendar size={16} className="mr-2 text-neutral-600" />
            <span>Posted: {job.postedDate}</span>
          </div>
        </div>
      </section>

      {/* Job Details */}
      <section className="py-16 px-4 md:px-8 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <div className="mb-12">
              <h2 className="text-3xl font-bold tracking-tighter mb-6">OVERVIEW</h2>
              <p className="mb-6">{job.description}</p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold tracking-tighter mb-6">RESPONSIBILITIES</h2>
              <ul className="space-y-4">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start">
                    <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-6">REQUIREMENTS</h2>
              <ul className="space-y-4">
                {job.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                    <span>{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className="bg-neutral-100 p-8 sticky top-24">
              <h3 className="text-xl font-bold mb-6">APPLICATION</h3>
              <p className="mb-6">
                If you're passionate about design and believe you'd be a good fit for this role, we'd love to hear from
                you.
              </p>
              <Link
                href="/careers/apply"
                className="inline-block w-full py-4 bg-black text-white text-center text-sm uppercase tracking-widest hover:bg-red-600 transition-colors"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Positions */}
      <section className="py-16 px-4 md:px-8 bg-neutral-100">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold tracking-tighter mb-12 text-center">SIMILAR POSITIONS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {jobs
              .filter((j) => j.id !== job.id && j.department === job.department)
              .slice(0, 3)
              .map((similarJob) => (
                <div key={similarJob.id} className="bg-white border border-black p-6">
                  <h3 className="text-xl font-bold mb-2">{similarJob.title}</h3>
                  <div className="flex items-center mb-4">
                    <span className="text-xs uppercase tracking-widest bg-black text-white px-2 py-1">
                      {similarJob.department}
                    </span>
                  </div>
                  <p className="mb-6 line-clamp-3">{similarJob.description}</p>
                  <Link
                    href={`/careers/${similarJob.id}`}
                    className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup />

      {/* Footer */}
      <SiteFooter />
    </main>
  )
}
