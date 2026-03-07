import Image from "next/image"

export default function AboutSection() {
    return (
        <section id="about" className="py-20 px-4 md:px-8">
            <div className="container mx-auto">
                <div className="grid grid-cols-12 gap-8">
                    <div className="col-span-12 md:col-span-5">
                        <h2 className="text-6xl font-bold tracking-tighter mb-8">ABOUT</h2>
                        <div className="aspect-[4/5] bg-neutral-100 relative mb-8 md:mb-0">
                            <Image
                                src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=2067&auto=format&fit=crop"
                                alt="About Swiss Design"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-7 md:pt-24">
                        <p className="text-xl mb-6">
                            Swiss Design, also known as International Typographic Style, emerged in Switzerland in the 1950s. It
                            emphasizes cleanliness, readability, and objectivity.
                        </p>
                        <p className="mb-6">
                            The style is characterized by the use of sans-serif typography (particularly Helvetica), grid systems,
                            asymmetrical layouts, and photography instead of illustrations. Swiss Design pioneers believed that
                            design should be clear, objective, and functional.
                        </p>
                        <p className="mb-6">
                            Key figures in the movement include Josef Müller-Brockmann, Armin Hofmann, Emil Ruder, and Max Bill.
                            Their work continues to influence graphic design, web design, and visual communication today.
                        </p>
                        <div className="grid grid-cols-2 gap-4 mt-12">
                            <div>
                                <h3 className="text-sm uppercase tracking-widest mb-2">Principles</h3>
                                <ul className="space-y-2">
                                    <li>Minimalism</li>
                                    <li>Grid-based layouts</li>
                                    <li>Sans-serif typography</li>
                                    <li>Objective photography</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-sm uppercase tracking-widest mb-2">Influences</h3>
                                <ul className="space-y-2">
                                    <li>Bauhaus</li>
                                    <li>De Stijl</li>
                                    <li>Constructivism</li>
                                    <li>New Typography</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
