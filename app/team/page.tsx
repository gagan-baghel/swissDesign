import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Mail, Instagram, Linkedin } from "lucide-react"
import MainNav from "../components/main-nav"
import SiteFooter from "../components/site-footer"
import NewsletterSignup from "../components/newsletter-signup"

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the designers, strategists, and thinkers behind our Swiss Design approach.",
}

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Navigation */}
      <MainNav currentPath="/team" />

      {/* Page Header */}
      <section className="py-20 px-4 md:px-8 container mx-auto border-b border-black">
        <h1 className="text-7xl md:text-8xl font-bold tracking-tighter leading-none mb-6">TEAM</h1>
        <p className="text-xl max-w-2xl">
          Meet the designers, strategists, and thinkers behind our Swiss Design approach. We're a diverse team united by
          our passion for clarity, precision, and purposeful design.
        </p>
      </section>

      {/* Studio Philosophy */}
      <section className="py-16 px-4 md:px-8 container mx-auto border-b border-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold tracking-tighter mb-6">OUR PHILOSOPHY</h2>
            <p className="text-xl mb-6">
              We believe that design should be clear, objective, and functional. Our approach is rooted in the Swiss
              Design tradition, which emphasizes typography, grid systems, and minimalist aesthetics.
            </p>
            <p className="mb-6">
              Our team brings together diverse perspectives and expertise, but we share a common commitment to
              precision, clarity, and purpose in everything we create. We believe that good design solves problems,
              communicates effectively, and stands the test of time.
            </p>
            <Link
              href="/process"
              className="inline-flex items-center text-sm uppercase tracking-widest hover:text-red-600 transition-colors"
            >
              Our Process <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
          <div className="aspect-[4/3] bg-neutral-100 relative">
            <Image
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
              alt="Our Philosophy"
              fill
              className="object-cover grayscale"
            />
          </div>
        </div>
      </section>

      {/* Leadership Team - Component 4 */}
      <section className="py-16 px-4 md:px-8 container mx-auto">
        <h2 className="text-4xl font-bold tracking-tighter mb-12 text-center">LEADERSHIP</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Team Member 1 - Component 5 */}
          <div>
            <div className="aspect-[3/4] bg-neutral-100 mb-6 relative grayscale hover:grayscale-0 transition-all duration-500">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop"
                alt="Emma Müller"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-1">EMMA MÜLLER</h3>
            <p className="text-neutral-600 mb-4">Founder & Creative Director</p>
            <p className="mb-4">
              Emma brings over 15 years of experience in Swiss Design, having studied under some of the tradition's
              modern masters. She leads our creative vision and strategic direction.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:emma@swissdesign.com" className="text-black hover:text-red-600 transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="text-black hover:text-red-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="text-black hover:text-red-600 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Team Member 2 - Component 6 */}
          <div>
            <div className="aspect-[3/4] bg-neutral-100 mb-6 relative grayscale hover:grayscale-0 transition-all duration-500">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop"
                alt="Thomas Weber"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-1">THOMAS WEBER</h3>
            <p className="text-neutral-600 mb-4">Design Director</p>
            <p className="mb-4">
              Thomas oversees our design team and project execution. With a background in typography and editorial
              design, he ensures our work maintains the highest standards of craft and precision.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:thomas@swissdesign.com" className="text-black hover:text-red-600 transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="text-black hover:text-red-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="text-black hover:text-red-600 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Team Member 3 - Component 7 */}
          <div>
            <div className="aspect-[3/4] bg-neutral-100 mb-6 relative grayscale hover:grayscale-0 transition-all duration-500">
              <Image
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
                alt="Sophia Chen"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-1">SOPHIA CHEN</h3>
            <p className="text-neutral-600 mb-4">Strategy Director</p>
            <p className="mb-4">
              Sophia leads our strategic approach, helping clients translate business objectives into design briefs. Her
              background in brand strategy and marketing informs our purposeful design solutions.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:sophia@swissdesign.com" className="text-black hover:text-red-600 transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="text-black hover:text-red-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="text-black hover:text-red-600 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Design Team - Component 8 */}
        <h2 className="text-4xl font-bold tracking-tighter mb-12 text-center">DESIGN TEAM</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {/* Designer 1 - Component 9 */}
          <div>
            <div className="aspect-square bg-neutral-100 mb-4 relative grayscale hover:grayscale-0 transition-all duration-500">
              <Image
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop"
                alt="Alex Schmidt"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-1">ALEX SCHMIDT</h3>
            <p className="text-neutral-600">Senior Designer</p>
          </div>

          {/* Designer 2 - Component 10 */}
          <div>
            <div className="aspect-square bg-neutral-100 mb-4 relative grayscale hover:grayscale-0 transition-all duration-500">
              <Image
                src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=1887&auto=format&fit=crop"
                alt="Nina Rodriguez"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-1">NINA RODRIGUEZ</h3>
            <p className="text-neutral-600">Typography Specialist</p>
          </div>

          {/* Designer 3 - Component 11 */}
          <div>
            <div className="aspect-square bg-neutral-100 mb-4 relative grayscale hover:grayscale-0 transition-all duration-500">
              <Image
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
                alt="David Kim"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-1">DAVID KIM</h3>
            <p className="text-neutral-600">Digital Designer</p>
          </div>

          {/* Designer 4 - Component 12 */}
          <div>
            <div className="aspect-square bg-neutral-100 mb-4 relative grayscale hover:grayscale-0 transition-all duration-500">
              <Image
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop"
                alt="Laura Fischer"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-1">LAURA FISCHER</h3>
            <p className="text-neutral-600">Print Designer</p>
          </div>
        </div>

        {/* Strategy Team - Component 13 */}
        <h2 className="text-4xl font-bold tracking-tighter mb-12 text-center">STRATEGY TEAM</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Strategist 1 - Component 14 */}
          <div>
            <div className="aspect-[3/4] bg-neutral-100 mb-4 relative grayscale hover:grayscale-0 transition-all duration-500">
              <Image
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop"
                alt="Michael Johnson"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-1">MICHAEL JOHNSON</h3>
            <p className="text-neutral-600 mb-4">Brand Strategist</p>
            <p className="mb-4">
              Michael helps clients define their brand positioning and messaging, ensuring our design solutions align
              with business objectives and resonate with target audiences.
            </p>
          </div>

          {/* Strategist 2 - Component 15 */}
          <div>
            <div className="aspect-[3/4] bg-neutral-100 mb-4 relative grayscale hover:grayscale-0 transition-all duration-500">
              <Image
                src="/placeholder-user.jpg"
                alt="Julia Santos"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-1">JULIA SANTOS</h3>
            <p className="text-neutral-600 mb-4">Research Lead</p>
            <p className="mb-4">
              Julia leads our research efforts, gathering insights that inform our strategic and creative approach. Her
              background in user experience and market research ensures our work is both beautiful and effective.
            </p>
          </div>

          {/* Strategist 3 - Component 16 */}
          <div>
            <div className="aspect-[3/4] bg-neutral-100 mb-4 relative grayscale hover:grayscale-0 transition-all duration-500">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
                alt="Robert Zhang"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-1">ROBERT ZHANG</h3>
            <p className="text-neutral-600 mb-4">Content Strategist</p>
            <p className="mb-4">
              Robert helps clients develop content strategies that complement our design work. His expertise in
              messaging and communication ensures our visual solutions are supported by compelling content.
            </p>
          </div>
        </div>
      </section>

      {/* Join Our Team - Component 17 */}
      <section className="py-20 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold tracking-tighter mb-6">JOIN OUR TEAM</h2>
              <p className="text-xl mb-6">
                We're always looking for talented designers and strategists who share our passion for Swiss Design
                principles and purposeful communication.
              </p>
              <p className="mb-8">
                If you're interested in joining our team, we'd love to hear from you. Send your portfolio and resume to
                careers@swissdesign.com.
              </p>
              <Link
                href="/careers"
                className="inline-block px-8 py-4 bg-red-600 text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
              >
                View Open Positions
              </Link>
            </div>
            <div className="aspect-square bg-neutral-100 relative">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                alt="Join Our Team"
                fill
                className="object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup />

      {/* Footer - Component 18 */}
      <SiteFooter />
    </main>
  )
}
