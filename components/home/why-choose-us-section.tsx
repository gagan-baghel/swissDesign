import { Award, Zap, Users, Clock } from "lucide-react"

export default function WhyChooseUsSection() {
    return (
        <section className="py-20 px-4 md:px-8 bg-black text-white">
            <div className="container mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-12 text-center">WHY CHOOSE US</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="p-6 border border-white/20 hover:bg-white/5 transition-colors">
                        <div className="w-12 h-12 bg-red-600 flex items-center justify-center text-white mb-6">
                            <Award size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-4">EXPERTISE</h3>
                        <p>
                            Our team brings decades of combined experience in Swiss Design principles and their application across
                            various media and industries.
                        </p>
                    </div>

                    <div className="p-6 border border-white/20 hover:bg-white/5 transition-colors">
                        <div className="w-12 h-12 bg-red-600 flex items-center justify-center text-white mb-6">
                            <Zap size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-4">INNOVATION</h3>
                        <p>
                            We balance tradition with innovation, applying Swiss Design principles to contemporary challenges and
                            technologies.
                        </p>
                    </div>

                    <div className="p-6 border border-white/20 hover:bg-white/5 transition-colors">
                        <div className="w-12 h-12 bg-red-600 flex items-center justify-center text-white mb-6">
                            <Users size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-4">COLLABORATION</h3>
                        <p>
                            We work closely with our clients, involving them in the design process to ensure solutions that truly
                            meet their needs.
                        </p>
                    </div>

                    <div className="p-6 border border-white/20 hover:bg-white/5 transition-colors">
                        <div className="w-12 h-12 bg-red-600 flex items-center justify-center text-white mb-6">
                            <Clock size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-4">TIMELESSNESS</h3>
                        <p>
                            Our designs stand the test of time, focusing on clarity and functionality rather than fleeting trends.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
