import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import blog1 from "/public/images/project-typography.png"
import blog2 from "/public/images/featured-project.png"
import blog3 from "/public/images/project-poster.png"

export default function BlogSection() {
    return (
        <section className="py-20 px-4 md:px-8 bg-neutral-100">
            <div className="container mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-12 text-center">LATEST FROM OUR BLOG</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white border border-black">
                        <div className="aspect-[16/9] bg-neutral-200 relative">
                            <Image
                                src={blog1}
                                alt="Grid System — article image"
                                fill
                                priority
                                placeholder="blur"
                                className="object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">THE GRID SYSTEM: FOUNDATION OF SWISS DESIGN</h3>
                            <p className="text-neutral-600 mb-4">
                                An exploration of the grid system as a fundamental element of Swiss Design, examining its history,
                                principles, and application in modern design practice.
                            </p>
                            <Link
                                href="/blog/grid-system-foundation"
                                className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors inline-flex items-center"
                            >
                                Read Article <ArrowRight size={16} className="ml-2" />
                            </Link>
                        </div>
                    </div>

                    <div className="bg-white border border-black">
                        <div className="aspect-[16/9] bg-neutral-200 relative">
                            <Image
                                src={blog2}
                                alt="Helvetica Typeface — article image"
                                fill
                                priority
                                placeholder="blur"
                                className="object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">HELVETICA: THE ICONIC TYPEFACE</h3>
                            <p className="text-neutral-600 mb-4">
                                A deep dive into the history and influence of Helvetica, the quintessential Swiss typeface that has
                                defined modern typography and visual communication.
                            </p>
                            <Link
                                href="/blog/helvetica-iconic-typeface"
                                className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors inline-flex items-center"
                            >
                                Read Article <ArrowRight size={16} className="ml-2" />
                            </Link>
                        </div>
                    </div>

                    <div className="bg-white border border-black">
                        <div className="aspect-[16/9] bg-neutral-200 relative">
                            <Image
                                src={blog3}
                                alt="Zurich Museum Rebrand — article image"
                                fill
                                priority
                                placeholder="blur"
                                className="object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">CASE STUDY: ZURICH MUSEUM REBRAND</h3>
                            <p className="text-neutral-600 mb-4">
                                A detailed look at our recent rebrand for the Zurich Museum of Design, exploring our process,
                                challenges, and solutions in applying Swiss Design principles.
                            </p>
                            <Link
                                href="/blog/zurich-museum-case-study"
                                className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors inline-flex items-center"
                            >
                                Read Article <ArrowRight size={16} className="ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <Link
                        href="/blog"
                        className="inline-block px-8 py-4 bg-black text-white text-sm uppercase tracking-widest hover:bg-red-600 transition-colors"
                    >
                        View All Articles
                    </Link>
                </div>
            </div>
        </section>
    )
}
