import React, { useEffect, useState } from "react";

const sections = ["hero", "about", "skills", "projects", "experience"];

function NavDots() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-1/2 -translate-y-1/2 right-6 z-50 flex flex-col gap-3">
      {sections.map((id) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          className={`w-3 h-3 rounded-full transition ${
            active === id
              ? "bg-yellow-400 scale-110"
              : "bg-slate-600 hover:bg-yellow-500"
          }`}
        />
      ))}
    </div>
  );
}

export default NavDots;
