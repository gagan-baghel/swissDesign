"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import Link from "next/link"
import Image from "next/image"
import { X } from "lucide-react"

interface MobileMenuProps {
  currentPath: string
}

export default function MobileMenu({ currentPath }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [currentPath])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  // Function to handle navigation and scroll to top
  const handleNavigation = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="md:hidden flex flex-col justify-center items-center"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
      >
        <div className="w-6 h-0.5 bg-black mb-1.5"></div>
        <div className="w-6 h-0.5 bg-black mb-1.5"></div>
        <div className="w-6 h-0.5 bg-black"></div>
      </button>

      {/* Mobile menu overlay */}
      {mounted && isOpen && createPortal(
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[100] md:hidden" onClick={() => setIsOpen(false)}>
          <div
            className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-8">
              <Link href="/" onClick={handleNavigation} className="flex items-center gap-2">
                <Image src="/logo.png" alt="Company Logo" width={1024} height={1024} className="h-8 w-auto text-black" />
              </Link>
              <button onClick={() => setIsOpen(false)} aria-label="Close menu">
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col space-y-6">
              <Link
                href="/projects"
                onClick={handleNavigation}
                className={`text-lg uppercase tracking-widest ${currentPath === "/projects" ? "text-red-600" : "hover:text-red-600 transition-colors"
                  }`}
              >
                Work
              </Link>
              <Link
                href="/services"
                onClick={handleNavigation}
                className={`text-lg uppercase tracking-widest ${currentPath === "/services" ? "text-red-600" : "hover:text-red-600 transition-colors"
                  }`}
              >
                Services
              </Link>
              <Link
                href="/team"
                onClick={handleNavigation}
                className={`text-lg uppercase tracking-widest ${currentPath === "/team" ? "text-red-600" : "hover:text-red-600 transition-colors"
                  }`}
              >
                Team
              </Link>
              <Link
                href="/process"
                onClick={handleNavigation}
                className={`text-lg uppercase tracking-widest ${currentPath === "/process" ? "text-red-600" : "hover:text-red-600 transition-colors"
                  }`}
              >
                Process
              </Link>
              <Link
                href="/blog"
                onClick={handleNavigation}
                className={`text-lg uppercase tracking-widest ${currentPath === "/blog" ? "text-red-600" : "hover:text-red-600 transition-colors"
                  }`}
              >
                Blog
              </Link>
              <Link
                href="/shop"
                onClick={handleNavigation}
                className={`text-lg uppercase tracking-widest ${currentPath === "/shop" ? "text-red-600" : "hover:text-red-600 transition-colors"
                  }`}
              >
                Shop
              </Link>
              <Link
                href="/careers"
                onClick={handleNavigation}
                className={`text-lg uppercase tracking-widest ${currentPath === "/careers" ? "text-red-600" : "hover:text-red-600 transition-colors"
                  }`}
              >
                Careers
              </Link>
              <Link
                href="/contact"
                onClick={handleNavigation}
                className={`text-lg uppercase tracking-widest ${currentPath === "/contact" ? "text-red-600" : "hover:text-red-600 transition-colors"
                  }`}
              >
                Contact
              </Link>
            </nav>

            <div className="mt-auto pt-8 border-t border-gray-200 mt-12">
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-black hover:text-red-600 transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://www.behance.net"
                  target="_blank"
                  rel="noreferrer"
                  className="text-black hover:text-red-600 transition-colors"
                >
                  Behance
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-black hover:text-red-600 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
