"use client"

import { useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import MobileMenu from "./mobile-menu"

export default function MainNav({ currentPath }: { currentPath: string }) {
  const router = useRouter()
  const pathname = usePathname()

  // Function to handle navigation and scroll to top
  const handleNavigation = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black">
      <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <Link href="/" onClick={handleNavigation} className="flex items-center gap-2">
          <Image src="/logo.png" alt="Company Logo" width={1024} height={1024} className="h-8 w-auto" />
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link
            href="/projects"
            onClick={handleNavigation}
            className={`text-sm uppercase tracking-widest ${currentPath === "/projects" ? "text-red-600" : "hover:text-red-600 transition-colors"
              }`}
          >
            Work
          </Link>
          <Link
            href="/services"
            onClick={handleNavigation}
            className={`text-sm uppercase tracking-widest ${currentPath === "/services" ? "text-red-600" : "hover:text-red-600 transition-colors"
              }`}
          >
            Services
          </Link>
          <Link
            href="/team"
            onClick={handleNavigation}
            className={`text-sm uppercase tracking-widest ${currentPath === "/team" ? "text-red-600" : "hover:text-red-600 transition-colors"
              }`}
          >
            Team
          </Link>
          <Link
            href="/process"
            onClick={handleNavigation}
            className={`text-sm uppercase tracking-widest ${currentPath === "/process" ? "text-red-600" : "hover:text-red-600 transition-colors"
              }`}
          >
            Process
          </Link>
          <Link
            href="/blog"
            onClick={handleNavigation}
            className={`text-sm uppercase tracking-widest ${currentPath === "/blog" ? "text-red-600" : "hover:text-red-600 transition-colors"
              }`}
          >
            Blog
          </Link>
          <Link
            href="/shop"
            onClick={handleNavigation}
            className={`text-sm uppercase tracking-widest ${currentPath === "/shop" ? "text-red-600" : "hover:text-red-600 transition-colors"
              }`}
          >
            Shop
          </Link>
          <Link
            href="/careers"
            onClick={handleNavigation}
            className={`text-sm uppercase tracking-widest ${currentPath === "/careers" ? "text-red-600" : "hover:text-red-600 transition-colors"
              }`}
          >
            Careers
          </Link>
          <Link
            href="/contact"
            onClick={handleNavigation}
            className={`text-sm uppercase tracking-widest ${currentPath === "/contact" ? "text-red-600" : "hover:text-red-600 transition-colors"
              }`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu */}
        <MobileMenu currentPath={currentPath} />
      </div>
    </nav>
  )
}
