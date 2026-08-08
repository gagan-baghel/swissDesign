import { Metadata } from "next"
import MainNav from "../components/main-nav"
import SiteFooter from "../components/site-footer"
import ShopClient from "./shop-client"
import { ShoppingCart } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Shop",
  description: "Explore our collection of design resources, templates, and merchandise inspired by Swiss Design.",
}

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Navigation - Component 1 */}
      <MainNav currentPath="/shop" />

      {/* Page Header - Component 2 */}
      <section className="py-20 px-4 md:px-8 container mx-auto border-b border-black">
        <h1 className="text-7xl md:text-8xl font-bold tracking-tighter leading-none mb-6">SHOP</h1>
        <p className="text-xl max-w-2xl">
          Explore our collection of design resources, templates, and merchandise inspired by Swiss Design principles.
          Each item is crafted with precision and clarity.
        </p>
      </section>

      {/* Client-side shop functionality */}
      <ShopClient />

      {/* Related Products - Component 17 */}
      <section className="py-16 px-4 md:px-8 container mx-auto">
        <h2 className="text-4xl font-bold tracking-tighter mb-12">YOU MAY ALSO LIKE</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Related Product 1 - Component 18 */}
          <div>
            <div className="aspect-square bg-neutral-100 mb-4 relative group">
              <Image
                src="/images/project-typography.png"
                alt="Typography Poster Set"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
            <h3 className="text-lg font-bold mb-1">Typography Poster Set</h3>
            <div className="flex justify-between items-center">
              <div className="font-bold">$65.00</div>
              <button className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
                <ShoppingCart size={16} />
              </button>
            </div>
          </div>

          {/* Related Product 2 - Component 19 */}
          <div>
            <div className="aspect-square bg-neutral-100 mb-4 relative group">
              <Image
                src="/images/featured-project.png"
                alt="Brand Identity Template"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
            <h3 className="text-lg font-bold mb-1">Brand Identity Template</h3>
            <div className="flex justify-between items-center">
              <div className="font-bold">$45.00</div>
              <button className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
                <ShoppingCart size={16} />
              </button>
            </div>
          </div>

          {/* Related Product 3 - Component 20 */}
          <div>
            <div className="aspect-square bg-neutral-100 mb-4 relative group">
              <Image
                src="/images/featured-project.png"
                alt="Swiss Design Notebook"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
            <h3 className="text-lg font-bold mb-1">Swiss Design Notebook</h3>
            <div className="flex justify-between items-center">
              <div className="font-bold">$15.00</div>
              <button className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
                <ShoppingCart size={16} />
              </button>
            </div>
          </div>

          {/* Related Product 4 - Component 21 */}
          <div>
            <div className="aspect-square bg-neutral-100 mb-4 relative group">
              <Image
                src="/images/project-poster.png"
                alt="Modernist Tote Bag"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
            <h3 className="text-lg font-bold mb-1">Modernist Tote Bag</h3>
            <div className="flex justify-between items-center">
              <div className="font-bold">$25.00</div>
              <button className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
                <ShoppingCart size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      {/* <NewsletterSignup /> */}

      {/* Footer */}
      <SiteFooter />
    </main>
  )
}
