import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check, Calendar, MapPin, Briefcase } from "lucide-react"
import MainNav from "../components/main-nav"
import SiteFooter from "../components/site-footer"
import NewsletterSignup from "../components/newsletter-signup"

export const metadata: Metadata = {
  title: "Careers",
  description: "Join our team of designers, strategists, and thinkers dedicated to creating clear, functional design.",
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

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Navigation */}
      <MainNav currentPath="/careers" />

      {/* Page Header */}
      <section className="py-20 px-4 md:px-8 container mx-auto border-b border-black">
        <h1 className="text-7xl md:text-8xl font-bold tracking-tighter leading-none mb-6">CAREERS</h1>
        <p className="text-xl max-w-2xl">
          Join our team of designers, strategists, and thinkers dedicated to creating clear, functional, and impactful
          design solutions rooted in Swiss Design principles.
        </p>
      </section>

      {/* Why Join Us */}
      <section className="py-16 px-4 md:px-8 container mx-auto border-b border-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold tracking-tighter mb-6">WHY JOIN US</h2>
            <p className="text-xl mb-6">
              At Swiss Design Studio, we're passionate about creating work that matters. We believe in the power of
              clarity, precision, and purpose in design, and we're looking for like-minded individuals to join our team.
            </p>
            <p className="mb-6">
              We offer a collaborative and supportive environment where you can grow your skills, work on meaningful
              projects, and make a real impact. Our studio is a place where creativity thrives, ideas are valued, and
              excellence is expected.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Collaborative and supportive work environment</span>
              </div>
              <div className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Opportunity to work with leading brands and organizations</span>
              </div>
              <div className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Continuous learning and professional development</span>
              </div>
              <div className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Competitive salary and benefits</span>
              </div>
            </div>
          </div>
          <div className="aspect-[4/3] bg-neutral-100 relative">
            <Image
              src="/images/project-typography.png"
              alt="Why Join Us"
              fill
              className="object-cover grayscale"
            />
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 px-4 md:px-8 container mx-auto">
        <h2 className="text-4xl font-bold tracking-tighter mb-12">OPEN POSITIONS</h2>

        <div className="space-y-8">
          {jobs.map((job) => (
            <div key={job.id} className="border border-black hover:bg-neutral-50 transition-colors">
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
                  <h3 className="text-2xl font-bold mb-2 md:mb-0">{job.title}</h3>
                  <div className="flex items-center">
                    <span className="text-sm uppercase tracking-widest bg-black text-white px-3 py-1">
                      {job.department}
                    </span>
                  </div>
                </div>
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
                <p className="mb-6">{job.description}</p>
                <Link
                  href={`/careers/${job.id}`}
                  className="inline-flex items-center text-sm uppercase tracking-widest hover:text-red-600 transition-colors"
                >
                  View Details <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Job Detail Modal for the first job (example) */}
      <section className="py-16 px-4 md:px-8 bg-neutral-100">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold tracking-tighter mb-12 text-center">FEATURED POSITION</h2>
          <div className="bg-white border border-black p-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
              <h3 className="text-2xl font-bold mb-2 md:mb-0">{jobs[0].title}</h3>
              <div className="flex items-center">
                <span className="text-sm uppercase tracking-widest bg-black text-white px-3 py-1">
                  {jobs[0].department}
                </span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-6 text-sm">
              <div className="flex items-center">
                <MapPin size={16} className="mr-2 text-neutral-600" />
                <span>{jobs[0].location}</span>
              </div>
              <div className="flex items-center">
                <Briefcase size={16} className="mr-2 text-neutral-600" />
                <span>{jobs[0].type}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-2 text-neutral-600" />
                <span>Posted: {jobs[0].postedDate}</span>
              </div>
            </div>
            <p className="mb-6">{jobs[0].description}</p>

            <div className="mb-6">
              <h4 className="text-xl font-bold mb-4">Responsibilities</h4>
              <ul className="space-y-2">
                {jobs[0].responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start">
                    <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h4 className="text-xl font-bold mb-4">Requirements</h4>
              <ul className="space-y-2">
                {jobs[0].requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                    <span>{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-center">
              <Link
                href="/careers/apply"
                className="inline-block px-8 py-4 bg-black text-white text-sm uppercase tracking-widest hover:bg-red-600 transition-colors"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 px-4 md:px-8 container mx-auto border-t border-b border-black">
        <h2 className="text-4xl font-bold tracking-tighter mb-12 text-center">APPLICATION PROCESS</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-black flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
              01
            </div>
            <h3 className="text-xl font-bold mb-4">APPLY</h3>
            <p>
              Submit your application through our online form, including your resume, portfolio, and a brief cover
              letter.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-black flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
              02
            </div>
            <h3 className="text-xl font-bold mb-4">REVIEW</h3>
            <p>
              Our team will review your application and portfolio. If there's a potential fit, we'll reach out to
              schedule an initial interview.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-black flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
              03
            </div>
            <h3 className="text-xl font-bold mb-4">INTERVIEW</h3>
            <p>
              The interview process typically includes a portfolio review, technical assessment, and conversations with
              team members.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-black flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
              04
            </div>
            <h3 className="text-xl font-bold mb-4">OFFER</h3>
            <p>
              If you're the right fit for the role and our team, we'll extend an offer and welcome you to Swiss Design
              Studio.
            </p>
          </div>
        </div>
      </section>

      {/* Internship Program */}
      <section className="py-16 px-4 md:px-8 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-square bg-neutral-100 relative grayscale hover:grayscale-0 transition-all duration-500">
            <Image
              src="/images/project-poster.png"
              alt="Internship Program"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold tracking-tighter mb-6">INTERNSHIP PROGRAM</h2>
            <p className="text-xl mb-6">
              Our internship program offers emerging designers the opportunity to gain hands-on experience in a
              professional studio environment. Interns work alongside our team on real client projects, receiving
              mentorship and guidance from experienced designers.
            </p>
            <p className="mb-8">
              Internships are available in Design, Strategy, and Digital departments, and typically last 3-6 months.
              We're looking for students and recent graduates who are passionate about Swiss Design principles and eager
              to learn and grow.
            </p>
            <Link
              href="/careers/internships"
              className="inline-block px-8 py-4 bg-black text-white text-sm uppercase tracking-widest hover:bg-red-600 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Studio Culture */}
      <section className="py-16 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold tracking-tighter mb-12 text-center">OUR STUDIO CULTURE</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-white hover:bg-white/5 transition-colors">
              <h3 className="text-2xl font-bold mb-4">COLLABORATION</h3>
              <p>
                We believe in the power of collaboration and diverse perspectives. Our team works together across
                disciplines to create solutions that are greater than the sum of their parts.
              </p>
            </div>

            <div className="p-8 border border-white hover:bg-white/5 transition-colors">
              <h3 className="text-2xl font-bold mb-4">EXCELLENCE</h3>
              <p>
                We strive for excellence in everything we do. From concept to execution, we maintain the highest
                standards of quality and craft in our work.
              </p>
            </div>

            <div className="p-8 border border-white hover:bg-white/5 transition-colors">
              <h3 className="text-2xl font-bold mb-4">GROWTH</h3>
              <p>
                We're committed to the growth and development of our team members. We provide opportunities for
                learning, mentorship, and advancement within the studio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-8 bg-red-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-8">JOIN OUR TEAM</h2>
          <p className="text-xl max-w-2xl mx-auto mb-12">
            Ready to be part of a studio dedicated to clarity, precision, and purposeful design? We'd love to hear from
            you.
          </p>
          <Link
            href="/careers/apply"
            className="inline-block px-8 py-4 bg-black text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
          >
            Apply Now
          </Link>
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup />

      {/* Footer */}
      <SiteFooter />
    </main>
  )
}
