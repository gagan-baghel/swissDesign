import Link from "next/link"
import Image from "next/image"
import product1 from "/public/images/project-typography.png"
import product2 from "/public/images/project-poster.png"
import product3 from "/public/images/project-poster.png"
import product4 from "/public/images/project-typography.png"

export default function ProductsSection() {
    return (
        <section className="py-20 px-4 md:px-8 container mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-12 text-center">SHOP OUR PRODUCTS</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                <div>
                    <div className="aspect-square bg-neutral-100 mb-4 relative group">
                        <Image
                            src={product1}
                            alt="Editorial Grid System — product image"
                            fill
                            priority
                            placeholder="blur"
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                        <div className="absolute top-4 right-4 bg-black text-white text-xs uppercase tracking-widest px-2 py-1">
                            New
                        </div>
                    </div>
                    <h3 className="text-xl font-bold mb-1">Editorial Grid System</h3>
                    <p className="text-neutral-600 mb-2">Template</p>
                    <div className="text-lg font-bold">$29.00</div>
                </div>

                <div>
                    <div className="aspect-square bg-neutral-100 mb-4 relative group">
                        <Image
                            src={product2}
                            alt="Poster Design Templates — product image"
                            fill
                            priority
                            placeholder="blur"
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                    </div>
                    <h3 className="text-xl font-bold mb-1">Poster Design Templates</h3>
                    <p className="text-neutral-600 mb-2">Template</p>
                    <div className="text-lg font-bold">$19.00</div>
                </div>

                <div>
                    <div className="aspect-square bg-neutral-100 mb-4 relative group">
                        <Image
                            src={product3}
                            alt="Grid Systems Book — product image"
                            fill
                            priority
                            placeholder="blur"
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                        <div className="absolute top-4 right-4 bg-black text-white text-xs uppercase tracking-widest px-2 py-1">
                            Bestseller
                        </div>
                    </div>
                    <h3 className="text-xl font-bold mb-1">Grid Systems Book</h3>
                    <p className="text-neutral-600 mb-2">Book</p>
                    <div className="text-lg font-bold">$55.00</div>
                </div>

                <div>
                    <div className="aspect-square bg-neutral-100 mb-4 relative group">
                        <Image
                            src={product4}
                            alt="Swiss Design Poster — product image"
                            fill
                            priority
                            placeholder="blur"
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                    </div>
                    <h3 className="text-xl font-bold mb-1">Swiss Design Poster</h3>
                    <p className="text-neutral-600 mb-2">Poster</p>
                    <div className="text-lg font-bold">$25.00</div>
                </div>
            </div>

            <div className="text-center">
                <Link
                    href="/shop"
                    className="inline-block px-8 py-4 border-2 border-black text-sm uppercase tracking-widest hover:bg-neutral-100 transition-colors"
                >
                    Visit Our Shop
                </Link>
            </div>
        </section>
    )
}
