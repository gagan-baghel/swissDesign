"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, DribbbleIcon as Behance, Linkedin } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image src="/logo.png" alt="Swiss Design Studio Logo" width={1024} height={1024} className="h-8 w-auto" />
            </Link>
            <p className="mb-6 text-neutral-400">
              A Swiss Design studio dedicated to clarity, precision, and purposeful communication through design.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-red-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.behance.net"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-red-600 transition-colors"
                aria-label="Behance"
              >
                <Behance size={20} />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-red-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest mb-6">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-red-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-red-600 transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-red-600 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-red-600 transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-red-600 transition-colors">
                  Process
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest mb-6">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/blog" className="hover:text-red-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-red-600 transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-red-600 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-red-600 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-red-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest mb-6">Contact</h4>
            <ul className="space-y-3 text-neutral-400">
              <li>Bahnhofstrasse 42</li>
              <li>8001 Zürich, Switzerland</li>
              <li>hello@swissdesign.com</li>
              <li>+41 123 456 789</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center pt-8 border-t border-white/20">
          <p className="text-sm">© 2025 Swiss Design Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
