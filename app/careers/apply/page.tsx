import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import MainNav from "../../components/main-nav"
import SiteFooter from "../../components/site-footer"
import NewsletterSignup from "../../components/newsletter-signup"

export const metadata: Metadata = {
  title: "Apply | Careers",
  description: "Apply for a position at Swiss Design Studio. We're excited about your interest in joining our team.",
}

export default function CareerApplyPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Navigation */}
      <MainNav currentPath="/careers" />

      {/* Page Header */}
      <section className="py-20 px-4 md:px-8 container mx-auto border-b border-black">
        <div className="mb-8">
          <Link
            href="/careers"
            className="inline-flex items-center text-sm uppercase tracking-widest hover:text-red-600 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" /> Back to Careers
          </Link>
        </div>
        <h1 className="text-7xl md:text-8xl font-bold tracking-tighter leading-none mb-6">APPLY</h1>
        <p className="text-xl max-w-2xl">
          We're excited about your interest in joining our team. Please fill out the form below to apply for a position
          at Swiss Design Studio.
        </p>
      </section>

      {/* Application Form */}
      <section className="py-16 px-4 md:px-8 container mx-auto">
        <div className="max-w-3xl mx-auto">
          <form className="space-y-8">
            {/* Personal Information */}
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-6">PERSONAL INFORMATION</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm uppercase tracking-widest mb-2">
                    First Name*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    className="w-full border border-black py-3 px-4 focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm uppercase tracking-widest mb-2">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    className="w-full border border-black py-3 px-4 focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm uppercase tracking-widest mb-2">
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full border border-black py-3 px-4 focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm uppercase tracking-widest mb-2">
                    Phone*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full border border-black py-3 px-4 focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="location" className="block text-sm uppercase tracking-widest mb-2">
                    Location*
                  </label>
                  <input
                    type="text"
                    id="location"
                    required
                    placeholder="City, Country"
                    className="w-full border border-black py-3 px-4 focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
              </div>
            </div>

            {/* Application Details */}
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-6">APPLICATION DETAILS</h2>
              <div className="space-y-6">
                <div>
                  <label htmlFor="position" className="block text-sm uppercase tracking-widest mb-2">
                    Position You're Applying For*
                  </label>
                  <select
                    id="position"
                    required
                    className="w-full border border-black py-3 px-4 focus:outline-none focus:ring-2 focus:ring-red-600"
                  >
                    <option value="">Select a position</option>
                    <option value="senior-graphic-designer">Senior Graphic Designer</option>
                    <option value="ux-ui-designer">UX/UI Designer</option>
                    <option value="brand-strategist">Brand Strategist</option>
                    <option value="junior-designer">Junior Designer</option>
                    <option value="project-manager">Project Manager</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="otherPosition" className="block text-sm uppercase tracking-widest mb-2">
                    If Other, Please Specify
                  </label>
                  <input
                    type="text"
                    id="otherPosition"
                    className="w-full border border-black py-3 px-4 focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
                <div>
                  <label htmlFor="portfolio" className="block text-sm uppercase tracking-widest mb-2">
                    Portfolio URL*
                  </label>
                  <input
                    type="url"
                    id="portfolio"
                    required
                    placeholder="https://your-portfolio.com"
                    className="w-full border border-black py-3 px-4 focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
                <div>
                  <label htmlFor="linkedin" className="block text-sm uppercase tracking-widest mb-2">
                    LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    id="linkedin"
                    placeholder="https://linkedin.com/in/your-profile"
                    className="w-full border border-black py-3 px-4 focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
                <div>
                  <label htmlFor="resume" className="block text-sm uppercase tracking-widest mb-2">
                    Resume/CV* (PDF only)
                  </label>
                  <input
                    type="file"
                    id="resume"
                    accept=".pdf"
                    required
                    className="w-full border border-black py-3 px-4 focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
                <div>
                  <label htmlFor="coverLetter" className="block text-sm uppercase tracking-widest mb-2">
                    Cover Letter
                  </label>
                  <textarea
                    id="coverLetter"
                    rows={6}
                    className="w-full border border-black py-3 px-4 focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="Tell us why you're interested in this position and what you can bring to our team."
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="startDate" className="block text-sm uppercase tracking-widest mb-2">
                    Earliest Start Date*
                  </label>
                  <input
                    type="date"
                    id="startDate"
                    required
                    className="w-full border border-black py-3 px-4 focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
                <div>
                  <label htmlFor="salary" className="block text-sm uppercase tracking-widest mb-2">
                    Salary Expectations (CHF)
                  </label>
                  <input
                    type="text"
                    id="salary"
                    className="w-full border border-black py-3 px-4 focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-6">ADDITIONAL INFORMATION</h2>
              <div className="space-y-6">
                <div>
                  <label htmlFor="hearAbout" className="block text-sm uppercase tracking-widest mb-2">
                    How Did You Hear About Us?
                  </label>
                  <select
                    id="hearAbout"
                    className="w-full border border-black py-3 px-4 focus:outline-none focus:ring-2 focus:ring-red-600"
                  >
                    <option value="">Select an option</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="job-board">Job Board</option>
                    <option value="website">Company Website</option>
                    <option value="referral">Referral</option>
                    <option value="social-media">Social Media</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="questions" className="block text-sm uppercase tracking-widest mb-2">
                    Questions or Comments
                  </label>
                  <textarea
                    id="questions"
                    rows={4}
                    className="w-full border border-black py-3 px-4 focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="Any questions or additional information you'd like to share?"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="button"
                className="w-full py-4 bg-black text-white text-sm uppercase tracking-widest hover:bg-red-600 transition-colors"
              >
                Submit Application
              </button>
              <p className="text-sm text-neutral-600 mt-4">
                By submitting this application, you consent to our processing of your personal data in accordance with
                our{" "}
                <Link href="/privacy" className="underline hover:text-red-600">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup />

      {/* Footer */}
      <SiteFooter />
    </main>
  )
}
