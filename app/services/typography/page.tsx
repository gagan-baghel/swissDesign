import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"
import MainNav from "../../components/main-nav"
import SiteFooter from "../../components/site-footer"
import NewsletterSignup from "../../components/newsletter-signup"

export default function TypographyPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Navigation */}
      <MainNav currentPath="/services" />

      {/* Page Header */}
      <section className="py-20 px-4 md:px-8 container mx-auto border-b border-black">
        <div className="mb-8">
          <Link
            href="/services"
            className="inline-flex items-center text-sm uppercase tracking-widest hover:text-red-600 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" /> Back to Services
          </Link>
        </div>
        <h1 className="text-7xl md:text-8xl font-bold tracking-tighter leading-none mb-6">TYPOGRAPHY</h1>
        <p className="text-xl max-w-2xl">
          We create typography systems that communicate with precision and clarity, from custom typeface selection to
          comprehensive typographic guidelines for brands and publications.
        </p>
      </section>

      {/* Service Overview */}
      <section className="py-16 px-4 md:px-8 container mx-auto border-b border-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-neutral-100 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-8xl font-bold">Aa</div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold tracking-tighter mb-6">OUR APPROACH</h2>
            <p className="text-xl mb-6">
              Our approach to typography is rooted in Swiss Design principles of clarity, hierarchy, and precision. We
              believe that typography is not just about selecting beautiful typefaces, but about creating systems that
              communicate effectively and consistently.
            </p>
            <p className="mb-6">
              We begin with a deep understanding of your brand, audience, and communication goals, then develop
              typographic systems that enhance readability, establish hierarchy, and create visual harmony across all
              touchpoints.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Systematic typeface selection</span>
              </div>
              <div className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Clear typographic hierarchy</span>
              </div>
              <div className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Comprehensive style guidelines</span>
              </div>
              <div className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Cross-platform consistency</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Components */}
      <section className="py-16 px-4 md:px-8 container mx-auto">
        <h2 className="text-4xl font-bold tracking-tighter mb-12 text-center">WHAT WE OFFER</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="border border-black p-8 hover:bg-neutral-50 transition-colors">
            <h3 className="text-2xl font-bold mb-4">TYPEFACE SELECTION</h3>
            <p className="mb-6">
              We help you select typefaces that align with your brand identity and communication needs, considering
              factors like readability, personality, and technical requirements.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Brand typeface selection</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Font pairing strategies</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Custom font licensing</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Web font optimization</span>
              </li>
            </ul>
          </div>

          <div className="border border-black p-8 hover:bg-neutral-50 transition-colors">
            <h3 className="text-2xl font-bold mb-4">TYPOGRAPHIC SYSTEMS</h3>
            <p className="mb-6">
              We develop comprehensive typographic systems that establish clear hierarchies and ensure consistency
              across all brand communications, from print to digital.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Type scale development</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Hierarchy guidelines</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Spacing and rhythm</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Responsive typography</span>
              </li>
            </ul>
          </div>

          <div className="border border-black p-8 hover:bg-neutral-50 transition-colors">
            <h3 className="text-2xl font-bold mb-4">EDITORIAL TYPOGRAPHY</h3>
            <p className="mb-6">
              We design typography for publications, books, and long-form content that prioritizes readability and
              creates an engaging reading experience.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Book typography</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Magazine layout systems</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Article templates</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Pull quotes and captions</span>
              </li>
            </ul>
          </div>

          <div className="border border-black p-8 hover:bg-neutral-50 transition-colors">
            <h3 className="text-2xl font-bold mb-4">CUSTOM TYPE DESIGN</h3>
            <p className="mb-6">
              We create custom typefaces and type modifications tailored to your specific needs, ensuring your brand has
              a unique typographic voice.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Custom typeface design</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Font modifications</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Logotype design</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Icon font creation</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold tracking-tighter mb-12 text-center">OUR PROCESS</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative pb-12 md:pb-0">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-600 flex items-center justify-center text-white font-bold text-xl mr-4">
                  01
                </div>
                <h3 className="text-xl font-bold">RESEARCH</h3>
              </div>
              <p className="mb-6">
                We research your brand, audience, and communication goals to understand typographic requirements and
                opportunities.
              </p>
              <div className="hidden md:block absolute top-0 right-0 h-full w-px bg-white/20"></div>
            </div>

            {/* Step 2 */}
            <div className="relative pb-12 md:pb-0">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-600 flex items-center justify-center text-white font-bold text-xl mr-4">
                  02
                </div>
                <h3 className="text-xl font-bold">EXPLORATION</h3>
              </div>
              <p className="mb-6">
                We explore typeface options and develop initial typographic systems, considering readability, hierarchy,
                and aesthetics.
              </p>
              <div className="hidden md:block absolute top-0 right-0 h-full w-px bg-white/20"></div>
            </div>

            {/* Step 3 */}
            <div className="relative pb-12 md:pb-0">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-600 flex items-center justify-center text-white font-bold text-xl mr-4">
                  03
                </div>
                <h3 className="text-xl font-bold">REFINEMENT</h3>
              </div>
              <p className="mb-6">
                We refine the selected approach, testing typography across different contexts and optimizing for various
                applications.
              </p>
              <div className="hidden md:block absolute top-0 right-0 h-full w-px bg-white/20"></div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-600 flex items-center justify-center text-white font-bold text-xl mr-4">
                  04
                </div>
                <h3 className="text-xl font-bold">GUIDELINES</h3>
              </div>
              <p className="mb-6">
                We create comprehensive typographic guidelines that ensure consistent application across all brand
                touchpoints.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-4 md:px-8 container mx-auto">
        <h2 className="text-4xl font-bold tracking-tighter mb-12 text-center">CASE STUDIES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="border border-black">
            <div className="aspect-[16/9] bg-neutral-100 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl font-bold">Hv</div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">HELVETICA NOW IMPLEMENTATION</h3>
              <p className="mb-6">
                A comprehensive typographic system for a global brand using Helvetica Now across print and digital
                touchpoints.
              </p>
              <Link
                href="/projects/helvetica-now"
                className="inline-flex items-center text-sm uppercase tracking-widest hover:text-red-600 transition-colors"
              >
                View Case Study <ArrowLeft size={16} className="ml-2 rotate-180" />
              </Link>
            </div>
          </div>

          <div className="border border-black">
            <div className="aspect-[16/9] bg-neutral-100 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl font-bold">Ag</div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">CUSTOM TYPEFACE FOR MUSEUM</h3>
              <p className="mb-6">
                Development of a custom typeface and comprehensive typographic system for a contemporary art museum.
              </p>
              <Link
                href="/projects/museum-typeface"
                className="inline-flex items-center text-sm uppercase tracking-widest hover:text-red-600 transition-colors"
              >
                View Case Study <ArrowLeft size={16} className="ml-2 rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-8 bg-red-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-8">START YOUR PROJECT</h2>
          <p className="text-xl max-w-2xl mx-auto mb-12">
            Ready to create typography systems that communicate with clarity and precision? Let's work together to
            develop your typographic identity.
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
