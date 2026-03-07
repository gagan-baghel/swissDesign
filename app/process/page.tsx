import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Check } from "lucide-react"
import MainNav from "../components/main-nav"
import SiteFooter from "../components/site-footer"
import NewsletterSignup from "../components/newsletter-signup"

export const metadata: Metadata = {
  title: "Our Process",
  description: "Our methodical, purposeful design process rooted in Swiss Design principles. We believe in a systematic approach.",
}

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Navigation */}
      <MainNav currentPath="/process" />

      {/* Page Header */}
      <section className="py-20 px-4 md:px-8 container mx-auto border-b border-black">
        <h1 className="text-7xl md:text-8xl font-bold tracking-tighter leading-none mb-6">PROCESS</h1>
        <p className="text-xl max-w-2xl">
          Our design process is methodical, purposeful, and rooted in Swiss Design principles. We believe in a
          systematic approach that leads to clear, functional, and impactful solutions.
        </p>
      </section>

      {/* Process Overview */}
      <section className="py-16 px-4 md:px-8 container mx-auto border-b border-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold tracking-tighter mb-6">OUR APPROACH</h2>
            <p className="text-xl mb-6">
              We approach each project with a commitment to clarity, precision, and purpose. Our process is designed to
              ensure that every design decision serves the project's objectives and communicates effectively.
            </p>
            <p className="mb-6">
              Drawing from the Swiss Design tradition, we emphasize research, strategy, and systematic thinking. We
              believe that good design is not just about aesthetics, but about solving problems and communicating with
              clarity and impact.
            </p>
          </div>
          <div className="aspect-[4/3] bg-neutral-100 relative">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
              alt="Our Process"
              fill
              className="object-cover grayscale"
            />
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 px-4 md:px-8 container mx-auto">
        <h2 className="text-4xl font-bold tracking-tighter mb-16 text-center">OUR PROCESS</h2>

        {/* Step 1: Discover */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-center">
          <div className="order-2 md:order-1">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-black flex items-center justify-center text-white font-bold text-2xl mr-4">
                01
              </div>
              <h3 className="text-3xl font-bold tracking-tighter">DISCOVER</h3>
            </div>
            <p className="text-xl mb-6">
              We begin by understanding your brand, audience, and objectives. This discovery phase lays the foundation
              for a strategic approach to design.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Stakeholder Interviews</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Market & Competitor Analysis</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Audience Research</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Brand Audit</span>
              </li>
            </ul>
            <div className="flex items-center text-sm uppercase tracking-widest">
              <span className="mr-2">Deliverables:</span>
              <span className="text-neutral-600">Research Report, Insights Summary</span>
            </div>
          </div>
          <div className="order-1 md:order-2 aspect-square bg-neutral-100 relative grayscale hover:grayscale-0 transition-all duration-500">
            <Image
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop"
              alt="Discover Phase"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Step 2: Define */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-center">
          <div className="aspect-square bg-neutral-100 relative grayscale hover:grayscale-0 transition-all duration-500">
            <Image
              src="https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?q=80&w=2070&auto=format&fit=crop"
              alt="Define Phase"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-black flex items-center justify-center text-white font-bold text-2xl mr-4">
                02
              </div>
              <h3 className="text-3xl font-bold tracking-tighter">DEFINE</h3>
            </div>
            <p className="text-xl mb-6">
              We define the strategy, scope, and requirements for your project. This phase establishes clear goals and
              metrics for success.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Brand Strategy Development</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Project Scope Definition</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Success Metrics Establishment</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Creative Brief Development</span>
              </li>
            </ul>
            <div className="flex items-center text-sm uppercase tracking-widest">
              <span className="mr-2">Deliverables:</span>
              <span className="text-neutral-600">Strategy Document, Creative Brief</span>
            </div>
          </div>
        </div>

        {/* Step 3: Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-center">
          <div className="order-2 md:order-1">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-black flex items-center justify-center text-white font-bold text-2xl mr-4">
                03
              </div>
              <h3 className="text-3xl font-bold tracking-tighter">DESIGN</h3>
            </div>
            <p className="text-xl mb-6">
              We create concepts and designs that align with your brand and objectives. This phase involves exploration,
              iteration, and refinement.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Concept Development</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Visual Exploration</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Design Iteration</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Client Feedback & Refinement</span>
              </li>
            </ul>
            <div className="flex items-center text-sm uppercase tracking-widest">
              <span className="mr-2">Deliverables:</span>
              <span className="text-neutral-600">Design Concepts, Mockups, Prototypes</span>
            </div>
          </div>
          <div className="order-1 md:order-2 aspect-square bg-neutral-100 relative grayscale hover:grayscale-0 transition-all duration-500">
            <Image
              src="/images/featured-project.png"
              alt="Design Phase"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Step 4: Deliver */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-center">
          <div className="aspect-square bg-neutral-100 relative grayscale hover:grayscale-0 transition-all duration-500">
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
              alt="Deliver Phase"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-black flex items-center justify-center text-white font-bold text-2xl mr-4">
                04
              </div>
              <h3 className="text-3xl font-bold tracking-tighter">DELIVER</h3>
            </div>
            <p className="text-xl mb-6">
              We finalize and deliver the project, providing all necessary assets, guidelines, and support for
              implementation.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Final Design Production</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Asset Preparation</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Guidelines Development</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Implementation Support</span>
              </li>
            </ul>
            <div className="flex items-center text-sm uppercase tracking-widest">
              <span className="mr-2">Deliverables:</span>
              <span className="text-neutral-600">Final Designs, Assets, Guidelines</span>
            </div>
          </div>
        </div>

        {/* Step 5: Evaluate */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-black flex items-center justify-center text-white font-bold text-2xl mr-4">
                05
              </div>
              <h3 className="text-3xl font-bold tracking-tighter">EVALUATE</h3>
            </div>
            <p className="text-xl mb-6">
              We evaluate the project's success against the established metrics and gather feedback for continuous
              improvement.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Performance Measurement</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>User Feedback Collection</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Success Analysis</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Recommendations for Improvement</span>
              </li>
            </ul>
            <div className="flex items-center text-sm uppercase tracking-widest">
              <span className="mr-2">Deliverables:</span>
              <span className="text-neutral-600">Evaluation Report, Recommendations</span>
            </div>
          </div>
          <div className="order-1 md:order-2 aspect-square bg-neutral-100 relative grayscale hover:grayscale-0 transition-all duration-500">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
              alt="Evaluate Phase"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold tracking-tighter mb-12 text-center">OUR PRINCIPLES</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Principle 1 */}
            <div className="p-8 border border-white hover:bg-white/5 transition-colors">
              <div className="w-12 h-12 bg-red-600 flex items-center justify-center text-white font-bold text-xl mb-6">
                01
              </div>
              <h3 className="text-2xl font-bold mb-4">CLARITY</h3>
              <p>
                We believe in clear, direct communication. Our designs eliminate unnecessary elements to focus on what
                matters most, ensuring your message is understood.
              </p>
            </div>

            {/* Principle 2 */}
            <div className="p-8 border border-white hover:bg-white/5 transition-colors">
              <div className="w-12 h-12 bg-red-600 flex items-center justify-center text-white font-bold text-xl mb-6">
                02
              </div>
              <h3 className="text-2xl font-bold mb-4">PRECISION</h3>
              <p>
                We approach design with mathematical precision. From typography to grid systems, every element is
                carefully considered and placed with purpose.
              </p>
            </div>

            {/* Principle 3 */}
            <div className="p-8 border border-white hover:bg-white/5 transition-colors">
              <div className="w-12 h-12 bg-red-600 flex items-center justify-center text-white font-bold text-xl mb-6">
                03
              </div>
              <h3 className="text-2xl font-bold mb-4">OBJECTIVITY</h3>
              <p>
                We strive for objectivity in our design approach. We focus on presenting information in a clear,
                unbiased manner that allows the content to speak for itself.
              </p>
            </div>

            {/* Principle 4 */}
            <div className="p-8 border border-white hover:bg-white/5 transition-colors">
              <div className="w-12 h-12 bg-red-600 flex items-center justify-center text-white font-bold text-xl mb-6">
                04
              </div>
              <h3 className="text-2xl font-bold mb-4">FUNCTIONALITY</h3>
              <p>
                We believe that design should serve a purpose. Our solutions are not just beautiful, but functional,
                solving real problems and meeting specific objectives.
              </p>
            </div>

            {/* Principle 5 */}
            <div className="p-8 border border-white hover:bg-white/5 transition-colors">
              <div className="w-12 h-12 bg-red-600 flex items-center justify-center text-white font-bold text-xl mb-6">
                05
              </div>
              <h3 className="text-2xl font-bold mb-4">SYSTEM</h3>
              <p>
                We create systematic design solutions that can be applied consistently across various touchpoints,
                ensuring a cohesive and unified brand experience.
              </p>
            </div>

            {/* Principle 6 */}
            <div className="p-8 border border-white hover:bg-white/5 transition-colors">
              <div className="w-12 h-12 bg-red-600 flex items-center justify-center text-white font-bold text-xl mb-6">
                06
              </div>
              <h3 className="text-2xl font-bold mb-4">TIMELESSNESS</h3>
              <p>
                We aim to create designs that stand the test of time. By focusing on clarity and functionality rather
                than trends, our solutions remain relevant and effective for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 md:px-8 container mx-auto">
        <h2 className="text-4xl font-bold tracking-tighter mb-12 text-center">CLIENT TESTIMONIALS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Testimonial 1 */}
          <div className="p-8 border border-black">
            <p className="text-xl mb-6">
              "Working with the Swiss Design Studio was a revelation. Their methodical process and commitment to clarity
              transformed our brand. The results speak for themselves—our communications are now more effective and our
              brand more distinctive."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-black mr-4"></div>
              <div>
                <h4 className="font-bold">Sarah Johnson</h4>
                <p className="text-sm text-neutral-600">Marketing Director, Zurich Museum</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="p-8 border border-black">
            <p className="text-xl mb-6">
              "The team's systematic approach to design was exactly what we needed. They didn't just create beautiful
              visuals—they developed a comprehensive system that we could implement across all touchpoints. The result
              is a cohesive, impactful brand presence."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-red-600 mr-4"></div>
              <div>
                <h4 className="font-bold">Marcus Chen</h4>
                <p className="text-sm text-neutral-600">CEO, Circular Type Foundry</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-8 bg-red-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-8">START YOUR PROJECT</h2>
          <p className="text-xl max-w-2xl mx-auto mb-12">
            Ready to experience our systematic approach to design? Let's create something exceptional together.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-black text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
          >
            Get in Touch
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
