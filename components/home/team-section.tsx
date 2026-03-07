import Link from "next/link"
import Image from "next/image"

export default function TeamSection() {
    return (
        <section className="py-20 px-4 md:px-8 bg-black text-white">
            <div className="container mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-12 text-center">MEET OUR TEAM</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div>
                        <div className="aspect-[3/4] bg-neutral-800 mb-6 relative grayscale hover:grayscale-0 transition-all duration-500">
                            <Image
                                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop"
                                alt="Emma Müller"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h3 className="text-2xl font-bold mb-1">EMMA MÜLLER</h3>
                        <p className="text-neutral-400 mb-4">Founder & Creative Director</p>
                    </div>

                    <div>
                        <div className="aspect-[3/4] bg-neutral-800 mb-6 relative grayscale hover:grayscale-0 transition-all duration-500">
                            <Image
                                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop"
                                alt="Thomas Weber"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h3 className="text-2xl font-bold mb-1">THOMAS WEBER</h3>
                        <p className="text-neutral-400 mb-4">Design Director</p>
                    </div>

                    <div>
                        <div className="aspect-[3/4] bg-neutral-800 mb-6 relative grayscale hover:grayscale-0 transition-all duration-500">
                            <Image
                                src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop"
                                alt="Sophia Chen"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h3 className="text-2xl font-bold mb-1">SOPHIA CHEN</h3>
                        <p className="text-neutral-400 mb-4">Strategy Director</p>
                    </div>
                </div>

                <div className="text-center">
                    <Link
                        href="/team"
                        className="inline-block px-8 py-4 border-2 border-white text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
                    >
                        Meet the Full Team
                    </Link>
                </div>
            </div>
        </section>
    )
}
