export default function Services() {
  const cards = [
    {
      title: "Quantum Therapeutic Touch",
      desc: "A perspective-friendly approach for thinkers and skeptics.",
      cta: "Explore this perspective",
      href: "/quantum-therapeutic-touch",
    },
    {
      title: "Women's-Focused Awareness Session",
      desc: "Permission, safety, and paced presence for women.",
      cta: "See if this fits you",
      href: "/womens-wellness",
    },
    {
      title: "General Somatic Awareness Support",
      desc: "For learners curious about nervous system awareness.",
      cta: "Learn more",
      href: "/learning",
    },
    {
      title: "Private Guided Wellness Session",
      desc: "A cautious, private one-to-one guided experience.",
      cta: "Learn more",
      href: "/how-it-works?path=guided",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-24 text-gray-200 space-y-16">
      <section className="text-center space-y-6">
        <h1 className="text-5xl text-cyan-300 font-semibold">Services</h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          Four ways to explore awareness-based wellness. Each path is optional.
        </p>
      </section>

      <div className="grid sm:grid-cols-2 gap-8">
        {cards.map((c) => (
          <div key={c.title} className="card flex flex-col space-y-4">
            <h3 className="text-2xl text-cyan-300 font-semibold">{c.title}</h3>
            <p className="text-base text-gray-300 leading-relaxed flex-grow">{c.desc}</p>
            <p className="text-xs text-gray-400">Not therapy · Not medical · Informational only</p>
            <a href={c.href} className="btn-primary w-full text-center">
              {c.cta}
            </a>
          </div>
        ))}
      </div>

      <section className="section-divider space-y-4">
        <h2 className="text-2xl text-cyan-300 font-semibold">How Sessions Are Guided</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Sessions emphasise attentive, non-directive presence. Clients are not required to explain sensations.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed">
          Participation is voluntary and client-led at every moment.
        </p>
      </section>

      <section className="text-center border-t border-cyan-900 pt-8">
        <p className="microcopy-reassurance">
          No pricing displayed · No obligation · You decide the pace
        </p>
      </section>
    </div>
  );
}
