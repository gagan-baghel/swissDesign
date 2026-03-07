import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"
import MainNav from "../../components/main-nav"
import NewsletterSignup from "../../components/newsletter-signup"
import SiteFooter from "../../components/site-footer"

const tracks = [
  {
    title: "Design Internship",
    points: [
      "Assist with brand identity and editorial projects",
      "Work with senior designers on production files",
      "Learn grid systems and typographic workflow",
    ],
  },
  {
    title: "Strategy Internship",
    points: [
      "Support research and brand audits",
      "Contribute to workshop prep and synthesis",
      "Document insights for client presentations",
    ],
  },
  {
    title: "Digital Internship",
    points: [
      "Help translate design systems into product UI",
      "Build and test responsive page layouts",
      "Collaborate on accessibility and QA checks",
    ],
  },
]

export default function InternshipsPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <MainNav currentPath="/careers" />

      <section className="py-20 px-4 md:px-8 container mx-auto border-b border-black">
        <Link
          href="/careers"
          className="inline-flex items-center text-sm uppercase tracking-widest mb-8 hover:text-red-600 transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" /> Back to Careers
        </Link>
        <h1 className="text-7xl md:text-8xl font-bold tracking-tighter leading-none mb-6">INTERNSHIPS</h1>
        <p className="text-xl max-w-2xl">
          Our internship program offers practical studio experience across design, strategy, and digital workstreams.
        </p>
      </section>

      <section className="py-16 px-4 md:px-8 container mx-auto border-b border-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] border border-black relative overflow-hidden">
            <Image src="/images/about-studio.png" alt="Internship team collaboration" fill className="object-cover" />
          </div>
          <div>
            <h2 className="text-4xl font-bold tracking-tighter mb-6">PROGRAM OVERVIEW</h2>
            <p className="mb-6 text-lg">
              Interns join active client projects, receive structured mentorship, and participate in weekly critiques.
              Every track emphasizes Swiss Design fundamentals: hierarchy, clarity, and disciplined systems thinking.
            </p>
            <p>
              Typical duration is 3-6 months. We review applications on a rolling basis and prioritize candidates with
              strong portfolios and curiosity about process-driven design.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 container mx-auto border-b border-black">
        <h2 className="text-4xl font-bold tracking-tighter mb-12 text-center">AVAILABLE TRACKS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tracks.map((track) => (
            <article key={track.title} className="border border-black p-8">
              <h3 className="text-2xl font-bold mb-6">{track.title}</h3>
              <ul className="space-y-3">
                {track.points.map((point) => (
                  <li key={point} className="flex items-start">
                    <Check size={18} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-8">READY TO APPLY?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-10">
            Submit your portfolio and tell us which internship track you are interested in.
          </p>
          <Link
            href="/careers/apply"
            className="inline-block px-8 py-4 bg-red-600 text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
          >
            Apply Now
          </Link>
        </div>
      </section>

      <NewsletterSignup />
      <SiteFooter />
    </main>
  )
}
