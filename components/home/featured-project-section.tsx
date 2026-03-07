import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function FeaturedProjectSection() {
    return (
        <section className="py-20 px-4 md:px-8 container mx-auto border-b border-black">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <span className="text-sm uppercase tracking-widest text-neutral-500 mb-2 block">Featured Project</span>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">ZURICH MUSEUM OF DESIGN</h2>
                    <p className="mb-6">
                        A comprehensive rebrand for the Zurich Museum of Design, featuring a new visual identity system, signage,
                        and digital presence. The project embraces Swiss Design principles while introducing contemporary
                        elements.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div>
                            <h3 className="text-sm uppercase tracking-widest mb-2">Services</h3>
                            <ul className="space-y-1 text-sm">
                                <li>Brand Identity</li>
                                <li>Environmental Design</li>
                                <li>Digital Experience</li>
                                <li>Print Collateral</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm uppercase tracking-widest mb-2">Year</h3>
                            <p className="text-sm">2024</p>
                        </div>
                    </div>
                    <Link
                        href="/projects/zurich-museum"
                        className="inline-flex items-center text-sm uppercase tracking-widest hover:text-red-600 transition-colors"
                    >
                        View Project <ArrowRight size={16} className="ml-2" />
                    </Link>
                </div>
                <div className="aspect-[4/3] bg-neutral-100 relative">
                    <Image
                        src="https://images.unsplash.com/photo-1524234599372-a5bd0194758d?q=80&w=2548&auto=format&fit=crop"
                        alt="Zurich Museum of Design"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    )
}
