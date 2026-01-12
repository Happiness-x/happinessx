import React from "react";

export default function Header() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Quantum", href: "/quantum-healing" },
    { label: "Gallery", href: "/gallery" },
    { label: "Blog", href: "/blog" },
    { label: "Learning", href: "/learn" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-black/60 backdrop-blur-md text-cyan-200 py-4 flex justify-center gap-8 z-50">
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="hover:text-cyan-400 transition"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
