export default function Services() {
  const cards = [
    {
      title: "Quantum Therapeutic Touch",
      desc: "A perspective-friendly approach for thinkers and skeptics.",
      cta: "Explore this perspective",
      href: "/quantum-healing",
    },
    {
      title: "Women's-Focused Awareness Session",
      desc: "Permission, safety, and paced presence for women.",
      cta: "Check eligibility",
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
    <div className="max-w-6xl mx-auto px-6 py-24 text-gray-200">
      <h1 className="text-4xl text-cyan-300 font-semibold mb-12 text-center">Services</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((c) => (
          <div key={c.title} className="bg-black/50 border border-cyan-900 rounded-lg p-6 flex flex-col">
            <h3 className="text-cyan-300 font-semibold mb-2">{c.title}</h3>
            <p className="text-sm text-gray-300 flex-grow">{c.desc}</p>
            <p className="text-xs text-gray-400 mt-4">This is informational only.</p>
            <a href={c.href} className="mt-4 px-4 py-3 rounded-full bg-cyan-500 text-black font-semibold text-sm hover:bg-cyan-400 transition" style={{minHeight:44, display:'inline-flex', alignItems:'center', justifyContent:'center'}}>{c.cta}</a>
          </div>
        ))}
      </div>

      <section className="mt-16 border-t border-cyan-900 pt-8">
        <h3 className="text-xl text-cyan-300 mb-4">How Sessions Are Guided</h3>
        <p className="text-sm sm:text-base leading-relaxed text-gray-300">Sessions emphasise attentive, non-directive presence. Clients are not required to explain sensations; participation is voluntary and client-led.</p>
      </section>

      <section className="mt-8">
        <h3 className="text-sm text-gray-400 italic text-center">This is informational only · No pricing displayed · No obligation</h3>
      </section>
    </div>
  );
}
