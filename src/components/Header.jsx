export default function Header() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Therapies", href: "/#sessions" },
    { label: "Quantum", href: "/quantum-healing" },
    { label: "Gallery", href: "/gallery" },
    { label: "Blog", href: "/blog" },
    { label: "Learning", href: "/learn" },
    { label: "Booking", href: "/#booking" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-black/40 backdrop-blur-md text-cyan-200 py-4 px-6 flex justify-center space-x-8 border-b border-cyan-900 z-50">
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
