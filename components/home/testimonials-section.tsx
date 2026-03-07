import { Quote } from "lucide-react"

export default function TestimonialsSection() {
    return (
        <section className="py-20 px-4 md:px-8 container mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-12 text-center">CLIENT TESTIMONIALS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 border border-black">
                    <div className="mb-6 text-red-600">
                        <Quote size={32} />
                    </div>
                    <p className="text-xl mb-6">
                        "Working with the Swiss Design Studio was a revelation. Their methodical process and commitment to clarity
                        transformed our brand. The results speak for themselves—our communications are now more effective and our
                        brand more distinctive."
                    </p>
                    <div className="flex items-center">
                        <div className="w-12 h-12 bg-black mr-4"></div>
                        <div>
                            <h4 className="font-bold">Sarah Johnson</h4>
                            <p className="text-sm text-neutral-600">Marketing Director, Zurich Museum</p>
                        </div>
                    </div>
                </div>

                <div className="p-8 border border-black">
                    <div className="mb-6 text-red-600">
                        <Quote size={32} />
                    </div>
                    <p className="text-xl mb-6">
                        "The team's systematic approach to design was exactly what we needed. They didn't just create beautiful
                        visuals—they developed a comprehensive system that we could implement across all touchpoints. The result
                        is a cohesive, impactful brand presence."
                    </p>
                    <div className="flex items-center">
                        <div className="w-12 h-12 bg-red-600 mr-4"></div>
                        <div>
                            <h4 className="font-bold">Marcus Chen</h4>
                            <p className="text-sm text-neutral-600">CEO, Circular Type Foundry</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
