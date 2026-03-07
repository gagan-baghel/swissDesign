import MainNav from "./components/main-nav"
import SiteFooter from "./components/site-footer"
import NewsletterSignup from "./components/newsletter-signup"

import HeroSection from "@/components/home/hero-section"
import IntroductionSection from "@/components/home/introduction-section"
import WorkSection from "@/components/home/work-section"
import FeaturedProjectSection from "@/components/home/featured-project-section"
import ServicesSection from "@/components/home/services-section"
import ProcessSection from "@/components/home/process-section"
import AboutSection from "@/components/home/about-section"
import TeamSection from "@/components/home/team-section"
import TestimonialsSection from "@/components/home/testimonials-section"
import BlogSection from "@/components/home/blog-section"
import ProductsSection from "@/components/home/products-section"
import WhyChooseUsSection from "@/components/home/why-choose-us-section"
import PhilosophySection from "@/components/home/philosophy-section"
import AwardsSection from "@/components/home/awards-section"
import ClientsSection from "@/components/home/clients-section"
import ContactSection from "@/components/home/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <MainNav currentPath="/" />
      <HeroSection />
      <IntroductionSection />
      <WorkSection />
      <FeaturedProjectSection />
      <ServicesSection />
      <ProcessSection />
      <AboutSection />
      <TeamSection />
      <TestimonialsSection />
      <BlogSection />
      <ProductsSection />
      <WhyChooseUsSection />
      <PhilosophySection />
      <AwardsSection />
      <ClientsSection />
      <ContactSection />
      <NewsletterSignup />
      <SiteFooter />
    </main>
  )
}
