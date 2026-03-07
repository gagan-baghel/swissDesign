import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Lock } from "lucide-react"
import MainNav from "../components/main-nav"
import NewsletterSignup from "../components/newsletter-signup"
import SiteFooter from "../components/site-footer"

const orderItems = [
  { id: "1", name: "Editorial Grid System", price: 29, qty: 1, image: "/images/featured-project.png" },
  { id: "2", name: "Swiss Typography Guide", price: 42, qty: 1, image: "/images/project-typography.png" },
]

const subtotal = orderItems.reduce((total, item) => total + item.price * item.qty, 0)
const shipping: number = 0
const total = subtotal + shipping

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <MainNav currentPath="/shop" />

      <section className="py-16 px-4 md:px-8 container mx-auto border-b border-black">
        <Link href="/shop" className="inline-flex items-center text-sm uppercase tracking-widest mb-6 hover:text-red-600 transition-colors">
          <ArrowLeft size={16} className="mr-2" /> Back to Shop
        </Link>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-6">CHECKOUT</h1>
        <p className="text-xl max-w-2xl">
          Frontend checkout preview. All fields and totals are client-visible only, with no backend payment processing.
        </p>
      </section>

      <section className="py-16 px-4 md:px-8 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="border border-black p-8">
              <h2 className="text-3xl font-bold tracking-tighter mb-6">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm uppercase tracking-widest mb-2">Email</label>
                  <input id="email" type="email" className="w-full border border-black py-3 px-4 focus:outline-none" defaultValue="alex@example.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm uppercase tracking-widest mb-2">Phone</label>
                  <input id="phone" type="tel" className="w-full border border-black py-3 px-4 focus:outline-none" defaultValue="+41 44 212 34 56" />
                </div>
              </div>
            </div>

            <div className="border border-black p-8">
              <h2 className="text-3xl font-bold tracking-tighter mb-6">Shipping Address</h2>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm uppercase tracking-widest mb-2">Full Name</label>
                  <input id="name" type="text" className="w-full border border-black py-3 px-4 focus:outline-none" defaultValue="Alex Meyer" />
                </div>
                <div>
                  <label htmlFor="street" className="block text-sm uppercase tracking-widest mb-2">Street Address</label>
                  <input id="street" type="text" className="w-full border border-black py-3 px-4 focus:outline-none" defaultValue="Bahnhofstrasse 42" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="city" className="block text-sm uppercase tracking-widest mb-2">City</label>
                    <input id="city" type="text" className="w-full border border-black py-3 px-4 focus:outline-none" defaultValue="Zürich" />
                  </div>
                  <div>
                    <label htmlFor="postal" className="block text-sm uppercase tracking-widest mb-2">Postal Code</label>
                    <input id="postal" type="text" className="w-full border border-black py-3 px-4 focus:outline-none" defaultValue="8001" />
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-sm uppercase tracking-widest mb-2">Country</label>
                    <input id="country" type="text" className="w-full border border-black py-3 px-4 focus:outline-none" defaultValue="Switzerland" />
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-black p-8">
              <h2 className="text-3xl font-bold tracking-tighter mb-6">Payment</h2>
              <p className="mb-6 text-sm text-neutral-600">This is a frontend-only preview; payment is disabled.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <label htmlFor="card" className="block text-sm uppercase tracking-widest mb-2">Card Number</label>
                  <input id="card" type="text" className="w-full border border-black py-3 px-4 focus:outline-none" defaultValue="4242 4242 4242 4242" />
                </div>
                <div>
                  <label htmlFor="expiry" className="block text-sm uppercase tracking-widest mb-2">Expiry</label>
                  <input id="expiry" type="text" className="w-full border border-black py-3 px-4 focus:outline-none" defaultValue="12/28" />
                </div>
              </div>
            </div>
          </div>

          <aside>
            <div className="border border-black p-8 sticky top-24">
              <h2 className="text-2xl font-bold tracking-tighter mb-6">Order Summary</h2>
              <div className="space-y-4 mb-8">
                {orderItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <div className="w-14 h-14 relative border border-black">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-sm">{item.name}</p>
                      <p className="text-xs text-neutral-600">Qty {item.qty}</p>
                    </div>
                    <p className="text-sm font-bold">${(item.price * item.qty).toFixed(2)}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-2 border-t border-black pt-4 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between font-bold text-base pt-2 border-t border-black">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                type="button"
                className="mt-8 w-full py-4 bg-black text-white text-sm uppercase tracking-widest opacity-60 cursor-not-allowed flex items-center justify-center"
                aria-disabled="true"
              >
                <Lock size={16} className="mr-2" /> Payment Disabled
              </button>

              <p className="text-xs text-neutral-600 mt-4">
                Need full payment functionality? Connect this page to a backend provider like Stripe.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <NewsletterSignup />
      <SiteFooter />
    </main>
  )
}
