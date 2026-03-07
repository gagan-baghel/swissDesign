import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"
import MainNav from "../../components/main-nav"
import SiteFooter from "../../components/site-footer"
import NewsletterSignup from "../../components/newsletter-signup"

export default function BrandIdentityPage() {
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
        <h1 className="text-7xl md:text-8xl font-bold tracking-tighter leading-none mb-6">BRAND IDENTITY</h1>
        <p className="text-xl max-w-2xl">
          We create comprehensive brand identity systems that communicate your values with clarity and purpose. From
          logo design to visual language, we build cohesive identities that stand out.
        </p>
      </section>

      {/* Service Overview */}
      <section className="py-16 px-4 md:px-8 container mx-auto border-b border-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-neutral-100 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2/3 h-2/3 bg-black"></div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold tracking-tighter mb-6">OUR APPROACH</h2>
            <p className="text-xl mb-6">
              Our approach to brand identity is rooted in Swiss Design principles of clarity, precision, and purpose. We
              believe that a strong brand identity is more than just a logo—it's a comprehensive system that
              communicates your values and differentiates you from competitors.
            </p>
            <p className="mb-6">
              We begin with research and strategy to understand your brand's essence, audience, and objectives. This
              foundation informs the development of visual elements that work together to create a cohesive and
              distinctive identity.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Research-driven strategy</span>
              </div>
              <div className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Systematic design approach</span>
              </div>
              <div className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Comprehensive identity systems</span>
              </div>
              <div className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Consistent application across touchpoints</span>
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
            <h3 className="text-2xl font-bold mb-4">LOGO DESIGN</h3>
            <p className="mb-6">
              We create distinctive, memorable logos that embody your brand's essence. Our logo design process includes
              exploration, refinement, and finalization, resulting in a mark that stands the test of time.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Primary and secondary logo variations</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Responsive logo system</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Icon and symbol development</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Logo usage guidelines</span>
              </li>
            </ul>
          </div>

          <div className="border border-black p-8 hover:bg-neutral-50 transition-colors">
            <h3 className="text-2xl font-bold mb-4">VISUAL IDENTITY SYSTEM</h3>
            <p className="mb-6">
              We develop comprehensive visual identity systems that extend beyond the logo to create a cohesive brand
              experience. This includes typography, color, imagery, and other visual elements that work together to
              communicate your brand.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Typography selection and hierarchy</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Color palette development</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Imagery and photography style</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Pattern and texture development</span>
              </li>
            </ul>
          </div>

          <div className="border border-black p-8 hover:bg-neutral-50 transition-colors">
            <h3 className="text-2xl font-bold mb-4">BRAND GUIDELINES</h3>
            <p className="mb-6">
              We create comprehensive brand guidelines that document your visual identity system and provide clear
              instructions for its application. This ensures consistency across all touchpoints and helps maintain the
              integrity of your brand.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Digital and print guidelines</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Logo usage and clearspace</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Typography and color specifications</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Application examples</span>
              </li>
            </ul>
          </div>

          <div className="border border-black p-8 hover:bg-neutral-50 transition-colors">
            <h3 className="text-2xl font-bold mb-4">BRAND APPLICATIONS</h3>
            <p className="mb-6">
              We apply your brand identity to various touchpoints, creating a cohesive and consistent brand experience.
              This includes stationery, marketing materials, digital assets, and environmental graphics.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Business cards and stationery</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Marketing collateral</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Digital assets and templates</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Environmental graphics</span>
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
                We begin by understanding your brand, audience, and competitors through research, interviews, and
                analysis.
              </p>
              <div className="hidden md:block absolute top-0 right-0 h-full w-px bg-white/20"></div>
            </div>

            {/* Step 2 */}
            <div className="relative pb-12 md:pb-0">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-600 flex items-center justify-center text-white font-bold text-xl mr-4">
                  02
                </div>
                <h3 className="text-xl font-bold">STRATEGY</h3>
              </div>
              <p className="mb-6">
                We develop a brand strategy that defines your positioning, messaging, and visual direction.
              </p>
              <div className="hidden md:block absolute top-0 right-0 h-full w-px bg-white/20"></div>
            </div>

            {/* Step 3 */}
            <div className="relative pb-12 md:pb-0">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-600 flex items-center justify-center text-white font-bold text-xl mr-4">
                  03
                </div>
                <h3 className="text-xl font-bold">DESIGN</h3>
              </div>
              <p className="mb-6">
                We create concepts and designs that align with your brand strategy, refining through feedback and
                iteration.
              </p>
              <div className="hidden md:block absolute top-0 right-0 h-full w-px bg-white/20"></div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-600 flex items-center justify-center text-white font-bold text-xl mr-4">
                  04
                </div>
                <h3 className="text-xl font-bold">IMPLEMENTATION</h3>
              </div>
              <p className="mb-6">
                We finalize and deliver your brand identity system, providing guidelines and support for implementation.
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
                <div className="w-1/2 h-1/2 bg-red-600"></div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">ZURICH MUSEUM OF DESIGN</h3>
              <p className="mb-6">
                A comprehensive rebrand for the Zurich Museum of Design, featuring a new visual identity system,
                signage, and digital presence.
              </p>
              <Link
                href="/projects/zurich-museum"
                className="inline-flex items-center text-sm uppercase tracking-widest hover:text-red-600 transition-colors"
              >
                View Case Study <ArrowLeft size={16} className="ml-2 rotate-180" />
              </Link>
            </div>
          </div>

          <div className="border border-black">
            <div className="aspect-[16/9] bg-neutral-100 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1/2 h-1/2 bg-black"></div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">CIRCULAR TYPE FOUNDRY</h3>
              <p className="mb-6">
                Brand identity and digital experience for a contemporary type foundry specializing in geometric
                sans-serif typefaces.
              </p>
              <Link
                href="/projects/circular-type"
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
            Ready to create a brand identity that communicates with clarity and purpose? Let's work together to bring
            your brand to life.
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
