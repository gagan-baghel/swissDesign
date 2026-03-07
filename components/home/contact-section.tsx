import Link from "next/link"

export default function ContactSection() {
    return (
        <section id="contact" className="py-20 px-4 md:px-8 bg-red-600 text-white">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">CONTACT</h2>
                        <p className="text-xl mb-8">Interested in working together? Let's discuss your project.</p>
                        <div className="space-y-4">
                            <p className="flex items-center">
                                <span className="w-24 text-sm uppercase tracking-widest">Email</span>
                                <a href="mailto:hello@swissdesign.com" className="hover:underline">
                                    hello@swissdesign.com
                                </a>
                            </p>
                            <p className="flex items-center">
                                <span className="w-24 text-sm uppercase tracking-widest">Phone</span>
                                <a href="tel:+41123456789" className="hover:underline">
                                    +41 123 456 789
                                </a>
                            </p>
                            <p className="flex items-center">
                                <span className="w-24 text-sm uppercase tracking-widest">Location</span>
                                <span>Zürich, Switzerland</span>
                            </p>
                        </div>
                        <div className="mt-8">
                            <Link
                                href="/contact"
                                className="inline-block px-8 py-4 bg-black text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
                            >
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                    <div>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm uppercase tracking-widest mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm uppercase tracking-widest mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                                    placeholder="Your email"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm uppercase tracking-widest mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                                    placeholder="Your message"
                                ></textarea>
                            </div>
                            <button
                                type="button"
                                className="mt-8 px-8 py-3 bg-black text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
