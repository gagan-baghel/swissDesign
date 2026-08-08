import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function IntroductionSection() {
    return (
        <section className="py-20 px-4 md:px-8 bg-neutral-100">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="aspect-[4/3] bg-white relative">
                        <Image
                        src="/images/about-studio.png"
                            alt="Swiss Architecture — studio exterior"
                            fill
                            priority
                            placeholder="blur"
                            className="object-cover grayscale"
                        />
                    </div>
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">ABOUT OUR STUDIO</h2>
                        <p className="text-xl mb-6">
                            Founded in 2010, Helvetica is a design studio dedicated to the principles of Swiss Design. We believe in
                            clarity, precision, and purposeful communication through design.
                        </p>
                        <p className="mb-6">
                            Our team of designers, strategists, and thinkers work together to create visual solutions that are both
                            beautiful and functional, solving real problems for our clients.
                        </p>
                        <Link
                            href="/team"
                            className="inline-flex items-center text-sm uppercase tracking-widest hover:text-red-600 transition-colors"
                        >
                            Meet Our Team <ArrowRight size={16} className="ml-2" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
