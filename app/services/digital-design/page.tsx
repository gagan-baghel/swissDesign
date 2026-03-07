import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"
import MainNav from "../../components/main-nav"
import SiteFooter from "../../components/site-footer"
import NewsletterSignup from "../../components/newsletter-signup"

export default function DigitalDesignPage() {
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
        <h1 className="text-7xl md:text-8xl font-bold tracking-tighter leading-none mb-6">DIGITAL DESIGN</h1>
        <p className="text-xl max-w-2xl">
          We apply Swiss Design principles to digital experiences, creating websites, applications, and interfaces that
          are both beautiful and functional.
        </p>
      </section>

      {/* Service Overview */}
      <section className="py-16 px-4 md:px-8 container mx-auto border-b border-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-neutral-100 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-2 grid-rows-2 gap-4 w-2/3 h-2/3">
                <div className="bg-black"></div>
                <div className="bg-white border border-black"></div>
                <div className="bg-white border border-black"></div>
                <div className="bg-black"></div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold tracking-tighter mb-6">OUR APPROACH</h2>
            <p className="text-xl mb-6">
              Our approach to digital design is rooted in Swiss Design principles of clarity, precision, and purpose. We
              believe that digital experiences should be intuitive, accessible, and visually compelling.
            </p>
            <p className="mb-6">
              We begin with a deep understanding of your users and objectives, then develop digital solutions that
              combine thoughtful information architecture, interaction design, and visual design to create experiences
              that are both beautiful and functional.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>User-centered design approach</span>
              </div>
              <div className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Grid-based layouts and systems</span>
              </div>
              <div className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Typographic hierarchy and clarity</span>
              </div>
              <div className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Responsive and accessible design</span>
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
            <h3 className="text-2xl font-bold mb-4">WEBSITE DESIGN</h3>
            <p className="mb-6">
              We create websites that combine thoughtful information architecture, interaction design, and visual design
              to create digital experiences that are both beautiful and functional.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Corporate websites</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>E-commerce platforms</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Portfolio websites</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Cultural and institutional websites</span>
              </li>
            </ul>
          </div>

          <div className="border border-black p-8 hover:bg-neutral-50 transition-colors">
            <h3 className="text-2xl font-bold mb-4">USER INTERFACE DESIGN</h3>
            <p className="mb-6">
              We design user interfaces that are intuitive, accessible, and visually compelling, using typography,
              color, and layout to create digital experiences that are both beautiful and functional.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Web applications</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Mobile applications</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Dashboard and data visualization</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Design systems</span>
              </li>
            </ul>
          </div>

          <div className="border border-black p-8 hover:bg-neutral-50 transition-colors">
            <h3 className="text-2xl font-bold mb-4">USER EXPERIENCE DESIGN</h3>
            <p className="mb-6">
              We create user experiences that are intuitive, accessible, and engaging, using research, strategy, and
              design to create digital products that meet user needs and business objectives.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>User research and testing</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Information architecture</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Wireframing and prototyping</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Usability testing</span>
              </li>
            </ul>
          </div>

          <div className="border border-black p-8 hover:bg-neutral-50 transition-colors">
            <h3 className="text-2xl font-bold mb-4">DIGITAL PRODUCT DESIGN</h3>
            <p className="mb-6">
              We design digital products that solve problems and meet user needs, using research, strategy, and design
              to create products that are both useful and usable.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Product strategy</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>User flows and journeys</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Interaction design</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Design systems and documentation</span>
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
                <h3 className="text-xl font-bold">DISCOVER</h3>
              </div>
              <p className="mb-6">
                We begin by understanding your users, objectives, and requirements through research, interviews, and
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
                We define the strategy, information architecture, and user flows that will guide the design process.
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
                We create wireframes, prototypes, and visual designs that bring the digital experience to life.
              </p>
              <div className="hidden md:block absolute top-0 right-0 h-full w-px bg-white/20"></div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-600 flex items-center justify-center text-white font-bold text-xl mr-4">
                  04
                </div>
                <h3 className="text-xl font-bold">DEVELOP</h3>
              </div>
              <p className="mb-6">
                We work with developers to implement the design, ensuring that the final product meets the design vision
                and user needs.
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
                A comprehensive digital experience for the Zurich Museum of Design, featuring a responsive website and
                interactive exhibition guides.
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
                <div className="w-1/2 h-1/2 rounded-full border-2 border-black"></div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">CIRCULAR TYPE FOUNDRY</h3>
              <p className="mb-6">
                Digital experience for a contemporary type foundry, featuring a responsive website, type tester, and
                e-commerce platform.
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
            Ready to create a digital experience that combines clarity, precision, and purpose? Let's work together to
            bring your vision to life.
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
