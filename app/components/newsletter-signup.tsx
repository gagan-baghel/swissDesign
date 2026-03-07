export default function NewsletterSignup() {
  return (
    <section className="py-20 px-4 md:px-8 bg-black text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">SUBSCRIBE TO OUR NEWSLETTER</h2>
        <p className="text-xl max-w-2xl mx-auto mb-8">
          Stay updated with our latest projects, insights, and events. We send our newsletter once a month.
        </p>
        <form className="max-w-md mx-auto flex">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-grow py-3 px-4 bg-transparent border-2 border-white focus:outline-none focus:border-red-600 text-white placeholder-white/50"
          />
          <button
            type="button"
            className="px-6 py-3 bg-red-600 text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
