import Image from "next/image"
import { Check, Play } from "lucide-react"
import videoThumb from "/public/images/video-thumbnail.png"

export default function PhilosophySection() {
    return (
        <section className="py-20 px-4 md:px-8 container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">OUR DESIGN PHILOSOPHY</h2>
                    <p className="text-xl mb-6">
                        Watch our creative director Emma Müller discuss our approach to Swiss Design and how we apply its
                        principles to modern design challenges.
                    </p>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-start">
                            <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                            <span>The importance of grid systems in creating order</span>
                        </li>
                        <li className="flex items-start">
                            <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                            <span>Typography as the foundation of clear communication</span>
                        </li>
                        <li className="flex items-start">
                            <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                            <span>Balancing tradition with innovation</span>
                        </li>
                        <li className="flex items-start">
                            <Check size={20} className="mr-2 text-red-600 flex-shrink-0 mt-1" />
                            <span>Creating designs that stand the test of time</span>
                        </li>
                    </ul>
                </div>
                <div className="aspect-video bg-neutral-100 relative">
                    <Image
                        src={videoThumb}
                        alt="Design Philosophy Video — thumbnail"
                        fill
                        priority
                        placeholder="blur"
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center text-white z-10 hover:scale-110 transition-transform">
                            <Play size={32} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
