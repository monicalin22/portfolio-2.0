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
  const [isIconHovered, setIsIconHovered] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Handle scroll to determine sticky state (for visual feedback if needed)
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

  return (
    <div
      ref={sidebarRef}
      className="transition-all duration-300 sticky pointer-events-none"
      style={{
        top: "60px",
        width: "100%",
      }}
    >
      <div
        className="relative pointer-events-auto transition-all duration-300"
        style={{ paddingTop: "0" }}
      >
          {/* Toggle Icon - always visible */}
          <div className="flex items-center w-full mb-6 relative">
            {isOpen && (
              <button
                onClick={() => handleNavClick(navItems[0].sectionId)}
                className="sidebar transition-colors duration-200 cursor-pointer text-left whitespace-nowrap flex-1"
                style={{
                  color: activeSection === navItems[0].sectionId
                    ? "var(--text-selected)"
                    : "var(--unselected-icon)",
                }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--hovered-icon)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color =
                  activeSection === navItems[0].sectionId
                    ? "var(--text-selected)"
                    : "var(--unselected-icon)";
              }}
              >
                {navItems[0].label}
              </button>
            )}
            <button
              onClick={toggleSidebar}
              className={`flex-shrink-0 ${isOpen ? "ml-4" : ""}`}
              onMouseEnter={() => setIsIconHovered(true)}
              onMouseLeave={() => setIsIconHovered(false)}
            >
              <Image
                src={
                  isOpen
                    ? "/icons/sidebar-open.svg"
                    : "/icons/sidebar-close.svg"
                }
                alt={isOpen ? "Open sidebar" : "Close sidebar"}
                width={24}
                height={24}
                style={{
                  opacity: isIconHovered ? 0.8 : 0.4,
                  transition: "opacity 0.2s ease",
                }}
              />
            </button>
          </div>

          {/* Navigation Items */}
          <nav>
            {isOpen && (
              <ul className="flex flex-col gap-6">
                {navItems.slice(1).map((item) => {
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
            )}
          </nav>
        </div>
      </div>
  );
}
