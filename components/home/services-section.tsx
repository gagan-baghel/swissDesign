import Link from "next/link"
import { ArrowRight, Palette, BookOpen, Grid, Type } from "lucide-react"

export default function ServicesSection() {
    return (
        <section className="py-20 px-4 md:px-8 container mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-12 text-center">OUR SERVICES</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="p-8 border border-black hover:bg-neutral-50 transition-colors">
                    <div className="w-12 h-12 bg-red-600 flex items-center justify-center text-white mb-6">
                        <Palette size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-4">BRAND IDENTITY</h3>
                    <p className="mb-6">
                        We create comprehensive brand identity systems that communicate your values with clarity and purpose.
                    </p>
                    <Link
                        href="/services#brand-identity"
                        className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors inline-flex items-center"
                    >
                        Learn More <ArrowRight size={16} className="ml-2" />
                    </Link>
                </div>

                <div className="p-8 border border-black hover:bg-neutral-50 transition-colors">
                    <div className="w-12 h-12 bg-red-600 flex items-center justify-center text-white mb-6">
                        <BookOpen size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-4">PRINT DESIGN</h3>
                    <p className="mb-6">
                        We bring Swiss precision to print materials, creating publications, collateral, and environmental
                        graphics.
                    </p>
                    <Link
                        href="/services#print-design"
                        className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors inline-flex items-center"
                    >
                        Learn More <ArrowRight size={16} className="ml-2" />
                    </Link>
                </div>

                <div className="p-8 border border-black hover:bg-neutral-50 transition-colors">
                    <div className="w-12 h-12 bg-red-600 flex items-center justify-center text-white mb-6">
                        <Grid size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-4">DIGITAL DESIGN</h3>
                    <p className="mb-6">
                        We apply Swiss Design principles to digital experiences, creating websites and interfaces.
                    </p>
                    <Link
                        href="/services#digital-design"
                        className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors inline-flex items-center"
                    >
                        Learn More <ArrowRight size={16} className="ml-2" />
                    </Link>
                </div>

                <div className="p-8 border border-black hover:bg-neutral-50 transition-colors">
                    <div className="w-12 h-12 bg-red-600 flex items-center justify-center text-white mb-6">
                        <Type size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-4">TYPOGRAPHY</h3>
                    <p className="mb-6">
                        Typography is at the heart of Swiss Design. We create custom typefaces and typographic systems.
                    </p>
                    <Link
                        href="/services#typography"
                        className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors inline-flex items-center"
                    >
                        Learn More <ArrowRight size={16} className="ml-2" />
                    </Link>
                </div>
            </div>

            <div className="mt-12 text-center">
                <Link
                    href="/services"
                    className="inline-block px-8 py-4 bg-black text-white text-sm uppercase tracking-widest hover:bg-red-600 transition-colors"
                >
                    View All Services
                </Link>
            </div>
        </section>
    )
}
