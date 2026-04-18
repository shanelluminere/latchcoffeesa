// app/page.js

export default function Page() {
  return (
    <main className="bg-white text-black">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 border-b border-neutral-200 bg-white/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 md:px-20 py-5 flex justify-between items-center">
          
          <h1 className="font-serif text-xl tracking-tight">
            Latch Coffee SA
          </h1>

          <div className="hidden md:flex items-center gap-10 text-sm">
            <a href="#about" className="text-neutral-500 hover:text-black transition">About</a>
            <a href="#menu" className="text-neutral-500 hover:text-black transition">Menu</a>
            <a href="#visit" className="text-neutral-500 hover:text-black transition">Visit</a>

            <a
              href="#visit"
              className="ml-4 px-5 py-2 border border-black text-sm hover:bg-black hover:text-white transition"
            >
              Visit Now
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-screen flex items-center">
        
        <img
          src="https://source.unsplash.com/1600x900/?minimal,coffee,interior"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />

        <div className="absolute inset-0 bg-white/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20">
          <div className="max-w-2xl">
            
            <p className="text-xs uppercase tracking-widest text-neutral-500 mb-6">
              Riyadh • Open Daily
            </p>

            <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] tracking-[-0.04em] mb-6">
              A café worth
              <br />
              stepping out for
            </h1>

            <p className="text-neutral-600 text-base md:text-lg mb-10">
              Minimal design. Intentional atmosphere. A destination,
              not just a stop.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="#visit"
                className="px-8 py-4 border border-black hover:bg-black hover:text-white transition"
              >
                Visit Us
              </a>

              <a
                href="#menu"
                className="text-neutral-500 hover:text-black transition self-center"
              >
                View Menu →
              </a>
            </div>

            <p className="text-xs text-neutral-500 mt-6">
              Peak hours fill quickly • Best before 8PM
            </p>

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 md:px-20 py-24 md:py-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

          <div>
            <h2 className="font-serif text-3xl md:text-5xl mb-6">
              Why Latch Coffee
            </h2>

            <p className="text-neutral-600 mb-6">
              Not all cafés are built the same. Latch is designed for
              people who value environment as much as product.
            </p>

            <ul className="text-sm text-neutral-500 space-y-3">
              <li>• Minimal, design-led interiors</li>
              <li>• Consistent high-quality drinks</li>
              <li>• Built for social and creative culture</li>
            </ul>
          </div>

          <div className="overflow-hidden">
            <img
              src="https://source.unsplash.com/800x1000/?minimal,cafe,architecture"
              className="w-full h-full object-cover hover:scale-105 transition duration-700"
            />
          </div>

        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="px-6 md:px-20 py-24 md:py-32 bg-neutral-50">
        <div className="max-w-3xl mx-auto">

          <h2 className="font-serif text-3xl md:text-5xl mb-16">
            Menu Highlights
          </h2>

          <div className="divide-y divide-neutral-200">
            {[
              { name: "Espresso", price: "18 SAR" },
              { name: "Flat White", price: "22 SAR" },
              { name: "Matcha Latte", price: "26 SAR" },
            ].map((item, i) => (
              <div key={i} className="flex justify-between py-6">
                <span className="text-lg">{item.name}</span>
                <span className="text-neutral-500">{item.price}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#visit"
              className="px-8 py-4 border border-black hover:bg-black hover:text-white transition"
            >
              Try It In Store
            </a>
          </div>

        </div>
      </section>

      {/* MID CTA */}
      <section className="px-6 md:px-20 py-24 md:py-32 bg-black text-white text-center">
        <div className="max-w-2xl mx-auto">

          <h2 className="font-serif text-3xl md:text-5xl mb-6">
            Planning your next café visit?
          </h2>

          <p className="text-white/70 mb-10">
            Latch Coffee is busiest in the evenings. Come earlier
            for the full experience.
          </p>

          <a
            href="#visit"
            className="px-8 py-4 border border-white hover:bg-white hover:text-black transition"
          >
            Visit Today
          </a>

        </div>
      </section>

      {/* GALLERY */}
      <section className="px-6 md:px-20 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">

          <h2 className="font-serif text-3xl md:text-5xl mb-10">
            Atmosphere
          </h2>

          <p className="text-neutral-600 mb-16 max-w-xl">
            A space people return to. Designed to be experienced,
            shared, and remembered.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "minimal cafe interior",
              "coffee aesthetic monochrome",
              "modern cafe lifestyle",
              "latte minimal",
            ].map((img, i) => (
              <div key={i} className="overflow-hidden">
                <img
                  src={`https://source.unsplash.com/800x1000/?${img}`}
                  className="w-full h-full object-cover hover:scale-105 transition duration-700"
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CONTACT / VISIT */}
      <section id="visit" className="px-6 md:px-20 py-24 md:py-32 text-center border-t border-neutral-200">
        <div className="max-w-2xl mx-auto">

          <h2 className="font-serif text-3xl md:text-5xl mb-6">
            Visit Latch Coffee
          </h2>

          <p className="text-neutral-600 mb-4">
            Riyadh, Saudi Arabia
          </p>

          <p className="text-sm text-neutral-500 mb-10">
            Open daily • 7AM — 12AM
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <button className="px-8 py-4 border border-black hover:bg-black hover:text-white transition">
              Get Directions
            </button>

            <button className="text-neutral-500 hover:text-black transition">
              Call Café
            </button>
          </div>

          <p className="text-xs text-neutral-500 mt-6">
            Walk-ins welcome • No reservation needed
          </p>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center text-sm text-neutral-500 border-t border-neutral-200">
        © 2026 Latch Coffee SA
      </footer>

    </main>
  );
}
