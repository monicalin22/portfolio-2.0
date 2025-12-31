"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface NavItem {
  label: string;
  sectionId: string;
}

interface CaseStudySidebarProps {
  navItems: NavItem[];
}

export default function CaseStudySidebar({ navItems }: CaseStudySidebarProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("overview");
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Handle scroll to determine sticky state
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = 600;
      setIsSticky(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer to detect active section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id || entry.target.getAttribute("data-section-id");
          if (id) {
            setActiveSection(id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all sections
    navItems.forEach((item) => {
      if (item.sectionId === "overview") {
        // Create a sentinel element at the top for overview
        const sentinel = document.createElement("div");
        sentinel.id = "overview-sentinel";
        sentinel.setAttribute("data-section-id", "overview");
        sentinel.style.position = "absolute";
        sentinel.style.top = "0";
        sentinel.style.height = "1px";
        document.body.prepend(sentinel);
        observer.observe(sentinel);
      } else {
        const element = document.getElementById(item.sectionId);
        if (element) {
          observer.observe(element);
        }
      }
    });

    // Also check scroll position for overview
    const handleScrollTop = () => {
      if (window.scrollY < 100) {
        setActiveSection("overview");
      }
    };

    window.addEventListener("scroll", handleScrollTop);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScrollTop);
      const sentinel = document.getElementById("overview-sentinel");
      if (sentinel) {
        sentinel.remove();
      }
    };
  }, [navItems]);

  const handleNavClick = (sectionId: string) => {
    if (sectionId === "overview") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = isSticky ? 60 : 0;
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Calculate icon position: right end of 2nd column when open, first column when closed
  // For a 1440px container: (1440px / 12) * 2 = 240px for 2 columns
  // Plus margins and gutters: simplified calculation
  const iconPosition = isOpen
    ? "calc(40px + (100vw - 1440px) / 2 + (1440px / 12 * 2) + 32px - 24px)"
    : "40px";

  return (
    <div
      ref={sidebarRef}
      className={`transition-all duration-300 ${
        isSticky ? "fixed top-[60px]" : "absolute top-0"
      } left-0 w-full z-40 pointer-events-none`}
    >
      <div className="max-w-[1440px] mx-auto relative px-8">
        <div
          className="flex items-start gap-8 pointer-events-auto transition-all duration-300"
          style={{ left: "40px" }}
        >
          {/* Navigation Items */}
          <nav
            className={`transition-all duration-300 ${
              isOpen
                ? "opacity-100 max-w-none"
                : "opacity-0 max-w-0 overflow-hidden"
            }`}
          >
            <ul className="flex flex-col gap-6">
              {navItems.map((item) => {
                const isActive = activeSection === item.sectionId;
                const defaultColor = isActive
                  ? "var(--text-selected)"
                  : "var(--unselected-icon)";
                return (
                  <li key={item.sectionId}>
                    <button
                      onClick={() => handleNavClick(item.sectionId)}
                      className="sidebar transition-colors duration-200 cursor-pointer text-left whitespace-nowrap"
                      style={{
                        color: defaultColor,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "var(--hovered-icon)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = defaultColor;
                      }}
                    >
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Toggle Icon */}
          <button
            onClick={toggleSidebar}
            className="transition-all duration-300 flex-shrink-0"
            style={{
              color: "var(--unselected-icon)",
              position: "absolute",
              left: iconPosition,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--hovered-icon)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--unselected-icon)";
            }}
          >
            <Image
              src={
                isOpen
                  ? "/icons/sidebar-close.svg"
                  : "/icons/sidebar-open.svg"
              }
              alt={isOpen ? "Close sidebar" : "Open sidebar"}
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
