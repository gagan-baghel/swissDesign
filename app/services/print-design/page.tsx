import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"
import MainNav from "../../components/main-nav"
import SiteFooter from "../../components/site-footer"
import NewsletterSignup from "../../components/newsletter-signup"

export default function PrintDesignPage() {
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
        <h1 className="text-7xl md:text-8xl font-bold tracking-tighter leading-none mb-6">PRINT DESIGN</h1>
        <p className="text-xl max-w-2xl">
          We bring Swiss precision to print materials, creating publications, collateral, and environmental graphics
          that communicate with clarity and impact.
        </p>
      </section>

      {/* Service Overview */}
      <section className="py-16 px-4 md:px-8 container mx-auto border-b border-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-neutral-100 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2/3 h-2/3 border-2 border-black"></div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold tracking-tighter mb-6">OUR APPROACH</h2>
            <p className="text-xl mb-6">
              Our approach to print design is rooted in Swiss Design principles of clarity, precision, and purpose. We
              believe that print materials should communicate effectively while providing a tactile experience that
              digital media cannot replicate.
            </p>
            <p className="mb-6">
              We begin with a clear understanding of your objectives and audience, then develop print solutions that
              combine thoughtful typography, grid systems, and imagery to create materials that are both beautiful and
              functional.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Precision in typography and layout</span>
              </div>
              <div className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Grid-based design systems</span>
              </div>
              <div className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Attention to material and production</span>
              </div>
              <div className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Sustainable print practices</span>
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
            <h3 className="text-2xl font-bold mb-4">EDITORIAL DESIGN</h3>
            <p className="mb-6">
              We create books, magazines, annual reports, and other publications that combine thoughtful typography,
              layout, and imagery to communicate with clarity and impact.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Books and publications</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Magazines and journals</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Annual reports</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Catalogs and lookbooks</span>
              </li>
            </ul>
          </div>

          <div className="border border-black p-8 hover:bg-neutral-50 transition-colors">
            <h3 className="text-2xl font-bold mb-4">POSTER DESIGN</h3>
            <p className="mb-6">
              We design posters that communicate with clarity and impact, using typography, imagery, and composition to
              create visual statements that capture attention and convey messages effectively.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Exhibition posters</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Event promotion</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Cultural and artistic posters</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Typographic posters</span>
              </li>
            </ul>
          </div>

          <div className="border border-black p-8 hover:bg-neutral-50 transition-colors">
            <h3 className="text-2xl font-bold mb-4">PACKAGING DESIGN</h3>
            <p className="mb-6">
              We create packaging that combines form and function, using typography, color, and structure to create
              packaging that stands out on the shelf and enhances the product experience.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Product packaging</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Retail packaging</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Sustainable packaging solutions</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Packaging systems</span>
              </li>
            </ul>
          </div>

          <div className="border border-black p-8 hover:bg-neutral-50 transition-colors">
            <h3 className="text-2xl font-bold mb-4">ENVIRONMENTAL GRAPHICS</h3>
            <p className="mb-6">
              We design environmental graphics that enhance spaces and guide users, using typography, color, and form to
              create wayfinding systems, signage, and exhibition graphics.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Wayfinding and signage</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Exhibition graphics</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Retail environments</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                <span>Office and workspace graphics</span>
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
                <h3 className="text-xl font-bold">BRIEF</h3>
              </div>
              <p className="mb-6">
                We begin by understanding your objectives, audience, and requirements through a detailed brief and
                discussion.
              </p>
              <div className="hidden md:block absolute top-0 right-0 h-full w-px bg-white/20"></div>
            </div>

            {/* Step 2 */}
            <div className="relative pb-12 md:pb-0">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-600 flex items-center justify-center text-white font-bold text-xl mr-4">
                  02
                </div>
                <h3 className="text-xl font-bold">CONCEPT</h3>
              </div>
              <p className="mb-6">
                We develop concepts that align with your objectives, exploring typography, layout, and imagery options.
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
                We refine the selected concept, developing detailed designs and specifications for production.
              </p>
              <div className="hidden md:block absolute top-0 right-0 h-full w-px bg-white/20"></div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-600 flex items-center justify-center text-white font-bold text-xl mr-4">
                  04
                </div>
                <h3 className="text-xl font-bold">PRODUCTION</h3>
              </div>
              <p className="mb-6">
                We oversee the production process, working with printers and fabricators to ensure quality and accuracy.
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
                <div className="w-1/2 h-1/2 bg-black"></div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">HELVETICA NOW CAMPAIGN</h3>
              <p className="mb-6">
                A promotional campaign for the release of the Helvetica Now typeface, featuring print and digital
                elements.
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
                <div className="grid grid-cols-2 grid-rows-2 gap-4 w-1/2 h-1/2">
                  <div className="bg-black"></div>
                  <div className="bg-white border border-black"></div>
                  <div className="bg-white border border-black"></div>
                  <div className="bg-black"></div>
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">GRID SYSTEMS PUBLICATION</h3>
              <p className="mb-6">
                An editorial design project showcasing the principles and applications of grid systems in graphic
                design.
              </p>
              <Link
                href="/projects/grid-systems"
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
            Ready to create print materials that communicate with clarity and impact? Let's work together to bring your
            ideas to life.
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
