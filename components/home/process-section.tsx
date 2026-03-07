import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ProcessSection() {
    return (
        <section className="py-20 px-4 md:px-8 bg-neutral-100">
            <div className="container mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-12 text-center">OUR PROCESS</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="relative pb-12 md:pb-0">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-red-600 flex items-center justify-center text-white font-bold text-xl mr-4">
                                01
                            </div>
                            <h3 className="text-xl font-bold">DISCOVER</h3>
                        </div>
                        <p className="mb-6">
                            We begin by understanding your brand, audience, and objectives through research, interviews, and
                            analysis.
                        </p>
                        <div className="hidden md:block absolute top-0 right-0 h-full w-px bg-black/20"></div>
                    </div>

                    <div className="relative pb-12 md:pb-0">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-red-600 flex items-center justify-center text-white font-bold text-xl mr-4">
                                02
                            </div>
                            <h3 className="text-xl font-bold">DEFINE</h3>
                        </div>
                        <p className="mb-6">
                            We define the strategy, scope, and requirements for your project, establishing clear goals and metrics
                            for success.
                        </p>
                        <div className="hidden md:block absolute top-0 right-0 h-full w-px bg-black/20"></div>
                    </div>

                    <div className="relative pb-12 md:pb-0">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-red-600 flex items-center justify-center text-white font-bold text-xl mr-4">
                                03
                            </div>
                            <h3 className="text-xl font-bold">DESIGN</h3>
                        </div>
                        <p className="mb-6">
                            We create concepts and designs that align with your brand and objectives, refining through feedback and
                            iteration.
                        </p>
                        <div className="hidden md:block absolute top-0 right-0 h-full w-px bg-black/20"></div>
                    </div>

                    <div className="relative">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-red-600 flex items-center justify-center text-white font-bold text-xl mr-4">
                                04
                            </div>
                            <h3 className="text-xl font-bold">DELIVER</h3>
                        </div>
                        <p className="mb-6">
                            We finalize and deliver the project, providing all necessary assets, guidelines, and support for
                            implementation.
                        </p>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <Link
                        href="/process"
                        className="inline-flex items-center text-sm uppercase tracking-widest hover:text-red-600 transition-colors"
                    >
                        Learn More About Our Process <ArrowRight size={16} className="ml-2" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
