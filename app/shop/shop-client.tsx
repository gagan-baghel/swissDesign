"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, Search } from "lucide-react"

// Product type definition
type Product = {
  id: string
  name: string
  category: string
  price: number
  image: string
  isNew?: boolean
  isBestseller?: boolean
  type: string
}

// Sample products data
const products: Product[] = [
  { id: "1", name: "Editorial Grid System", category: "Templates", price: 29, image: "/images/project-typography.png", isNew: true, type: "Template" },
  { id: "2", name: "Poster Design Templates", category: "Templates", price: 19, image: "/images/project-poster.png", type: "Template" },
  { id: "3", name: "Web Design System", category: "Templates", price: 39, image: "/images/featured-project.png", type: "Template" },
  { id: "4", name: "Swiss Design Principles", category: "Books", price: 45, image: "/images/project-poster.png", type: "Book" },
  { id: "5", name: "Grid Systems in Graphic Design", category: "Books", price: 55, image: "/images/project-typography.png", isBestseller: true, type: "Book" },
  { id: "6", name: "Typography Manual", category: "Books", price: 35, image: "/images/project-typography.png", type: "Book" },
  { id: "7", name: "Helvetica Poster", category: "Posters", price: 25, image: "/images/project-poster.png", type: "Poster" },
  { id: "8", name: "Grid System Poster", category: "Posters", price: 25, image: "/images/project-poster.png", type: "Poster" },
  { id: "9", name: "Swiss Modernism Poster", category: "Posters", price: 25, image: "/images/featured-project.png", isNew: true, type: "Poster" },
  { id: "10", name: "Swiss Design Notebook", category: "Merchandise", price: 15, image: "/images/video-thumbnail.png", type: "Merchandise" },
  { id: "11", name: "Modernist Tote Bag", category: "Merchandise", price: 25, image: "/images/project-poster.png", type: "Merchandise" },
  { id: "12", name: "Typography Poster Set", category: "Posters", price: 65, image: "/images/project-typography.png", type: "Poster" },
  { id: "13", name: "Swiss Design Mug", category: "Merchandise", price: 18, image: "/images/featured-project.png", type: "Merchandise" },
  { id: "14", name: "Minimalist Desk Calendar", category: "Merchandise", price: 22, image: "/images/project-typography.png", type: "Merchandise" },
  { id: "15", name: "Swiss Typography Guide", category: "Books", price: 42, image: "/images/project-poster.png", type: "Book" },
]

