import React, { useState } from "react";

const images = [
  "/quantum-touch-1.png",
  "/quantum-touch-2.png",
  "/poster1.jpg",
  "/healing-bg5.jpg",
];

export default function Gallery() {
  const [open, setOpen] = useState(null);

  return (
    <div className="min-h-screen p-8 bg-black text-white font-serif">
      <h1 className="text-4xl text-cyan-300 mb-6">Gallery</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setOpen(src)}
            className="overflow-hidden rounded-lg"
          >
            <img
              src={src}
              alt={`Gallery image ${i + 1}`}
              loading="lazy"
              onError={(e) => (e.target.src = "/logo.png")}
              className="w-full h-48 object-cover rounded-lg"
            />
          </button>
        ))}
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setOpen(null)}
        >
          <img
            src={open}
            alt="Expanded view"
            className="max-h-[85vh] max-w-[85vw] rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
}
