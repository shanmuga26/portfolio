import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", id: "hero" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Contact", id: "contact" },
];

function Header() {
  const [active, setActive] = useState("hero");

  // ‑‑ smooth‑scroll on click
  const handleClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // ‑‑ observe sections as they enter viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const inView = entries.find((e) => e.isIntersecting);
        if (inView) setActive(inView.target.id);
      },
      { threshold: 0.6 }
    );

    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="sticky top-0 z-50 bg-[#0d182b]/90 backdrop-blur-md shadow"
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-lg font-semibold tracking-wide">Shanmuga Lingam</h1>

        <ul className="hidden md:flex space-x-8">
          {navLinks.map(({ name, id }) => (
            <li
              key={id}
              onClick={() => handleClick(id)}
              className={`cursor-pointer transition-colors ${
                active === id ? "text-cyan-400" : "hover:text-cyan-300"
              }`}
            >
              {name}
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}

export default Header;
