import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 md:px-8 container mx-auto">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-7 mb-8 md:mb-0">
          <h1 className="text-8xl md:text-9xl font-bold tracking-tighter leading-none mb-6">
            SWISS
            <br />
            DESIGN
          </h1>
          <p className="text-xl max-w-xl">
            Clarity. Precision. Objectivity. The principles of Swiss Design have shaped modern visual communication
            since the 1950s.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="px-8 py-4 bg-black text-white text-sm uppercase tracking-widest hover:bg-red-600 transition-colors"
            >
              View Our Work
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-black text-sm uppercase tracking-widest hover:bg-neutral-100 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
        <div className="col-span-12 md:col-span-5 flex items-center justify-center">
          <div className="relative w-full aspect-square bg-red-600">
            <Image
              src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop"
              alt="Swiss Design Art"
              fill
              className="object-cover"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-black pl-5"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
