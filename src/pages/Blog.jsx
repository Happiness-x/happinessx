import React from "react";
import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "Somatic Grounding Practices",
    excerpt: "Short daily practices to anchor your nervous system.",
  },
  {
    id: 2,
    title: "Understanding Sattva, Rajas & Tamas",
    excerpt: "A practical view of Ayurvedic mind states.",
  },
  {
    id: 3,
    title: "Work–Life Integration for Women",
    excerpt: "Gentle routines for sustainable energy and balance.",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen p-8 bg-black text-white font-serif">
      <h1 className="text-4xl text-cyan-300 mb-6">Blog</h1>

      <div className="space-y-6">
        {posts.map((p) => (
          <article
            key={p.id}
            className="bg-black/60 p-6 rounded-lg border border-cyan-900"
          >
            <h2 className="text-2xl text-cyan-200 mb-2">{p.title}</h2>
            <p className="text-gray-300">{p.excerpt}</p>
            <Link
              to={`/blog/${p.id}`}
              className="text-cyan-300 mt-3 inline-block"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