export default function ShopClient() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")
  const [cart, setCart] = useState<{ id: string; quantity: number }[]>([])
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({})
  const [visibleProducts, setVisibleProducts] = useState(12)
  const [showAddedToast, setShowAddedToast] = useState(false)
  const [addedProduct, setAddedProduct] = useState<string | null>(null)

  // Filter products based on search term and category
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = activeCategory === "All" || product.category === activeCategory
    return matchesSearch && matchesCategory
  })

  // Group products by category
  const groupedProducts: Record<string, Product[]> = {}
  filteredProducts.forEach((product) => {
    if (!groupedProducts[product.category]) {
      groupedProducts[product.category] = []
    }
    groupedProducts[product.category].push(product)
  })

  // Add to cart function
  const addToCart = (productId: string) => {
    const product = products.find((p) => p.id === productId)
    if (product) {
      setAddedProduct(product.name)
      setShowAddedToast(true)

      setTimeout(() => {
        setShowAddedToast(false)
      }, 3000)
    }

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productId)
      if (existingItem) {
        return prevCart.map((item) => (item.id === productId ? { ...item, quantity: item.quantity + 1 } : item))
      } else {
        return [...prevCart, { id: productId, quantity: 1 }]
      }
    })
  }

  // Update quantity function
  const updateQuantity = (productId: string, change: number) => {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item.id === productId) {
          const newQuantity = Math.max(1, item.quantity + change)
          return { ...item, quantity: newQuantity }
        }
        return item
      })
    })
  }

  // Remove from cart function
  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId))
  }

  // Calculate cart total
  const cartTotal = cart.reduce((total, item) => {
    const product = products.find((p) => p.id === item.id)
    return total + (product ? product.price * item.quantity : 0)
  }, 0)

  // Load more products
  const loadMoreProducts = () => {
    setVisibleProducts((prev) => Math.min(prev + 6, filteredProducts.length))
  }

  // Render product image based on type
  const renderProductImage = (imageUrl: string, productId: string, productName: string) => {
    const hasFailed = failedImages[productId]
    const fallbackImage = "/images/project-poster.png"
    const src = hasFailed ? fallbackImage : imageUrl || fallbackImage

    return (
      <div className="relative w-full h-full">
        <Image
          src={src}
          alt={productName}
          fill
          className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
          onError={() => {
            setFailedImages((prev) => ({ ...prev, [productId]: true }))
          }}
        />
      </div>
    )
  }

  return (
    <>
      {/* Added to Cart Toast */}
      {showAddedToast && (
        <div className="fixed top-24 right-4 z-50 bg-black text-white px-4 py-3 rounded shadow-lg flex items-center">
          <ShoppingCart size={18} className="mr-2" />
          <span>{addedProduct} added to cart</span>
        </div>
      )}

      {/* Search and Filter - Component 3 */}
      <section className="py-8 px-4 md:px-8 container mx-auto border-b border-black">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full border border-black py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-red-600"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-500" size={18} />
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              className={`text-sm uppercase tracking-widest ${activeCategory === "All" ? "bg-black text-white" : "hover:bg-neutral-100"} px-4 py-2`}
              onClick={() => setActiveCategory("All")}
            >
              All
            </button>
            <button
              className={`text-sm uppercase tracking-widest ${activeCategory === "Templates" ? "bg-black text-white" : "hover:bg-neutral-100"} px-4 py-2`}
              onClick={() => setActiveCategory("Templates")}
            >
              Templates
            </button>
            <button
              className={`text-sm uppercase tracking-widest ${activeCategory === "Books" ? "bg-black text-white" : "hover:bg-neutral-100"} px-4 py-2`}
              onClick={() => setActiveCategory("Books")}
            >
              Books
            </button>
            <button
              className={`text-sm uppercase tracking-widest ${activeCategory === "Posters" ? "bg-black text-white" : "hover:bg-neutral-100"} px-4 py-2`}
              onClick={() => setActiveCategory("Posters")}
            >
              Posters
            </button>
            <button
              className={`text-sm uppercase tracking-widest ${activeCategory === "Merchandise" ? "bg-black text-white" : "hover:bg-neutral-100"} px-4 py-2`}
              onClick={() => setActiveCategory("Merchandise")}
            >
              Merchandise
            </button>
          </div>
        </div>
      </section>

      {/* Product Grid - Component 5 */}
      <section className="py-16 px-4 md:px-8 container mx-auto">
        {Object.keys(groupedProducts).length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-2xl font-bold mb-4">No products found</h3>
            <p className="text-neutral-600">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          Object.entries(groupedProducts).map(([category, categoryProducts]) => (
            <div key={category} className="mb-16">
              <h2 className="text-4xl font-bold tracking-tighter mb-12">{category.toUpperCase()}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {categoryProducts.slice(0, visibleProducts).map((product) => (
                  <div key={product.id}>
                      <div className="aspect-square bg-neutral-100 mb-4 relative group">
                        <div className="absolute inset-0 flex items-center justify-center">
                        {renderProductImage(product.image, product.id, product.name)}
                        </div>
                      {product.isNew && (
                        <div className="absolute top-4 right-4 bg-black text-white text-xs uppercase tracking-widest px-2 py-1">
                          New
                        </div>
                      )}
                      {product.isBestseller && (
                        <div className="absolute top-4 right-4 bg-black text-white text-xs uppercase tracking-widest px-2 py-1">
                          Bestseller
                        </div>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-1">{product.name}</h3>
                    <p className="text-neutral-600 mb-2">{product.type}</p>
                    <div className="flex justify-between items-center">
                      <div className="text-lg font-bold">${product.price.toFixed(2)}</div>
                      <button
                        className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors inline-flex items-center"
                        onClick={() => addToCart(product.id)}
                      >
                        Add to Cart <ShoppingCart size={16} className="ml-2" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}

        {/* Load More Button */}
        {filteredProducts.length > visibleProducts && (
          <div className="text-center mt-12">
            <button
              className="px-8 py-4 bg-black text-white text-sm uppercase tracking-widest hover:bg-red-600 transition-colors"
              onClick={loadMoreProducts}
            >
              Load More Products
            </button>
          </div>
        )}
      </section>

      {/* Shopping Cart - Component 16 */}
      <section className="py-16 px-4 md:px-8 bg-neutral-100">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-bold tracking-tighter">YOUR CART</h2>
            <div className="flex items-center">
              <ShoppingCart size={24} className="mr-2" />
              <span className="text-xl font-bold">{cart.reduce((total, item) => total + item.quantity, 0)} Items</span>
            </div>
          </div>
          <div className="bg-white border border-black p-8 mb-8">
            {cart.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-2xl font-bold mb-4">Your cart is empty</h3>
                <p className="text-neutral-600 mb-6">Add some products to your cart to get started.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-black">
                      <th className="text-left py-4 text-sm uppercase tracking-widest">Product</th>
                      <th className="text-center py-4 text-sm uppercase tracking-widest">Quantity</th>
                      <th className="text-right py-4 text-sm uppercase tracking-widest">Price</th>
                      <th className="text-right py-4 text-sm uppercase tracking-widest">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item) => {
                      const product = products.find((p) => p.id === item.id)
                      if (!product) return null

                      return (
                        <tr key={item.id} className="border-b border-black">
                          <td className="py-4">
                            <div className="flex items-center">
                              <div className="w-16 h-16 bg-neutral-100 mr-4 flex-shrink-0 flex items-center justify-center">
                                <div className="w-10 h-10">{renderProductImage(product.image, product.id, product.name)}</div>
                              </div>
                              <div>
                                <h3 className="font-bold">{product.name}</h3>
                                <p className="text-sm text-neutral-600">{product.type}</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 text-center">
                            <div className="flex items-center justify-center">
                              <button
                                className="w-8 h-8 border border-black flex items-center justify-center"
                                onClick={() => updateQuantity(item.id, -1)}
                              >
                                -
                              </button>
                              <span className="mx-4">{item.quantity}</span>
                              <button
                                className="w-8 h-8 border border-black flex items-center justify-center"
                                onClick={() => updateQuantity(item.id, 1)}
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td className="py-4 text-right font-bold">${(product.price * item.quantity).toFixed(2)}</td>
                          <td className="py-4 text-right">
                            <button
                              className="text-sm uppercase tracking-widest text-red-600 hover:text-red-800 transition-colors"
                              onClick={() => removeFromCart(item.id)}
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                  <tfoot>
                    <tr className="border-t border-black">
                      <td className="py-4"></td>
                      <td className="py-4 text-right text-sm uppercase tracking-widest">Subtotal</td>
                      <td className="py-4 text-right font-bold">${cartTotal.toFixed(2)}</td>
                      <td></td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            )}
          </div>
          <div className="flex justify-end">
            <Link
              href="/checkout"
              className={`px-8 py-4 bg-black text-white text-sm uppercase tracking-widest hover:bg-red-600 transition-colors ${cart.length === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
              onClick={(e) => cart.length === 0 && e.preventDefault()}
            >
              Checkout
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
