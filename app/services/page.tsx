import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"
import MainNav from "../components/main-nav"
import SiteFooter from "../components/site-footer"
import NewsletterSignup from "../components/newsletter-signup"

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Navigation */}
      <MainNav currentPath="/services" />

      {/* Page Header */}
      <section className="py-20 px-4 md:px-8 container mx-auto border-b border-black">
        <h1 className="text-7xl md:text-8xl font-bold tracking-tighter leading-none mb-6">SERVICES</h1>
        <p className="text-xl max-w-2xl">
          We apply Swiss Design principles to create clear, functional, and impactful solutions for modern brands and
          organizations.
        </p>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 md:px-8 container mx-auto border-b border-black">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-4xl font-bold tracking-tighter mb-6">OUR APPROACH</h2>
          </div>
          <div className="md:col-span-2">
            <p className="text-xl mb-8">
              We believe in the power of simplicity, clarity, and precision. Our design process is methodical and
              purposeful, focusing on creating solutions that communicate effectively and stand the test of time.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Research & Strategy</h3>
                <p>
                  We begin with thorough research to understand your audience, market, and objectives. This forms the
                  foundation for a strategic approach that guides all design decisions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Design & Development</h3>
                <p>
                  Our design process embraces Swiss principles of grid systems, typography, and objective imagery to
                  create clear, functional solutions that communicate with precision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 px-4 md:px-8 container mx-auto">
        <h2 className="text-4xl font-bold tracking-tighter mb-12 text-center">WHAT WE OFFER</h2>

        {/* Brand Identity */}
        <div id="brand-identity" className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
          <div className="order-2 md:order-1">
            <span className="text-sm uppercase tracking-widest text-neutral-500 mb-2 block">01</span>
            <h3 className="text-3xl font-bold tracking-tighter mb-6">BRAND IDENTITY</h3>
            <p className="mb-6">
              We create comprehensive brand identity systems that communicate your values with clarity and purpose. From
              logo design to visual language, we build cohesive identities that stand out.
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Logo Design & Visual Identity</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Brand Guidelines & Systems</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Brand Strategy & Positioning</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Brand Applications & Collateral</span>
              </li>
            </ul>
            <Link
              href="/services/brand-identity"
              className="inline-flex items-center text-sm uppercase tracking-widest hover:text-red-600 transition-colors"
            >
              Learn More <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
          <div className="order-1 md:order-2 aspect-square bg-neutral-100 relative grayscale hover:grayscale-0 transition-all duration-500">
            <Image
              src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2068&auto=format&fit=crop"
              alt="Brand Identity"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Print Design */}
        <div id="print-design" className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
          <div className="aspect-square bg-neutral-100 relative grayscale hover:grayscale-0 transition-all duration-500">
            <Image
              src="/images/project-poster.png"
              alt="Print Design"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <span className="text-sm uppercase tracking-widest text-neutral-500 mb-2 block">02</span>
            <h3 className="text-3xl font-bold tracking-tighter mb-6">PRINT DESIGN</h3>
            <p className="mb-6">
              We bring Swiss precision to print materials, creating publications, collateral, and environmental graphics
              that communicate with clarity and impact.
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Editorial & Publication Design</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Poster & Print Collateral</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Packaging Design</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Environmental Graphics</span>
              </li>
            </ul>
            <Link
              href="/services/print-design"
              className="inline-flex items-center text-sm uppercase tracking-widest hover:text-red-600 transition-colors"
            >
              Learn More <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>

        {/* Digital Design */}
        <div id="digital-design" className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
          <div className="order-2 md:order-1">
            <span className="text-sm uppercase tracking-widest text-neutral-500 mb-2 block">03</span>
            <h3 className="text-3xl font-bold tracking-tighter mb-6">DIGITAL DESIGN</h3>
            <p className="mb-6">
              We apply Swiss Design principles to digital experiences, creating websites, applications, and interfaces
              that are both beautiful and functional.
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Website Design & Development</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>User Interface (UI) Design</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>User Experience (UX) Design</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Digital Product Design</span>
              </li>
            </ul>
            <Link
              href="/services/digital-design"
              className="inline-flex items-center text-sm uppercase tracking-widest hover:text-red-600 transition-colors"
            >
              Learn More <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
          <div className="order-1 md:order-2 aspect-square bg-neutral-100 relative grayscale hover:grayscale-0 transition-all duration-500">
            <Image
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop"
              alt="Digital Design"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Typography */}
        <div id="typography" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-square bg-neutral-100 relative grayscale hover:grayscale-0 transition-all duration-500">
            <Image
              src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop"
              alt="Typography"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <span className="text-sm uppercase tracking-widest text-neutral-500 mb-2 block">04</span>
            <h3 className="text-3xl font-bold tracking-tighter mb-6">TYPOGRAPHY</h3>
            <p className="mb-6">
              Typography is at the heart of Swiss Design. We create custom typefaces, typographic systems, and
              typographic-focused designs that communicate with clarity and impact.
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Custom Typeface Design</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Typographic Systems</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Typographic Posters & Publications</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Typographic Hierarchy & Grid Systems</span>
              </li>
            </ul>
            <Link
              href="/services/typography"
              className="inline-flex items-center text-sm uppercase tracking-widest hover:text-red-600 transition-colors"
            >
              Learn More <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold tracking-tighter mb-12 text-center">OUR PROCESS</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative pb-12 md:pb-0">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-600 flex items-center justify-center text-white font-bold text-xl mr-4">
                  01
                </div>
                <h3 className="text-xl font-bold">DISCOVER</h3>
              </div>
              <p className="mb-6">
                We begin by understanding your brand, audience, and objectives through research, interviews, and
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
                <h3 className="text-xl font-bold">DEFINE</h3>
              </div>
              <p className="mb-6">
                We define the strategy, scope, and requirements for your project, establishing clear goals and metrics
                for success.
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
                We create concepts and designs that align with your brand and objectives, refining through feedback and
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
                <h3 className="text-xl font-bold">DELIVER</h3>
              </div>
              <p className="mb-6">
                We finalize and deliver the project, providing all necessary assets, guidelines, and support for
                implementation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 md:px-8 container mx-auto">
        <h2 className="text-4xl font-bold tracking-tighter mb-12 text-center">PRICING</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Package */}
          <div className="border border-black p-8 hover:bg-neutral-50 transition-colors">
            <h3 className="text-2xl font-bold mb-4">BASIC</h3>
            <div className="text-4xl font-bold mb-6">$2,500</div>
            <p className="mb-8 text-neutral-600">
              Ideal for startups and small businesses looking to establish a professional brand presence.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Logo Design</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Basic Brand Guidelines</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Business Card Design</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Social Media Templates</span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="inline-block w-full py-3 bg-black text-white text-center text-sm uppercase tracking-widest hover:bg-red-600 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Standard Package */}
          <div className="border-2 border-black p-8 bg-neutral-50">
            <div className="inline-block bg-red-600 text-white text-xs uppercase tracking-widest px-2 py-1 mb-4">
              Popular
            </div>
            <h3 className="text-2xl font-bold mb-4">STANDARD</h3>
            <div className="text-4xl font-bold mb-6">$5,000</div>
            <p className="mb-8 text-neutral-600">
              Comprehensive branding solution for growing businesses looking to establish a strong market presence.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Complete Brand Identity</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Comprehensive Brand Guidelines</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Stationery Design</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Marketing Collateral</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Basic Website Design</span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="inline-block w-full py-3 bg-red-600 text-white text-center text-sm uppercase tracking-widest hover:bg-black transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Premium Package */}
          <div className="border border-black p-8 hover:bg-neutral-50 transition-colors">
            <h3 className="text-2xl font-bold mb-4">PREMIUM</h3>
            <div className="text-4xl font-bold mb-6">$10,000+</div>
            <p className="mb-8 text-neutral-600">
              Enterprise-level solution for established businesses seeking a comprehensive brand transformation.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Strategic Brand Development</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Complete Visual Identity System</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Custom Typography</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Comprehensive Website</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Marketing Strategy</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Ongoing Design Support</span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="inline-block w-full py-3 bg-black text-white text-center text-sm uppercase tracking-widest hover:bg-red-600 transition-colors"
            >
              Get Started
            </Link>
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
