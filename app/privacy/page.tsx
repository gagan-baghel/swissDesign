import { Metadata } from "next"
import MainNav from "../components/main-nav"
import SiteFooter from "../components/site-footer"
import NewsletterSignup from "../components/newsletter-signup"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how Swiss Design Studio collects, uses, and protects your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Navigation */}
      <MainNav currentPath="/privacy" />

      {/* Page Header */}
      <section className="py-20 px-4 md:px-8 container mx-auto border-b border-black">
        <h1 className="text-7xl md:text-8xl font-bold tracking-tighter leading-none mb-6">PRIVACY POLICY</h1>
        <p className="text-xl max-w-2xl">
          This Privacy Policy outlines how we collect, use, and protect your personal information when you visit our
          website or use our services.
        </p>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 px-4 md:px-8 container mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-6">1. INFORMATION WE COLLECT</h2>
            <p className="mb-4">
              We collect information that you provide directly to us, such as when you create an account, subscribe to
              our newsletter, fill out a form, or communicate with us.
            </p>
            <p className="mb-4">This information may include:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Contact information (name, email address, phone number)</li>
              <li>Account credentials (username, password)</li>
              <li>Payment information (processed through secure third-party payment processors)</li>
              <li>Communications you send to us</li>
              <li>Survey responses and feedback</li>
            </ul>
            <p>
              We also automatically collect certain information when you visit our website, including your IP address,
              browser type, operating system, referring URLs, and information about your usage of our site.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-6">2. HOW WE USE YOUR INFORMATION</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices, updates, security alerts, and support messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Communicate with you about products, services, offers, and events</li>
              <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
              <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
              <li>Personalize and improve your experience</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-6">3. SHARING OF INFORMATION</h2>
            <p className="mb-4">We may share your information with:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                Service providers who perform services on our behalf (such as payment processing, data analysis, email
                delivery, hosting services, customer service)
              </li>
              <li>
                Professional advisors, such as lawyers, auditors, and insurers, where necessary in the course of the
                professional services they provide to us
              </li>
              <li>
                Government authorities or other third parties when required by law or to protect our rights and
                interests
              </li>
            </ul>
            <p>
              We may also share aggregated or de-identified information that cannot reasonably be used to identify you.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-6">4. DATA SECURITY</h2>
            <p className="mb-4">
              We take reasonable measures to help protect your personal information from loss, theft, misuse, and
              unauthorized access, disclosure, alteration, and destruction.
            </p>
            <p>
              However, no security system is impenetrable, and we cannot guarantee the security of our systems or your
              information.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-6">5. YOUR RIGHTS AND CHOICES</h2>
            <p className="mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Accessing, correcting, or deleting your personal information</li>
              <li>Objecting to our processing of your information</li>
              <li>Requesting that we restrict processing of your information</li>
              <li>Requesting portability of your information</li>
              <li>Opting out of marketing communications</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information provided in the "Contact Us" section
              below.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-6">6. COOKIES AND SIMILAR TECHNOLOGIES</h2>
            <p className="mb-4">
              We use cookies and similar technologies to collect information about your browsing activities and to
              distinguish you from other users of our website.
            </p>
            <p className="mb-4">
              You can set your browser to refuse all or some browser cookies, or to alert you when cookies are being
              sent. If you disable or refuse cookies, please note that some parts of our website may become inaccessible
              or not function properly.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-6">7. CHANGES TO THIS PRIVACY POLICY</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other
              operational, legal, or regulatory reasons. We will post the revised Privacy Policy on our website with an
              updated effective date.
            </p>
            <p>
              We encourage you to review the Privacy Policy whenever you access our services or otherwise interact with
              us to stay informed about our information practices.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold tracking-tighter mb-6">8. CONTACT US</h2>
            <p className="mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices,
              please contact us at:
            </p>
            <div className="bg-neutral-100 p-6 mb-4">
              <p className="mb-2">Swiss Design Studio</p>
              <p className="mb-2">Bahnhofstrasse 42</p>
              <p className="mb-2">8001 Zürich, Switzerland</p>
              <p className="mb-2">Email: privacy@swissdesign.com</p>
              <p>Phone: +41 123 456 789</p>
            </div>
            <p>
              We will respond to your request within a reasonable timeframe and in accordance with applicable data
              protection laws.
            </p>
          </div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 px-4 md:px-8 container mx-auto border-t border-black">
        <div className="max-w-3xl mx-auto">
          <p className="text-neutral-600">Last Updated: May 15, 2025</p>
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup />

      {/* Footer */}
      <SiteFooter />
    </main>
  )
}
