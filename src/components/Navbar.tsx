"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import MobileNav from "./MobileNav";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
      <Link href="/" className="text-2xl font-bold text-[#F4631E]">
        Shritej.dev
      </Link>

      {/* Desktop Links */}
      <nav className="hidden md:flex gap-6 items-center text-muted-foreground">
        <Link href="/about" className="hover:text-foreground transition">
          About
        </Link>
        <Link href="/contact" className="hover:text-foreground transition">
          Contact
        </Link>
        <ThemeToggle />
      </nav>

      {/* Mobile Nav */}
      <MobileNav />
    </header>
  );
}
