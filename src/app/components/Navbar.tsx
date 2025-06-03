"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  // You can move this array outside the component
  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about#about-h2", label: "About" },
    { href: "/gallery#gallery-h2", label: "Products" },
    { href: "/reviews#reviews-h2", label: "Reviews" },
    { href: "/contacts#contact-h2", label: "Contact Us" },
  ];

  // Update current path including hash on client side
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname + window.location.hash);
    }
  }, [pathname]);

  return (
    <nav id="navbar" className="">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div id="hamburger-menu" className="text-xl font-bold mr-2">
          Menu
        </div>
        {/* Hamburger Button */}
        <button
          className="lg:hidden flex flex-col space-y-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="w-6 h-0.5 bg-black" />
          <span className="w-6 h-0.5 bg-black" />
          <span className="w-6 h-0.5 bg-black" />
        </button>
        {/* Menu Items */}
        <ul
          className={`lg:flex lg:items-center gap-6 transition-all duration-300 ease-in-out ${
            menuOpen ? "block mt-4" : "hidden"
          } lg:mt-0`}
        >
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={currentPath === item.href ? "active" : ""}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
