import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <div className="relative bg-gradient-to-b from-black via-teal-900 to-black text-white font-serif scroll-smooth">
      {/* 🌌 Soft Aura Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-800/10 via-transparent to-cyan-900/10 blur-3xl"></div>

      {/* 🌙 Navigation Bar (updated labels to professional framing) */}
  <nav className="nav-animated fixed top-0 w-full bg-black/40 backdrop-blur-md text-cyan-200 py-4 px-6 flex justify-center space-x-8 border-b border-cyan-900 z-50">
          {[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/#about' },
          { label: 'Therapies', href: '/#sessions' },
          { label: 'Quantum', href: '/quantum-healing' },
          { label: 'Gallery', href: '/gallery' },
          { label: 'Blog', href: '/blog' },
          { label: 'Learning', href: '/learn' },
          { label: 'Booking', href: '/#booking' },
          { label: 'Contact', href: '/#contact' },
        ].map((item) => (
          <a key={item.label} href={item.href} className="hover:text-cyan-400 transition duration-300">
            {item.label}
          </a>
        ))}
      </nav>

      {/* 🏠 Hero Section */}
           {/* 🌿 About Section */}
      <section
        id="about"
        data-aos="fade-up"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 border-t border-cyan-900 bg-[url('/healing-bg2.jpg')] bg-cover bg-center relative"
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-4xl font-semibold text-cyan-300 mb-6">
            The Energy Within
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Every being carries an inner vibration — a quantum frequency that
            connects body, mind, and soul. Our practice channels universal
            life-force energy through ancient meridian paths and chakra centers,
            awakening dormant instincts and restoring harmony.
          </p>
        </div>
      </section>

      {/* 💫 Healing Section */}
      <section
        id="healing"
        data-aos="fade-up"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 border-t border-cyan-900 bg-[url('/healing-bg3.jpg')] bg-cover bg-center relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90"></div>
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-4xl font-semibold text-cyan-300 mb-6">
            Quantum Healing & Balance
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Healing is not about fixing; it’s about returning to resonance.
            Through gentle touch, sound, and focused intention, we tune the
            subtle energy field — aligning chakras, clearing stagnation, and
            restoring the natural rhythm of peace.
          </p>
        </div>
      </section>

      {/* 🌸 Sessions Section */}
      <section
        id="sessions"
        data-aos="fade-up"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 border-t border-cyan-900 bg-[url('/healing-bg4.jpg')] bg-cover bg-center relative"
      >
        <div className="absolute inset-0 bg-black/75"></div>
        <div className="relative z-10 max-w-5xl">
          <h2 className="text-4xl font-semibold text-cyan-300 mb-6">
            Sessions & Offerings
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg mb-10">
            Choose the healing path that resonates with your soul. Each session
            is uniquely guided to align your body’s energy, restore peace, and
            awaken your natural rhythm.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left card-stagger">
            {[
              {
                title: "Energy Alignment",
                desc: "Gentle realignment of chakras and meridian flow using guided energy transmission and breathwork.",
                duration: "Duration: 60 min",
              },
              {
                title: "Quantum Healing",
                desc: "Vibrational resonance healing using subtle quantum frequencies for emotional and physical balance.",
                duration: "Duration: 90 min",
              },
              {
                title: "Sound & Light Therapy",
                desc: "Healing with harmonic tones and chromatic light to restore inner calm and clarity.",
                duration: "Duration: 75 min",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-black/60 border border-cyan-900 rounded-2xl p-6 hover:shadow-[0_0_20px_#0891b2] transition duration-300"
              >
                <h3 className="text-2xl text-cyan-400 mb-3">{s.title}</h3>
                <p className="text-gray-300 mb-4">{s.desc}</p>
                <p className="text-cyan-200 font-semibold">{s.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✨ Testimonials Section */}
      <section
        id="testimonials"
        data-aos="fade-up"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 border-t border-cyan-900 bg-[url('/healing-bg5.jpg')] bg-cover bg-center relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>
        <div className="relative z-10 max-w-4xl">
          <h2 className="text-4xl font-semibold text-cyan-300 mb-10">
            Voices of Healing
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "“I felt warmth and peace flow through my body. My anxiety melted away within minutes — pure serenity.”",
                name: "Aditi Sharma",
              },
              {
                quote:
                  "“The quantum session reconnected me to my intuition. It felt like rediscovering my inner compass.”",
                name: "Raj Malhotra",
              },
              {
                quote:
                  "“Soothing, gentle, and powerful — it’s like my soul exhaled for the first time in years.”",
                name: "Meera Desai",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-black/50 border border-cyan-800 rounded-2xl p-6 shadow-lg hover:shadow-[0_0_20px_#0891b2] transition"
              >
                <p className="italic text-gray-300 mb-4">{t.quote}</p>
                <p className="text-cyan-400 font-semibold">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🧘‍♀️ Booking Form Section */}
      <section
        id="booking"
        data-aos="fade-up"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 border-t border-cyan-900 bg-[url('/healing-bg4.jpg')] bg-cover bg-center relative"
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative z-10 max-w-lg w-full bg-black/60 p-8 rounded-2xl shadow-[0_0_20px_#0891b2]">
          <h2 className="text-3xl font-semibold text-cyan-300 mb-6">
            Book Your Healing Session
          </h2>
          <p className="text-gray-300 mb-6">
            Fill in your details below — we’ll confirm your session via email or WhatsApp.
          </p>

          <form
            action="https://formspree.io/f/myznnojw"
            method="POST"
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Full Name"
              className="w-full px-4 py-2 rounded-lg bg-black/40 border border-cyan-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              className="w-full px-4 py-2 rounded-lg bg-black/40 border border-cyan-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              type="text"
              name="phone"
              required
              placeholder="+91 XXXXX XXXXX"
              className="w-full px-4 py-2 rounded-lg bg-black/40 border border-cyan-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              type="date"
              name="preferred_date"
              className="w-full px-4 py-2 rounded-lg bg-black/40 border border-cyan-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Tell us about your healing intention..."
              className="w-full px-4 py-2 rounded-lg bg-black/40 border border-cyan-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            ></textarea>

            {/* Optional Redirect */}
            <input
              type="hidden"
              name="_redirect"
              value="https://happinessx.in/thank-you"
            />

            <button
              type="submit"
              className="w-full bg-cyan-600 text-black px-6 py-3 rounded-lg shadow hover:bg-cyan-500 hover:scale-105 transform transition font-semibold"
            >
              Send Booking Request
            </button>
          </form>
        </div>
      </section>

      {/* 💌 Contact Section */}
      <section
        id="contact"
        className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6 py-20 border-t border-cyan-900 bg-black/80"
      >
        <h2 className="text-3xl font-semibold text-cyan-300 mb-6">
          Contact & Connect
        </h2>
        <p className="text-gray-400 mb-4 max-w-xl">
          Reach out to awaken your inner harmony, book a session, or connect
          through our social channels.
        </p>

        <div className="text-cyan-400 space-y-2">
          <p>
            📞 Phone / WhatsApp:{" "}
            <a
              href="https://wa.me/918777845559"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-cyan-300"
            >
              +91 877784 5559
            </a>
          </p>
          <p>
            ✉️ Email:{" "}
            <a
              href="mailto:contact@happinessx.in"
              className="underline hover:text-cyan-300"
            >
              contact@happinessx.in
            </a>
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-8 text-cyan-400">
          <a href="https://www.instagram.com/happynesspom/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300">Instagram</a>
          <a href="https://www.facebook.com/tapobroto.bhattacharya/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300">Facebook</a>
          <a href="https://www.linkedin.com/in/tapobroto-bhattacharya-1980a699/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300">LinkedIn</a>
          <a href="https://www.youtube.com/@HEALER_T_BHATTACHARYA" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300">YouTube</a>
        </div>
      </section>

      {/* 📱 Floating Buttons */}
      <a
        href="#booking"
        className="fixed bottom-6 left-6 bg-cyan-600 text-black px-4 py-2 rounded-lg shadow hover:bg-cyan-500 transition z-50 md:hidden"
      >
        Book Now
      </a>

      <a
        href="https://wa.me/918777845559"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition z-50"
      >
        <img src="/whatsapp-icon.svg" alt="WhatsApp" className="h-6 w-6" />
      </a>

      <footer className="text-center py-6 border-t border-cyan-900 text-gray-500 text-sm bg-black/70">
        © {new Date().getFullYear()} Happiness X — Awaken Your Dormented Instinct
      </footer>
    </div>
  );
}
