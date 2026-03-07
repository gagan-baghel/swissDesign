"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

const TARGET_SELECTORS = [
  "main section",
  "main article",
  "main form",
  "main .aspect-square",
  "main .aspect-video",
  "main [class*='aspect-']",
]

export default function AnimationObserver() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === "undefined") return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const candidates = TARGET_SELECTORS.flatMap((selector) => {
      try {
        return Array.from(document.querySelectorAll<HTMLElement>(selector))
      } catch {
        return []
      }
    })

    const uniqueTargets = Array.from(new Set(candidates)).filter((element) => !element.dataset.motionPrepared)

    uniqueTargets.forEach((element, index) => {
      element.dataset.motionPrepared = "true"
      element.style.setProperty("--motion-delay", `${Math.min((index % 8) * 70, 420)}ms`)
      element.classList.add("motion-reveal")
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement
            target.classList.add("motion-visible")
            observer.unobserve(target)
          }
        })
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      },
    )

    uniqueTargets.forEach((element) => observer.observe(element))

    return () => {
      observer.disconnect()
    }
  }, [pathname])

  return null
}
