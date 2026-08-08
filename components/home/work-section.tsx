import Link from "next/link"
import Image from "next/image"

export default function WorkSection() {
    return (
        <section id="work" className="py-20 px-4 md:px-8 bg-black text-white">
            <div className="container mx-auto">
                <h2 className="text-6xl font-bold tracking-tighter mb-12">WORK</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Project 1 */}
                    <div className="group">
                        <div className="aspect-square bg-white mb-4 overflow-hidden relative">
                            <Image
                                src="/images/project-typography.png"
                                alt="Typography Project — cover"
                                fill
                                priority
                                placeholder="blur"
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/80 transition-colors duration-300 flex items-center justify-center">
                                <span className="text-white text-8xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">01</span>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Typography Project</h3>
                        <p className="text-neutral-400">Exploring grid systems and typographic hierarchy</p>
                    </div>

                    {/* Project 2 */}
                    <div className="group">
                        <div className="aspect-square bg-white mb-4 overflow-hidden relative">
                            <Image
                                src="/images/project-poster.png"
                                alt="Poster Design — cover"
                                fill
                                priority
                                placeholder="blur"
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/80 transition-colors duration-300 flex items-center justify-center">
                                <span className="text-white text-8xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">02</span>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Poster Design</h3>
                        <p className="text-neutral-400">Minimalist approach to visual communication</p>
                    </div>

                    {/* Project 3 */}
                    <div className="group">
                        <div className="aspect-square bg-white mb-4 overflow-hidden relative">
                            <Image
                                src="/images/featured-project.png"
                                alt="Brand Identity — cover"
                                fill
                                priority
                                placeholder="blur"
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/80 transition-colors duration-300 flex items-center justify-center">
                                <span className="text-white text-8xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">03</span>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Brand Identity</h3>
                        <p className="text-neutral-400">Clean, systematic visual language for modern brands</p>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <Link
                        href="/projects"
                        className="inline-block px-8 py-4 border-2 border-white text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
                    >
                        View All Projects
                    </Link>
                </div>
            </div>
        </section>
    )
}
