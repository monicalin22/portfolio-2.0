"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function HomeNav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 py-6 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[rgba(18,18,17,0.8)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-8 flex justify-end">
        <div className="flex gap-12">
          <Link href="/work" className="mono uppercase text-white">
            WORK
          </Link>
          <Link href="/projects" className="mono uppercase text-white">
            PROJECTS
          </Link>
          <Link href="/about" className="mono uppercase text-white">
            ABOUT
          </Link>
        </div>
      </div>
    </nav>
  );
}

