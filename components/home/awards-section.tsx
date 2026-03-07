import { Award } from "lucide-react"

export default function AwardsSection() {
    return (
        <section className="py-20 px-4 md:px-8 bg-neutral-100">
            <div className="container mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-12 text-center">AWARDS & RECOGNITION</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="p-6 bg-white border border-black text-center">
                        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                            <Award size={40} className="text-red-600" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">D&AD PENCIL</h3>
                        <p className="text-sm">2024</p>
                    </div>

                    <div className="p-6 bg-white border border-black text-center">
                        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                            <Award size={40} className="text-red-600" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">RED DOT AWARD</h3>
                        <p className="text-sm">2023</p>
                    </div>

                    <div className="p-6 bg-white border border-black text-center">
                        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                            <Award size={40} className="text-red-600" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">AWWWARDS</h3>
                        <p className="text-sm">2023</p>
                    </div>

                    <div className="p-6 bg-white border border-black text-center">
                        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                            <Award size={40} className="text-red-600" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">TYPE DIRECTORS CLUB</h3>
                        <p className="text-sm">2022</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
