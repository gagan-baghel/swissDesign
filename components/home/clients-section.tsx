export default function ClientsSection() {
    return (
        <section className="py-20 px-4 md:px-8 container mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-12 text-center">CLIENTS WE'VE WORKED WITH</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="aspect-[3/2] bg-neutral-100 flex items-center justify-center">
                    <div className="w-16 h-16 bg-black"></div>
                </div>

                <div className="aspect-[3/2] bg-neutral-100 flex items-center justify-center">
                    <div className="w-16 h-16 border-2 border-black"></div>
                </div>

                <div className="aspect-[3/2] bg-neutral-100 flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600"></div>
                </div>

                <div className="aspect-[3/2] bg-neutral-100 flex items-center justify-center">
                    <div className="grid grid-cols-2 grid-rows-2 gap-1 w-16 h-16">
                        <div className="bg-black"></div>
                        <div className="bg-white border border-black"></div>
                        <div className="bg-white border border-black"></div>
                        <div className="bg-black"></div>
                    </div>
                </div>

                <div className="aspect-[3/2] bg-neutral-100 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full border-2 border-black"></div>
                </div>

                <div className="aspect-[3/2] bg-neutral-100 flex items-center justify-center">
                    <div className="w-16 h-16 bg-black"></div>
                </div>

                <div className="aspect-[3/2] bg-neutral-100 flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600"></div>
                </div>

                <div className="aspect-[3/2] bg-neutral-100 flex items-center justify-center">
                    <div className="w-16 h-16 border-2 border-black"></div>
                </div>
            </div>
        </section>
    )
}
