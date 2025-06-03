"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // You can move this array outside the component
  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/gallery", label: "Products" },
    { href: "/reviews", label: "Reviews" },
    { href: "/contacts", label: "Contact Us" },
  ];

  return (
    <footer className="footer">
      <nav className="">
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
                className={pathname === item.href ? "footer-active" : ""}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <p className="company-name">RM'S MUG PRINTING</p>
      <span className="reserved">All rights reserved 2025</span>
    </footer>
  );
}
