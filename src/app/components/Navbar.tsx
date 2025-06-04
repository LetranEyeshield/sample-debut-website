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

  function handleToggle() {
    const navMenu = document.getElementById("navMenu") as HTMLElement;
    navMenu.classList.toggle("hidden");
  }

  return (
    <>
      <div className="responsive-menu">
        {/* Hamburger Button */}
        <button id="menuToggle" onClick={handleToggle}>
          Menu ☰
        </button>
        <nav id="navMenu" className="hidden">
          {/* Menu Items */}
          <ul className="flex flex-col gap-4">
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
        </nav>
      </div>

      <nav id="navbar" className="">
        {/* Menu Items */}
        <ul className="flex items-center gap-6 transition-all duration-300 ease-in-out">
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
      </nav>
    </>
  );
}
