import Link from "next/link"
import Image from "next/image"
import team1 from "/public/images/project-typography.png"
import team2 from "/public/images/project-poster.png"
import team3 from "/public/images/video-thumbnail.png"

export default function TeamSection() {
    return (
        <section className="py-20 px-4 md:px-8 bg-black text-white">
            <div className="container mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-12 text-center">MEET OUR TEAM</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div>
                        <div className="aspect-[3/4] bg-neutral-800 mb-6 relative grayscale hover:grayscale-0 transition-all duration-500">
                            <Image
                                src={team1}
                                alt="Emma Müller — Creative Director portrait"
                                fill
                                priority
                                placeholder="blur"
                                className="object-cover"
                            />
                        </div>
                        <h3 className="text-2xl font-bold mb-1">EMMA MÜLLER</h3>
                        <p className="text-neutral-400 mb-4">Founder & Creative Director</p>
                    </div>

                    <div>
                        <div className="aspect-[3/4] bg-neutral-800 mb-6 relative grayscale hover:grayscale-0 transition-all duration-500">
                            <Image
                                src={team2}
                                alt="Thomas Weber — Design Director portrait"
                                fill
                                priority
                                placeholder="blur"
                                className="object-cover"
                            />
                        </div>
                        <h3 className="text-2xl font-bold mb-1">THOMAS WEBER</h3>
                        <p className="text-neutral-400 mb-4">Design Director</p>
                    </div>

                    <div>
                        <div className="aspect-[3/4] bg-neutral-800 mb-6 relative grayscale hover:grayscale-0 transition-all duration-500">
                            <Image
                                src={team3}
                                alt="Sophia Chen — Strategy Director portrait"
                                fill
                                priority
                                placeholder="blur"
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
