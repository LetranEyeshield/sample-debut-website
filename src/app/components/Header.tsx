import Navbar from "./Navbar";
import Link from "next/link";

export default function Header() {
  return (
    <header id="header" className="flex items-center justify-between py-10">
      <Link href="/">
        <img
          src="/images/LOGO.jpg"
          alt="RM'S MUG PRINING Logo"
          loading="lazy"
        />
      </Link>
      <Navbar />
    </header>
  );
}
