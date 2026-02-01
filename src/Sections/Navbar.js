"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const sections = ["home", "projects", "about", "contact"];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const lastSection = useRef("home");
  const ticking = useRef(false);

  // 🔹 SCROLL SPY (optimized for mobile)
  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;

      ticking.current = true;

      requestAnimationFrame(() => {
        let current = lastSection.current;

        for (const id of sections) {
          const el = document.getElementById(id);
          if (!el) continue;

          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4) {
            current = id;
          }
        }

        if (current !== lastSection.current) {
          lastSection.current = current;
          setActiveSection(current);
        }

        ticking.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔹 KEEP URL HASH IN SYNC (NO LAG)
  useEffect(() => {
    history.replaceState(null, "", `#${activeSection}`);
  }, [activeSection]);

  // 🔹 FORCE SCROLL EVEN IF HASH IS SAME
  const handleNavClick = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setActiveSection(id);
  };

  const getLinkClass = (id) =>
    activeSection === id
      ? "nav-item bg-white text-black"
      : "nav-item";

  return (
    <div className="flex justify-center">
      <div className="fixed top-4 z-50 flex bg-white/10 backdrop-blur rounded-full">
        {sections.map((id) => (
          <Link
            key={id}
            href={`#${id}`}
            onClick={handleNavClick(id)}
            className={getLinkClass(id)}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
