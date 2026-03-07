import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"
import MainNav from "../components/main-nav"
import SiteFooter from "../components/site-footer"
import NewsletterSignup from "../components/newsletter-signup"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Swiss Design Studio. We'd love to discuss your design needs and upcoming projects.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <MainNav currentPath="/contact" />

      {/* Header */}
      <section className="py-16 px-4 md:px-8 container mx-auto border-b border-black">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl">
            Have a project in mind? We'd love to hear from you. Get in touch with our team to discuss your design needs.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 md:px-8 container mx-auto border-b border-black">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border border-black">
            <Mail className="mb-4" size={32} />
            <h2 className="text-xl font-bold mb-2">Email</h2>
            <p className="mb-4">For general inquiries and project discussions.</p>
            <Link
              href="mailto:info@swissdesign.com"
              className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors duration-300"
            >
              info@swissdesign.com
            </Link>
          </div>
          <div className="p-8 border border-black">
            <Phone className="mb-4" size={32} />
            <h2 className="text-xl font-bold mb-2">Phone</h2>
            <p className="mb-4">Available Monday to Friday, 9am to 6pm CET.</p>
            <Link
              href="tel:+41442123456"
              className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors duration-300"
            >
              +41 44 212 34 56
            </Link>
          </div>
          <div className="p-8 border border-black">
            <MapPin className="mb-4" size={32} />
            <h2 className="text-xl font-bold mb-2">Visit</h2>
            <p className="mb-4">Our studio is located in the heart of Zurich.</p>
            <address className="not-italic text-sm uppercase tracking-widest">
              Bahnhofstrasse 42
              <br />
              8001 Zurich
              <br />
              Switzerland
            </address>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 md:px-8 container mx-auto border-b border-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Send Us a Message</h2>
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="block text-sm uppercase tracking-widest mb-2">
                  Name
                </label>
                <input type="text" id="name" className="w-full border border-black p-3 focus:outline-none" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm uppercase tracking-widest mb-2">
                  Email
                </label>
                <input type="email" id="email" className="w-full border border-black p-3 focus:outline-none" required />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm uppercase tracking-widest mb-2">
                Subject
              </label>
              <input type="text" id="subject" className="w-full border border-black p-3 focus:outline-none" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm uppercase tracking-widest mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full border border-black p-3 focus:outline-none"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="button"
                className="bg-black text-white px-6 py-3 text-sm uppercase tracking-widest hover:bg-red-600 transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Find Us */}
      <section className="py-16 px-4 md:px-8 container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Find Us</h2>
          <div className="aspect-video bg-neutral-100 mb-8 border border-black relative overflow-hidden">
            <Image src="/images/about-studio.png" alt="Swiss Design Studio location" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute bottom-4 right-4 bg-white p-4 border border-black shadow-md">
              <h3 className="text-sm font-bold mb-1">Swiss Design Studio</h3>
              <p className="text-xs">Bahnhofstrasse 42, 8001 Zurich</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-sm uppercase tracking-widest">Monday - Friday</span>
                  <span className="text-sm">9:00 - 18:00</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-sm uppercase tracking-widest">Saturday</span>
                  <span className="text-sm">By appointment</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-sm uppercase tracking-widest">Sunday</span>
                  <span className="text-sm">Closed</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Getting Here</h3>
              <p className="mb-4">
                Our studio is a 5-minute walk from Zurich Main Station. Several tram and bus lines stop nearby at
                Bahnhofstrasse/HB.
              </p>
              <p>
                If you're coming by car, there's a public parking garage at Uraniastrasse, just a 3-minute walk from our
                studio.
              </p>
            </div>
          </div>
        </div>
      </section>

      <NewsletterSignup />

      <SiteFooter />
    </main>
  )
}
